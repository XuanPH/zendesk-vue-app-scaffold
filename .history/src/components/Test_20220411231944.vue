<script setup>
import { ref, reactive } from "vue";
const firstName = ref("Xuan");
const firstName2 = reactive("hihihi")
function onClickMe() {
     firstName.value = "Xuan click";
     firstName2 = "hihihi click";
}
// get now time and format to dd/MM/yyyy
function getNowDate() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
    return today;
}
</script>
<template>
  <div>Xin chào {{firstName}} - {{getNowDate()}} </div>
  <button @click="onClickMe">Change name</button>
</template>
