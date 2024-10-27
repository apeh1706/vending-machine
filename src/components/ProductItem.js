// src/components/ProductItem.js
import React from 'react';

const ProductItem = ({ product, onPurchase }) => (
  <div className="product-item">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>Price: ${product.price}</p>
    <p>Stock: {product.stock}</p>
    <button
      onClick={() => onPurchase(product.id, product.stock)}
      disabled={product.stock <= 0}
    >
      {product.stock > 0 ? "Buy" : "Out of Stock"}
    </button>
  </div>
);

export default ProductItem;