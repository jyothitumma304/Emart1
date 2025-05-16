import React from 'react';
import { fridgeData } from '../data/fridgeData';
import './Fridge.css'; // Make sure this CSS file exists

const Fridge = () => {
  const firstFiveFridges = fridgeData.slice(0, 5);
  const nextFiveFridges = fridgeData.slice(5, 10);

  return (
    <>
      <h1>Refrigerators</h1>
      <div className="proSection">
        <div className="row">
          {firstFiveFridges.map((item) => (
            <div className="imgBox" key={item.id}>
              <img className="proImage" src={item.image} alt={item.model} />
            </div>
          ))}
        </div>

        <div className="row">
          {nextFiveFridges.map((item) => (
            <div className="imgBox" key={item.id}>
              <img className="proImage" src={item.image} alt={item.model} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Fridge;
