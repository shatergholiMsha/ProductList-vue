<template>
  <div class="delete-form">
    <input
      v-model="productId"
      placeholder="Enter ID"
      type="number"
      required
    />
    <button @click="handleDelete">Delete Product</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { deleteProduct } from '../services/api';

const productId = ref('');

const handleDelete = async () => {
  if (!productId.value) {
    alert("Please enter ID.");
    return;
  }

  const confirmDelete = confirm(`you want to delete product: ${productId.value}?`);
  if (!confirmDelete) return;

  try {
    await deleteProduct(productId.value);
    alert('Product deleted__');
    productId.value = '';
  } catch (error) {
    alert('Failed to delete.....');
  }
};
</script>

<style scoped>
.delete-form {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
input {
  padding: 6px;
}
button {
  background-color: #d32f2f;
  color: white;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
}
</style>
