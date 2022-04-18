<template>
    <div>
        
    </div>
</template>
<script>
import { ref } from "vue"
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
    },
}
</script>