<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { onMounted, watch } from "vue";
import useZafClient from "./uses/zafClient";
const { ticket, loading, requester } = useZafClient();
onMounted(() => {
  // console.log("mounted", ticket);
});
</script>
<template>
  <div v-if="loading">Đang tải...</div>
  <div v-else>
    <h3 style="text-align: left;">Requester #{{requester.id}}</h3>
    <h3 style="text-align: left;">Ticket #{{ticket.id}}</h3>
    <h3 style="text-align: left;">Requester #{{requester.id}}</h3>
    <h6 style="text-align: left;">SĐT: {{ requester.phone }}</h6>
    <h6 style="text-align: left;">Email: {{ requester.email }}</h6>
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
