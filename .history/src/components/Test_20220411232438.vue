<script setup>
import { ref, reactive } from "vue";
const cars = ref([
    {
        id: 1,
        name: "Ford",
        year: "1903",
        color: "red",
        price: "100000",
        isSold: false
    },
    {
        id: 2,
        name: "Audi",
        year: "1904",
        color: "blue",
        price: "200000",
        isSold: false
    },
    {
        id: 3,
        name: "BMW",
        year: "1905",
        color: "black",
        price: "300000",
        isSold: false
    },
])


</script>
<template>
  <div>{{getNowDate()}} </div>
  <div v-for="(item,index) in cars" :key="index">
      <p>#{{item.id}}</p>
  </div>
  <button @click="onClickMe">Change name</button>
</template>
