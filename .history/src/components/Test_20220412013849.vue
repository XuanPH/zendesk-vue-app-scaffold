<template>
  <h3>{{ getNow }}</h3>
  <input type="text" style="width: 200px" v-model="searchName" />
  <div v-for="(item, index) in filterCars" :key="index">
    <p>#{{ item.id }} - {{ item.name }}</p>
  </div>
  <button @click="onClickMe">Change name</button>
</template>
<script>
import { ref, reactive, computed, onMounted, watch, watchEffect } from "vue";
export default {
  setup() {
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
    const now = ref(new Date());

    const searchName = ref("");
    var getNow = computed(() => {
      // format date to dd/mm/yyyy HH:MM:SS
      return now.value.toLocaleString();
    });
    // filter cars by name
    const filterCars = computed(() => {
      return cars.value.filter((car) => {
        return car.name.toLowerCase().includes(searchName.value.toLowerCase());
      });
    });

    onMounted(() => {
      setInterval(() => {
        now.value = new Date();
      }, 1000);
    });
    watch(searchName, (newValue, oldValue) => {
      console.log(`searchName changed from ${oldValue} to ${newValue}`);
    });

    watchEffect(() => {
      console.log(`searchName changed to ${searchName.value}`);
    });
  },
};
</script>
