import * as three from "three";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";
import { XRControllerModelFactory } from "three/examples/jsm/webxr/XRControllerModelFactory.js";

const scene = new three.Scene();
type Screen = three.Mesh<
  three.BoxGeometry,
  (three.MeshBasicMaterial | three.MeshNormalMaterial)[]
>;
const screens = new three.Group();
let holdScreen: three.Object3D<three.Event> | null = null;
let squeezing = false;
const camera = new three.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
const listener = new three.AudioListener();
camera.add(listener);

export function initScene(grid: boolean, axis: boolean) {
  camera.position.set(0, 0, 0);
  scene.add(camera);

  // helpers
  if (grid) scene.add(new three.GridHelper(500, 500));
  if (axis) scene.add(new three.AxesHelper(10));

  // Make a renderer that fills the screen
  const renderer = new three.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  // Turn on VR support
  renderer.xr.enabled = true;
  // Set animation loop
  renderer.setAnimationLoop(() => {
    if (holdScreen !== null) {
      // move/scale screen using left/right joystick-y
      const gp = controller1.userData.gamepad as Gamepad;
      if (gp!.axes[1] > 0.1 || gp!.axes[3] > 0.1) {
        const value = Math.max(gp!.axes[1], gp!.axes[3]);
        if (squeezing) {
          // scale
          holdScreen.scale.x += value * 0.02;
          holdScreen.scale.y += value * 0.02;
        } else {
          // move
          holdScreen.position.z += value * 0.02;
        }
      } else if (gp!.axes[1] < -0.1 || gp!.axes[3] < -0.1) {
        const value = Math.min(gp!.axes[1], gp!.axes[3]); // value is negative
        if (squeezing) {
          // scale
          holdScreen.scale.x += value * 0.02;
          holdScreen.scale.y += value * 0.02;
        } else {
          // move
          holdScreen.position.z += value * 0.02;
        }
      }
    }

    // Draw everything
    renderer.render(scene, camera);
  });
  // Add canvas to the page
  document.body.appendChild(renderer.domElement);
  // Add a button to enter/exit vr to the page
  document.body.appendChild(VRButton.createButton(renderer));

  // controllers
  const controller1 = renderer.xr.getController(0);
  controller1.addEventListener("connected", (e) => {
    controller1.userData.gamepad = e.data.gamepad;
  });
  controller1.addEventListener("selectstart", onSelectStart);
  controller1.addEventListener("selectend", onSelectEnd);
  controller1.addEventListener("squeezestart", onSqueezeStart);
  controller1.addEventListener("squeezeend", onSqueezeEnd);
  scene.add(controller1);
  const controller2 = renderer.xr.getController(1);
  controller2.addEventListener("selectstart", onSelectStart);
  controller2.addEventListener("selectend", onSelectEnd);
  controller2.addEventListener("squeezestart", onSqueezeStart);
  controller2.addEventListener("squeezeend", onSqueezeEnd);
  scene.add(controller2);
  const controllerModelFactory = new XRControllerModelFactory();
  const controllerGrip1 = renderer.xr.getControllerGrip(0);
  controllerGrip1.add(
    controllerModelFactory.createControllerModel(controllerGrip1)
  );
  scene.add(controllerGrip1);
  const controllerGrip2 = renderer.xr.getControllerGrip(1);
  controllerGrip2.add(
    controllerModelFactory.createControllerModel(controllerGrip2)
  );
  scene.add(controllerGrip2);
  const geometry = new three.BufferGeometry().setFromPoints([
    new three.Vector3(0, 0, 0),
    new three.Vector3(0, 0, -1),
  ]);
  const line = new three.Line(geometry);
  // line.name = "line";
  line.scale.z = 5;
  controller1.add(line.clone());
  controller2.add(line.clone());

  // screens
  scene.add(screens);
}

export async function addVideo(video: HTMLVideoElement) {
  // wait until the video is ready
  if (video.videoWidth === 0 && video.videoHeight === 0) {
    await new Promise<void>((resolve) => {
      video.addEventListener("loadedmetadata", () => resolve(), false);
    });
  }
  console.log(`video size: ${video.videoWidth}x${video.videoHeight}`);

  const videoTexture = new three.VideoTexture(video);
  const videoMaterial = new three.MeshBasicMaterial({ map: videoTexture });
  const otherMat = new three.MeshNormalMaterial();

  const screenWidth = video.videoWidth / 500;
  const screenHeight = video.videoHeight / 500;
  const screen = new three.Mesh(
    new three.BoxGeometry(screenWidth, screenHeight, 1),
    [otherMat, otherMat, otherMat, otherMat, videoMaterial, otherMat]
  );
  if (screens.children.length === 0) {
    screen.position.set(0, screenHeight / 2, -3);
  } else {
    const maxX = screens.children
      .map((s) => {
        (s as Screen).geometry.computeBoundingBox();
        return (s as Screen).geometry.boundingBox!.max.x + s.position.x;
      })
      .sort()[screens.children.length - 1];
    screen.position.set(screenWidth / 2 + maxX, screenHeight / 2, -3);
  }

  // audio
  // first, check if the video has audio
  if (
    video.srcObject instanceof MediaStream &&
    video.srcObject.getAudioTracks().length > 0
  ) {
    const audio = new three.Audio(listener);
    audio.setMediaStreamSource(video.srcObject as MediaStream);
    screen.add(audio);
  }

  scene.add(screen);
  screens.attach(screen);
}

const onSelectStart: three.EventListener<
  three.Event,
  "selectstart",
  three.XRTargetRaySpace
> = (event) => {
  const controller = event.target as three.XRTargetRaySpace;

  const intersections = getIntersections(controller);
  if (intersections.length > 0) {
    const intersection = intersections[0];
    holdScreen = intersection.object;

    // make the screen face to the camera
    holdScreen.lookAt(camera.position);

    // player can hold the screen
    controller.attach(holdScreen);
  }
};
const onSelectEnd: three.EventListener<
  three.Event,
  "selectend",
  three.XRTargetRaySpace
> = (event) => {
  // const controller = event.target as three.XRTargetRaySpace;

  if (holdScreen !== null) {
    screens.attach(holdScreen);
    holdScreen = null;
  }
};

const onSqueezeStart: three.EventListener<
  three.Event,
  "squeezestart",
  three.XRTargetRaySpace
> = (event) => {
  squeezing = true;
};
const onSqueezeEnd: three.EventListener<
  three.Event,
  "squeezeend",
  three.XRTargetRaySpace
> = (event) => {
  squeezing = false;
};

function getIntersections(controller: three.XRTargetRaySpace) {
  const tempMatrix = new three.Matrix4();
  tempMatrix.identity().extractRotation(controller.matrixWorld);

  const rayCaster = new three.Raycaster();
  rayCaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
  rayCaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);

  return rayCaster.intersectObjects(screens.children, false);
}
