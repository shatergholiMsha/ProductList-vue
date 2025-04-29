<template>
  <form @submit.prevent="handleSubmit" class="form">
    <input v-model="form.name" placeholder="Title" required />
    <input v-model="form.description" placeholder="Description" required />
    <input v-model.number="form.price" placeholder="Price" required type="number" />
    <select v-model="form.category">
      <option value="test">Test</option>
    </select>
    <select v-model="form.C_OR_R">
      <option value="T">T</option>
    </select>
    <input v-model="form.image" placeholder="Image URL" required />

    <button type="submit">Add Product</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { createProduct, getProductData } from "../services/api";

const form = ref({
  name: "",
  description: "",
  price: 0,
  category: "",
  image: "",
  C_OR_R: "",
});

const handleSubmit = async () => {
  try {
    console.log("start function__");
    const productData = { ...form.value };
    await createProduct(productData);
    alert("created...");
    form.value = {
      name: "",
      description: "",
      price: 0,
      category: "",
      image: "",
      C_OR_R: "",
    };
    await fetchProducts(); 
  } catch (error) {
    alert("Failed to create");
  }
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}
input {
  padding: 6px;
}
button {
  padding: 8px;
  background-color: #1976d2;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
