<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

var client = ZAF.init();
console.log(client);  

const count = ref(0)
</script>

<template>
  <div>
    Xin chào User:
  </div>
</template>


<style scoped>
a {
  color: #42b983;
}
</style>
