// src/api/productAPI.js
import axios from 'axios';

const API_URL = "http://localhost:5001/items";

/**
 * Fetches the list of products.
 * @returns {Promise<Array>} List of products.
 */
export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Gagal update stock:", error);
    throw new Error("Tidak dapat update stock.");
  }
};

/**
 * Updates product stock.
 * @param {number} productId - ID of the product.
 * @param {number} updatedStock - New stock value.
 * @returns {Promise<Object>} Updated product data.
 */
export const updateProductStock = async (productId, updatedStock) => {
  try {
    const response = await axios.patch(`${API_URL}/${productId}`, { stock: updatedStock });
    return response.data;
  } catch (error) {
    console.error("Gagal update stock:", error);
    throw new Error("Tidak dapat update stock.");
  }
};