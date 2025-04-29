<template>
  <div class="container">
    <input v-model="searchQuery" placeholder="Search Name..." class="search-input" />
    <div class="main-table">
      <table class="product-table">
        <thead>
          <tr>
            <th @click="sortByName">
              Title
              <img
                class="img"
                src="https://cdn-icons-png.flaticon.com/128/4662/4662255.png"
                alt=""
              />
            </th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>C_OR_R</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in filteredAndSortedProducts" :key="product.Id">
            <td>{{ product.Title || "Defualt" }}</td>
            <td>{{ product.Description }}</td>
            <td>{{ product.Price }} $</td>
            <td>{{ product.Category }}</td>
            <td>
              <img :src="product.Image" alt="product" class="product-image" />
            </td>
            <td>{{ product.C_OR_R }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  productList: {
    type: Array,
    required: true,
  },
});

const searchQuery = ref("");
const sortName = ref(true);

const sortByName = () => {
  sortName.value = !sortName.value;
};

const filteredAndSortedProducts = computed(() => {
  const getTitle = (product) => product.Title || "Defualt";
  let filtered = props.productList.filter((product) =>
    getTitle(product).toLowerCase().includes(searchQuery.value.toLowerCase())
  );

  return filtered.sort((a, b) => {
    const titleA = getTitle(a);
    const titleB = getTitle(b);
    return sortName.value ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
  });
});
</script>

<style scoped>
.main-table {
  max-height: 410px;
  overflow-y: auto;
  overflow-x: auto;
  border: 1px solid #000;
  border-radius: 6px;
}
.search-input {
  margin-bottom: 12px;
  padding: 6px;
  max-width: 600px;
  width: 100%;
  font-size: 14px;
}

.product-table {
  width: 100%;
  min-width: 360px;
  border-collapse: collapse;
}

.product-table th,
.product-table td {
  border: 1px solid #ddd;
  padding: 18px;
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
.img {
  width: 25px;
  height: 15px;
}
</style>
