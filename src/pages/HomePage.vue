<template>
  <div class="container">
    <Table :productList="productArray" />
    <Delete />
    <div class="line">
      <AddProducts />
      <UpdateProduct :productList="productArray" />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import Table from "../components/Table.vue";
import AddProducts from "../components/AddProducts.vue";
import UpdateProduct from "../components/UpdateProduct.vue";
import Delete from "../components/Delete.vue";
import { getProductData } from "../services/api";

const productArray = ref([]);

onMounted(async () => {
  try {
    const res = await getProductData();
    productArray.value = res;
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
});
</script>

<style>
.container {
  margin: 20px;
}
.line {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 30px;
  align-items: flex-start;
}
</style>
