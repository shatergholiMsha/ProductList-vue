import axios from "axios";

const BASE_URL = "https://ahuan.ir/api/foods";

//list of products
export async function getProductData() {
    try {
        const url = `${BASE_URL}`;
        const { data } = await axios.get(url);
        console.log("this is list of Product", data);
        return data
    } catch (error) {
        console.error("Error fetching UserData by Id:", error);
        throw error;
    }

}
//create products
export async function createProduct(productData) {
    try {
        console.log(productData, "json");
        const url = `${BASE_URL}`;
        const { data } = await axios.post(url, productData);
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
        console.log(data, "delete a row of product list");
        return data;
    } catch (error) {
        console.error("Error deleting product:", error);
        throw error;
    }
}

//update
export async function updateProduct(Id, updatedData) {
    try {
        console.log("id function in js", Id);
        console.log("updatedData function in js", updatedData);
        return await fetch(`${BASE_URL}?id=${Id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData),
        });
    } catch (error) {
        console.error("Error deleting product:", error);
        throw error;
    }


}