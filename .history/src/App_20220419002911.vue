<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { onMounted, watch } from "vue";
import useZafClient from "./uses/zafClient";
const { client, ticket, loading, requester } = useZafClient();
onMounted(() => {
  console.log("mounted", ticket);
});
watch(requester, (newVal, oldVal) => {
  console.log("requester", newVal, oldVal);
});
});

</script>

<template>
  <div v-if="loading">Đang tải...</div>
  <div v-else>
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>Xin chào, {{ requester.name }}</p>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
