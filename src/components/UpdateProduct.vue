<template>
  <div class="main-update-product">
    <div class="title">Update Your Product</div>
    <p class="text">Please Fisrt Step select a product ID from the list.</p>
    <form @submit.prevent="handleSubmit" class="form">
      <select v-model="productId" required>
        <option disabled value="">Select Product ID</option>
        <option v-for="product in productList" :key="product.Id" :value="product.Id">
          {{ product.Id }}
        </option>
      </select>
      <input v-model="productData.Title" placeholder="Title" required />
      <input v-model="productData.Description" placeholder="Description" required />
      <input
        v-model.number="productData.Price"
        placeholder="Set price"
        required
        type="number"
      />
      <select v-model="productData.Category" required>
        <option disabled value="">Select a category</option>
        <option value="test">Test</option>
      </select>
      <select v-model="productData.C_OR_R" required>
        <option disabled value="">Select C_OR_R</option>
        <option value="T">T</option>
      </select>
      <input
        v-model="productData.Image"
        placeholder="Image URL (max 50 characters)"
        maxlength="50"
        required
      />
      <button type="submit">Update Product</button>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { updateProduct } from "../services/api";

const props = defineProps({
  productList: {
    type: Array,
    required: true,
  },
});
const productId = ref("");
const productData = ref({
  Title: "",
  Description: "",
  Price: "",
  Category: "",
  Image: "",
  C_OR_R: "",
});
watch(productId, (newId) => {
  const selectedProduct = props.productList.find((p) => p.Id === Number(newId));
  if (selectedProduct) {
    productData.value = {
      Title: selectedProduct.Title || "",
      Description: selectedProduct.Description || "",
      Price: selectedProduct.Price || "",
      Category: selectedProduct.Category || "",
      Image: selectedProduct.Image || "",
      C_OR_R: selectedProduct.C_OR_R || "",
    };
  }
});
const handleSubmit = async () => {
  try {
    await updateProduct(productId.value, { ...productData.value });
    alert("updated....");
  } catch (error) {
    alert("Failed to update");
    console.error(error);
  }
};
</script>

<style scoped>
.main-update-product {
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
.text {
  font-size: 16px;
  color: #444;
  margin-bottom: 12px;
  background-color: #f0f0f0;
  padding: 8px 20px;
  border-radius: 4px;
}
</style>
