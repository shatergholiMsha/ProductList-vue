<template>
  <div>
    <input v-model="searchQuery" placeholder="Search Name..." class="search-input" />

    <table class="product-table">
      <thead>
        <tr>
          <th @click="sortByName">Title
            <img class="img" src="https://cdn-icons-png.flaticon.com/128/4662/4662255.png" alt="">
          </th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>C_OR_R</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredAndSortedProducts" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>
            <img :src="product.image" alt="product" class="product-image" />
          </td>
          <td>{{ product.C_OR_R }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  productList: {
    type: Array,
    required: true
  }
});

const searchQuery = ref("");
const sortName = ref(true);
const sortByName = () => {
  sortName.value = !sortName.value;
};
const filteredAndSortedProducts = computed(() => {
  let filtered = props.productList.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );

  return filtered.sort((a, b) => {
    return sortName.value ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
  });
});
</script>

<style scoped>
.search-input {
  margin-bottom: 12px;
  padding: 6px;
  width: 300px;
  font-size: 14px;
}

.product-table {
  width: 100%;
  border-collapse: collapse;
}

.product-table th,
.product-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.product-table th {
  background-color: #f0f0f0;
  cursor: pointer;
}

.product-image {
  max-width: 50px;
  height: auto;
}
.img{
  width: 25px;
  height: 15px;
}
</style>
