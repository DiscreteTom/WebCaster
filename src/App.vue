<template>
  <p v-if="errMsg" style="color: red">{{ errMsg }}</p>

  <main>
    <div v-if="role == 'unknown'" style="margin: 20px">
      <p>
        Viewer Name:
        <input v-model="viewerName" />
      </p>
      <p>
        Peer Server Host:
        <input v-model="host" />
      </p>
      <p>
        Peer Server Port:
        <input type="number" v-model="port" />
      </p>
      <p>
        Peer Server Path:
        <input v-model="path" />
      </p>
      <p>
        View with WebXR:
        <input type="checkbox" v-model="xr" />
      </p>
      <button @click="register">Register as Viewer</button>
      <button @click="cast" style="margin-left: 20px">
        Cast Screen to Viewer
      </button>
    </div>
    <div v-else-if="role == 'viewer'">
      <video
        style="width: 100%; height: 100%; object-fit: fill"
        v-show="xr == false"
        ref="video"
        autoplay
        controls
      ></video>
    </div>
    <p v-else>Casting</p>
  </main>
</template>

<script setup lang="ts">
import { Peer } from "peerjs";
import { onMounted, ref } from "vue";
import { initScene, addVideo } from "./xrtc";

const viewerName = ref("viewer");
const host = ref("localhost");
const port = ref(9000);
const path = ref("/");
const xr = ref(false);

const role = ref<"unknown" | "viewer" | "caster">("unknown");
const video = ref<HTMLVideoElement>();
const errMsg = ref("");

function register() {
  role.value = "viewer";

  if (xr.value) initScene();

  const peer = new Peer(viewerName.value, {
    host: host.value,
    port: port.value,
    path: path.value,
  });
  peer.on("call", (call) => {
    call.answer();
    call.on("stream", (stream) => {
      video.value!.srcObject = stream;
      if (xr.value) addVideo(video.value!);
    });
  });
  peer.on("error", (err) => {
    console.error(err);
    errMsg.value = err.message;
  });
}

function cast() {
  role.value = "caster";

  const peer = new Peer({
    host: host.value,
    port: port.value,
    path: path.value,
  });
  peer.on("error", (err) => {
    console.error(err);
    errMsg.value = err.message;
  });
  navigator.mediaDevices.getDisplayMedia().then((stream) => {
    peer.call(viewerName.value, stream);
  });
}

onMounted(() => {
  // parse url params
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("viewer-name")) {
    viewerName.value = urlParams.get("viewer-name")!;
  }
  if (urlParams.has("host")) {
    host.value = urlParams.get("host")!;
  }
  if (urlParams.has("port")) {
    port.value = parseInt(urlParams.get("port")!);
  }
  if (urlParams.has("path")) {
    path.value = urlParams.get("path")!;
  }
  if (urlParams.has("xr")) {
    xr.value = urlParams.get("xr") == "true";
  }
  if (urlParams.has("role")) {
    const s = urlParams.get("role");
    if (s == "viewer") {
      register();
    } else if (s == "caster") {
      cast();
    }
  }
});
</script>
