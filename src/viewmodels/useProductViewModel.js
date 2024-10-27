import { useState, useEffect } from 'react';
import { fetchProducts, purchaseProduct } from '../api/productAPI';

const useProductViewModel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handlePurchase = async (productId, stock) => {
    if (stock <= 0) return;
    try {
      const updatedProduct = await purchaseProduct(productId, stock - 1);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId ? { ...product, stock: updatedProduct.stock } : product
        )
      );
    } catch (err) {
      setError("Failed to update stock");
    }
  };

  return { products, loading, error, handlePurchase };
};

export default useProductViewModel;