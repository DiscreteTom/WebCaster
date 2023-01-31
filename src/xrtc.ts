import * as three from "three";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";

// Make a new scene
const scene = new three.Scene();
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
  screen.position.set(0, screenHeight / 2, -3);
  scene.add(screen);
}
