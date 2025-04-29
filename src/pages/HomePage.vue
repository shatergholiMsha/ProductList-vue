<template>
  <div class="container">
    <AddProducts />
    <Delete />
    <Table :productList="productArray" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Table from "../components/Table.vue";
import AddProducts from "../components/AddProducts.vue";
import Delete from "../components/Delete.vue";

const productArray = ref([
  {
    id: 1,
    name: "Apple",
    description: "Fresh red apple",
    price: 3.5,
    category: "test",
    image: "https://picsum.photos/id/101/100",
    C_OR_R: "T",
  },
  {
    id: 2,
    name: "Banana",
    description: "Ripe bananas",
    price: 2,
    category: "test",
    image: "https://picsum.photos/id/102/100",
    C_OR_R: "T",
  },
  {
    id: 3,
    name: "Orange",
    description: "Juicy oranges",
    price: 4,
    category: "test",
    image: "https://picsum.photos/id/103/100",
    C_OR_R: "T",
  },
]);
</script>

<style>
.container {
  margin: 20px;
}
</style>
