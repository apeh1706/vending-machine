// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { fetchProducts, updateProductStock } from '../api/productAPI';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };
    loadProducts();
  }, []);

  const handlePurchase = async (id, stock) => {
    if (stock <= 0) return;
    try {
      const updatedProduct = await updateProductStock(id, stock - 1);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? { ...product, stock: updatedProduct.stock } : product
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="product-list">
      {error && <p className="error">{error}</p>}
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onPurchase={handlePurchase} />
      ))}
    </div>
  );
};

export default ProductList;