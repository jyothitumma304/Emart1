import React from 'react';
import { womenwearData } from '../data/womenwearData';
import './Women.css'; // Create this file or reuse a common CSS file

const Women = () => {
  const firstFive = womenwearData.slice(0, 5);
  const nextFive = womenwearData.slice(5, 10);

  return (
    <>
      <h1>Women's Wear</h1>
      <div className="proSection">
        <div className="row">
          {firstFive.map((item) => (
            <div className="imgBox" key={item.id}>
              <img className="proImage" src={item.image} alt={item.product} />
            </div>
          ))}
        </div>

        <div className="row">
          {nextFive.map((item) => (
            <div className="imgBox" key={item.id}>
              <img className="proImage" src={item.image} alt={item.product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Women;
