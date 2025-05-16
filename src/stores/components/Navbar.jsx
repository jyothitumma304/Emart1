import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const categories = [
  'Mobiles',
  'Computers',
  'Watches',
  'Mens Wear',
  'Woman Wear',
  'Furniture',
  'Fridge',
  'Books',
  'Speakers',
  "TV",
  'AC'
];

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <h1>Ecommerce</h1>
        </div>

        <div className="navbar__search">
          <input type="text" placeholder="Search products..." />
        </div>

        <div className="navbar__actions">
          <Link to="/Sign-in" className="navbar__auth">Sign In / Sign Up</Link>

          
          {/* ✅ Updated this line to include a Link to Cart */}
          <Link to="/cart" className="navbar__cart">Cart</Link>
        </div>
      </nav>

      {/* Category Bar */}
      <div className="categories-bar">
        {categories.map((category, index) => {
          if (category === 'Mobiles') {
            return (
              <Link to="/category/mobiles" className="category-item" key={index}>
                {category}
              </Link>
            );
          } else if (category === 'Computers') {
            return (
              <Link to="/category/computers" className="category-item" key={index}>
                {category}
              </Link>
            );
          } else if (category === 'Watches') {
            return (
              <Link to="/category/watches" className="category-item" key={index}>
                {category}
              </Link>
            );
          } else if (category === 'Mens Wear') {
            return (
              <Link to="/category/Mens Wear" className="category-item" key={index}>
                {category}
              </Link>
            );
          } else if (category === 'Woman Wear') {
            return (
              <Link to="/category/Woman Wear" className="category-item" key={index}>
                {category}
              </Link>
            );
          } else if (category === 'Furniture') {
            return (
              <Link to="/category/Furniture" className="category-item" key={index}>
                {category}
              </Link>
            );
          } else if (category === 'Fridge') {
            return (
              <Link to="/category/Fridge" className="category-item" key={index}>
                {category}
              </Link>
            );
          } else if (category === 'Books') {
            return (
              <Link to="/category/Books" className="category-item" key={index}>
                {category}
              </Link>
            );
          } else if (category === 'Speakers') {
            return (
              <Link to="/category/Speakers" className="category-item" key={index}>
                {category}
              </Link>
            );
          } else if (category === 'TV') {
            return (
              <Link to="/category/TV" className="category-item" key={index}>
                {category}
              </Link>
            );
          } else if (category === 'AC') {
            return (
              <Link to="/category/AC" className="category-item" key={index}>
                {category}
              </Link>
            );
          } else {
            return (
              <div className="category-item" key={index}>
                {category}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Navbar;
