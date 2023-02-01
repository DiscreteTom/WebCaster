<template>
  <p v-if="errMsg" style="color: red">{{ errMsg }}</p>

  <main>
    <div v-show="role == 'unknown' || role == 'caster'" style="margin: 20px">
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
        <input type="checkbox" v-model="xr" :disabled="role == 'caster'" />
      </p>
      <p>
        Show Grid in WebXR:
        <input type="checkbox" v-model="grid" :disabled="!xr" />
      </p>
      <p>
        Show Axis in WebXR:
        <input type="checkbox" v-model="axis" :disabled="!xr" />
      </p>
      <button @click="register">Register as Viewer</button>
      <button @click="cast" style="margin-left: 20px">
        Cast Screen to Viewer
      </button>
    </div>

    <div v-show="role == 'viewer'">
      <div ref="videos" v-show="xr === false">
        <!-- place holder video -->
        <video
          v-if="streams.length === 0"
          style="width: 100%; height: 100%; object-fit: fill"
          controls
        ></video>
      </div>
    </div>

    <p v-if="casting">Casting: {{ casting }} stream(s).</p>
  </main>
</template>

<script setup lang="ts">
import { Peer } from "peerjs";
import { onMounted, ref } from "vue";
import { initScene, addVideo } from "./xrtc";

const viewerName = ref("viewer");
const host = ref("0.peerjs.com");
const port = ref(443);
const path = ref("/");
const xr = ref(false);
const grid = ref(true);
const axis = ref(false);

const role = ref<"unknown" | "viewer" | "caster">("unknown");
const streams = ref<MediaStream[]>([]);
const videos = ref<HTMLDivElement>();
const errMsg = ref("");
const casting = ref(0);

function register() {
  role.value = "viewer";

  if (xr.value) initScene(grid.value, axis.value);

  const peer = new Peer(viewerName.value, {
    host: host.value,
    port: port.value,
    path: path.value,
  });
  peer.on("call", (call) => {
    call.answer();
    call.on("stream", (stream) => {
      streams.value.push(stream);
      const video = document.createElement("video");
      video.srcObject = stream;
      video.autoplay = true;
      video.controls = true;
      video.style.width = "100%";
      video.style.height = "100%";
      video.style.objectFit = "fill";
      videos.value!.appendChild(video);

      if (xr.value) addVideo(video);
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
    casting.value++;
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
  if (urlParams.has("grid")) {
    grid.value = urlParams.get("grid") == "true";
  }
  if (urlParams.has("axis")) {
    axis.value = urlParams.get("axis") == "true";
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
