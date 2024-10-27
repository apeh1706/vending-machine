import React, { useState } from 'react';
import useProductViewModel from '../viewmodels/useProductViewModel';
import './ProductList.css';

const ProductList = () => {
  const { products, loading, error, handlePurchase } = useProductViewModel();
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products: {error}</div>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <button
            onClick={() => setSelectedProduct(product)}
            disabled={product.stock === 0}
          >
            Buy
          </button>
        </div>
      ))}

      {selectedProduct && (
        <div className="modal">
          <h4>Confirm Purchase</h4>
          <p>Item: {selectedProduct.name}</p>
          <button onClick={() => handlePurchase(selectedProduct.id, selectedProduct.stock)}>
            Confirm
          </button>
          <button onClick={() => setSelectedProduct(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ProductList;