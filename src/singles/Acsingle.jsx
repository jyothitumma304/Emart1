import React from 'react'
import { acData } from '../stores/data/acData'
import { useParams, Link } from 'react-router-dom'
import { UseCart } from '../stores/context/CartContext';

const AcSingle = () => {
  const { id } = useParams()
  const { addItem } = UseCart();
  const product = acData.find((item) => item.id === id)

  const handleAddToCart = () => {
    addItem(product);
    // Example cart handling: save to localStorage (simple version)
    const existingCart = JSON.parse(localStorage.getItem('cart')) || []
    const updatedCart = [...existingCart, product]
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    alert(`${product.model} has been added to your cart!`)
  }

  return (
    <div className="ind-single">
      <div className="ind-img">
        <img src={product.image} alt={product.model} />
      </div>

      <div className="ind-details">
        <div className="ind-model">
          <h3>{product.model}</h3>
        </div>

        <div className="ind-price">
          <h2>${product.price}</h2>
        </div>

        <div className="ind-desc">
          <p>{product.description}</p>
        </div>

        {/* ✅ Add to Cart Button */}
        <button className="add-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>

        <br /><br />
        <Link to="/category/AC" className="back-link">
          ← Back to AC
        </Link>
      </div>
    </div>
  )
}

export default AcSingle
