
<script setup>
import { ref, reactive } from "vue";


</script>
<template>
  <div>Xin chào {{firstName}} - {{getNowDate()}} </div>
  <button @click="onClickMe">Change name</button>
</template>
