<template>
  <main>
    <div v-if="role == 'unknown'">
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
const role = ref<"unknown" | "viewer" | "caster">("unknown");
const video = ref<HTMLVideoElement>();

function register() {
  role.value = "viewer";

  const peer = new Peer(viewerName.value, {
    host: window.location.hostname,
    port: 9000,
    path: "/",
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

  const peer = new Peer("screen", {
    host: window.location.hostname,
    port: 9000,
    path: "/",
  });
  navigator.mediaDevices.getDisplayMedia().then((stream) => {
    peer.call("viewer", stream);
  });
}
</script>
