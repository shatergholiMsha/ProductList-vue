<template>
  <div class="main-addProduct">
    <div class="title">Create your Product</div>
    <form @submit.prevent="handleSubmit" class="form">
      <input v-model="form.Title" placeholder="Title" required />
      <input v-model="form.Description" placeholder="Description" required />
      <input v-model.number="form.Price" placeholder="Set price" required type="number" />

      <select v-model="form.Category" required>
        <option disabled value="">Select a category</option>
        <option value="test">Test</option>
      </select>

      <select v-model="form.C_OR_R" required>
        <option disabled value="">Select C_OR_R</option>
        <option value="T">T</option>
      </select>

      <input v-model="form.Image" placeholder="Image URL (max 50 characters)" maxlength="50" required />
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { createProduct } from "../services/api";

const form = ref({
  Title: "",
  Description: "",
  Price: "",
  Category: "",
  Image: "",
  C_OR_R: "",
});

const handleSubmit = async () => {
  try {
    const productData = { ...form.value };
    await createProduct(productData);
    alert("created...");
    form.value = {
      Title: "",
      Description: "",
      Price: "",
      Category: "",
      Image: "",
      C_OR_R: "",
    };
  } catch (error) {
    alert("Failed to create__");
    console.error(error);
  }
};
</script>

<style scoped>
.main-addProduct {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 800px;
  min-width: 350px;
}

input,
select {
  padding: 6px;
  font-size: 14px;
}

button {
  padding: 8px;
  background-color: #1976d2;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
