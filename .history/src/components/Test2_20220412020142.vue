<template>
  <div>
    <h3>Hello</h3>
    <div v-for="(item, i) in cars" :key="i">
      {{ item.name }}
    </div>
  </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
const cars = ref([
  {
    id: 1,
    name: "Ford",
    year: "1903",
    color: "red",
    price: "100000",
    isSold: false,
  },
  {
    id: 2,
    name: "Audi",
    year: "1904",
    color: "blue",
    price: "200000",
    isSold: false,
  },
  {
    id: 3,
    name: "BMW",
    year: "1905",
    color: "black",
    price: "300000",
    isSold: false,
  },
]);
</script>
