<script setup>
import { ref } from "vue";
const firstName = "Xuan";
function onClickMe() {
     firstName = "Xuan click";
}
</script>
<template>
  <div>Xin chào {{firstName}}</div>
  <button @click="onClickMe">Change name</button>
</template>
