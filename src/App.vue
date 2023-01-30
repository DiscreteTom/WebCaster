<template>
  <main>
    <div v-if="role == 'unknown'">
      <p>
        Viewer Name:
        <input v-model="viewerName" />
      </p>
      <p>
        Peer Server Port:
        <input type="number" v-model="port" />
      </p>
      <p>
        Peer Server Path:
        <input v-model="path" />
      </p>
      <button @click="register">Register as Viewer</button>
      <button @click="cast">Cast Screen</button>
    </div>
    <video
      style="width: 100%; height: 100%; object-fit: fill"
      v-else-if="role == 'viewer'"
      ref="video"
      autoplay
      controls
    ></video>
    <p v-else>Casting</p>
  </main>
</template>

<script setup lang="ts">
import { Peer } from "peerjs";
import { ref } from "vue";

const viewerName = ref("viewer");
const port = ref(9000);
const path = ref("/");

const role = ref<"unknown" | "viewer" | "caster">("unknown");
const video = ref<HTMLVideoElement>();

function register() {
  role.value = "viewer";

  const peer = new Peer(viewerName.value, {
    host: window.location.hostname,
    port: port.value,
    path: path.value,
  });
  peer.on("call", (call) => {
    call.answer();
    call.on("stream", (stream) => {
      video.value!.srcObject = stream;
    });
  });
}

function cast() {
  role.value = "caster";

  const peer = new Peer({
    host: window.location.hostname,
    port: port.value,
    path: path.value,
  });
  navigator.mediaDevices.getDisplayMedia().then((stream) => {
    peer.call(viewerName.value, stream);
  });
}
</script>
