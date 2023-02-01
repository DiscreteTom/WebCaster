import * as three from "three";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";
import { XRControllerModelFactory } from "three/examples/jsm/webxr/XRControllerModelFactory.js";

const scene = new three.Scene();
type Screen = three.Mesh<
  three.BoxGeometry,
  (three.MeshBasicMaterial | three.MeshNormalMaterial)[]
>;
const screens = new three.Group();
let holdObject: three.Object3D<three.Event> | null = null;

export function initScene() {
  // Make a camera. note that far is set to 100, which is better for real-world sized environments
  const camera = new three.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(0, 0, 0);
  scene.add(camera);

  // helpers
  scene.add(new three.GridHelper(500, 500));
  scene.add(new three.AxesHelper(10));

  // Make a renderer that fills the screen
  const renderer = new three.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  // Turn on VR support
  renderer.xr.enabled = true;
  // Set animation loop
  renderer.setAnimationLoop(() => {
    // Draw everything
    renderer.render(scene, camera);
  });
  // Add canvas to the page
  document.body.appendChild(renderer.domElement);
  // Add a button to enter/exit vr to the page
  document.body.appendChild(VRButton.createButton(renderer));

  // controllers
  const controller1 = renderer.xr.getController(0);
  controller1.addEventListener("selectstart", onSelectStart);
  controller1.addEventListener("selectend", onSelectEnd);
  scene.add(controller1);
  const controller2 = renderer.xr.getController(1);
  controller2.addEventListener("selectstart", onSelectStart);
  controller2.addEventListener("selectend", onSelectEnd);
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

function makeVideoMaterial(video: HTMLVideoElement) {
  const videoTexture = new three.VideoTexture(video);

  const videoMaterial = new three.MeshBasicMaterial({
    map: videoTexture,
  });

  return videoMaterial;
}

export async function addVideo(video: HTMLVideoElement) {
  const videoMaterial = makeVideoMaterial(video);
  const otherMat = new three.MeshNormalMaterial();

  // wait until the video is ready
  if (video.videoWidth === 0 && video.videoHeight === 0) {
    await new Promise<void>((resolve) => {
      video.addEventListener("loadedmetadata", () => resolve(), false);
    });
  }

  console.log(video.videoWidth, video.videoHeight);

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
    holdObject = intersection.object;
    controller.attach(holdObject);
  }
};

const onSelectEnd: three.EventListener<
  three.Event,
  "selectend",
  three.XRTargetRaySpace
> = (event) => {
  // const controller = event.target as three.XRTargetRaySpace;

  if (holdObject !== null) {
    // holdObject.removeFromParent();
    // holdObject.matrixWorld.decompose(
    //   holdObject.position,
    //   holdObject.quaternion,
    //   holdObject.scale
    // );
    screens.attach(holdObject);
    holdObject = null;
  }
};

function getIntersections(controller: three.XRTargetRaySpace) {
  const tempMatrix = new three.Matrix4();
  tempMatrix.identity().extractRotation(controller.matrixWorld);

  const rayCaster = new three.Raycaster();
  rayCaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
  rayCaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);

  return rayCaster.intersectObjects(screens.children, false);
}
