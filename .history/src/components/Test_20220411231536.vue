<script setup>
import { ref } from "vue";
const firstName = ref("Xuan");
function onClickMe() {
     firstName.value = "Xuan click";
}
</script>
<template>
  <div>Xin chào {{firstName}}</div>
  <button @click="onClickMe">Change name</button>
</template>
