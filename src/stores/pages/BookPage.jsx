import React, { useState } from 'react';
import { bookData } from '../data/bookData';
import './ComputerPage.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const BookPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  // ✅ Get unique companies
  const companies = [...new Set(bookData.map((phone) => phone.company))];

  // ✅ Handle checkbox toggle
  const companyHandler = (company) => {
    if (selectedProduct.includes(company)) {
      setSelectedProduct(selectedProduct.filter((c) => c !== company));
    } else {
      setSelectedProduct([...selectedProduct, company]);
    }
  };

  // ✅ Filter mobiles based on selected companies
  const filteredMobiles =
    selectedProduct.length === 0
      ? bookData
      : bookData.filter((phone) => selectedProduct.includes(phone.company));

  return (
    <>
      <Navbar />

      {/* 🔘 Filter Checkboxes */}
      <div className="pro-selected">
        {companies.map((company) => (
          <label key={company} className="filter-label">
            <input
              type="checkbox"
              checked={selectedProduct.includes(company)}
              onChange={() => companyHandler(company)}
            />
            {company}
          </label>
        ))}
      </div>

      {/* 📱 Filtered Mobile List */}
      <div className="pageSection">
        {filteredMobiles.map((item) => (
          <Link to={`/Books/${item.id}`} key={item.id} className="pageImg">
            <img src={item.image} alt={item.model} />
            <div className="mobileInfo">
              <h4>{item.company}</h4>
              <p>{item.model}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BookPage;
