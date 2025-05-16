import React from 'react';
import { mobileData } from '../stores/data/mobileData';
import { useParams, Link } from 'react-router-dom';
import { UseCart } from '../stores/context/CartContext';

const MobileSingle = () => {
  const { id } = useParams();
  const { addItem } = UseCart();

  const product = mobileData.find((item) => item.id === id);

  if (!product) {
    return <div style={{ padding: "20px" }}><h2>Product not found.</h2></div>;
  }

  const handleAddToCart = () => {
    addItem(product); // Use contex
    alert(`${product.model} has been added to your cart!`);

    // Optional: Also update localStorage for persistence
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="ind-single">
      <div className="ind-img">
        <img src={product.image} alt={product.model} />
      </div>

      <div className="ind-details">
        <h3>{product.model}</h3>
        <h2>${product.price}</h2>
        <p>{product.description}</p>

        <button className="add-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>

        <br /><br />
        <Link to="/category/Mobiles" className="back-link">
          ← Back to Mobiles
        </Link>
      </div>
    </div>
  );
};

export default MobileSingle;
