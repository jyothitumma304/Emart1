import React from 'react';
import { furnitureData } from '../data/furnitureData';
import './Furniture.css'; // Add styling here

const Furniture = () => {
  const firstFiveImages = furnitureData.slice(0, 5);
  const nextFiveImages = furnitureData.slice(5, 10);

  return (
    <>
      <h1>Furniture</h1>
      <div className="proSection">
        <div className="row">
          {firstFiveImages.map((item) => (
            <div className="imgBox" key={item.id}>
              <img className="proImage" src={item.image} alt={item.product} />
            </div>
          ))}
        </div>

        <div className="row">
          {nextFiveImages.map((item) => (
            <div className="imgBox" key={item.id}>
              <img className="proImage" src={item.image} alt={item.product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Furniture;
