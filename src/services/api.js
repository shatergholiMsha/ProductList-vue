import axios from "axios";

const BASE_URL = "https://ahuan.ir/api/foods";
//list of products
export async function getProductData() {
    try {
        const param = "?type=true&cat=test"
        const url = `${BASE_URL}${param}`;
        const { data } = await axios.get(url);
        console.log("this is list of Product", data);
        return data
    } catch (error) {
        console.error("Error fetching UserData by Id:", error);
        throw error;
    }

}
//creeate products
export async function createProduct(productData) {
    try {
        console.log(productData,"json");
        const url =`${BASE_URL}`;
        const { data } = await axios.post(url,productData);
        console.log("this is list of productData created", data);
        return data
    } catch (error) {
        console.error("Error fetching UserData by Id:", error);
        throw error;
    }

}

//delete
export async function deleteProduct(id) {
    try {
      const url = `${BASE_URL}?id=${id}`;
      const { data } = await axios.delete(url);
      return data;
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  }