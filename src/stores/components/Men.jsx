import React from 'react';
import { menswearData } from '../data/menswearData';
import './Men.css'; // Ensure this CSS file exists

const Men = () => {
  const firstFiveItems = menswearData.slice(0, 5);
  const nextFiveItems = menswearData.slice(5, 10);

  return (
    <>
      <h1>Men's Wear</h1>
      <div className="proSection">
        <div className="row">
          {firstFiveItems.map((item) => (
            <div className="imgBox" key={item.id}>
              <img className="proImage" src={item.image} alt={item.product} />
            </div>
          ))}
        </div>

        <div className="row">
          {nextFiveItems.map((item) => (
            <div className="imgBox" key={item.id}>
              <img className="proImage" src={item.image} alt={item.product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Men;
