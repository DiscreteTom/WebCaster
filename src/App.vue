<template>
  <main>
    <button @click="register">Register Viewer</button>
    <button @click="connect">Call with Screen</button>

    <video ref="video" width="1000" autoplay controls></video>
  </main>
</template>

<script setup lang="ts">
import { Peer } from "peerjs";
import { ref } from "vue";

const video = ref<HTMLVideoElement>();

function register() {
  const peer = new Peer("viewer", {
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

function connect() {
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
