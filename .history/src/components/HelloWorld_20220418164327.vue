<script setup>
import { ref, onMounted } from "vue";

defineProps({
  msg: String,
});

onMounted(() => {
  console.log("Mouted")
  // if (ZAF) {
  //   console.log("ZAF is ready");

  //   var client = ZAF.init();
  //   console.log(client);
  // }
});

const count = ref(0);
</script>

<template>
  <div>Xin chào User: {{ msg }}</div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
