import React from 'react';
import { UseCart } from './context/CartContext';

const Usercart = () => {
  const { cart, addItem } = UseCart();

  return (
    <div>
      {cart.map((item, index) => {
        return (
          <div className='cart-section' key={index}>
            <div className='cart-img'>
              <img src={item.image} alt={item.product} />
            </div>
            <div className='cart-details'>
              <h3>{item.product}</h3>
              <h2>{item.price}</h2>
              <h3>{item.model}</h3>
              <button onClick={() => addItem(item)}>Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Usercart;
