<script setup>
import { ref } from "vue";
const firstName = "Xuan";
function onClickMe() {}
</script>
<template>
  <div>Xin chào {{firstName}}</div>
  <button @click="onClickMe"></button>
</template>
