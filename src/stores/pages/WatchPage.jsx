import React, { useState } from 'react';
import { watchData } from '../data/watchData';
import './ComputerPage.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const WatchPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  // ✅ Get unique companies
  const companies = [...new Set(watchData.map((phone) => phone.company))];

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
      ? watchData
      : watchData.filter((phone) => selectedProduct.includes(phone.company));

  return (
    <>
      <Navbar />

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

      <div className="pageSection">
        {filteredMobiles.map((item) => (
          <Link to={`/Watches/${item.id}`} key={item.id} className="pageImg">
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

export default WatchPage;
