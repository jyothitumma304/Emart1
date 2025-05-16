import React from 'react';
import { acData } from '../data/acData';
import './Ac.css';

const Ac = () => {
  const firstFiveImages = acData.slice(0, 5);
  const nextFiveImages = acData.slice(5, 10); // Only up to the 10th item

  return (
    <>
      <h1>Air Conditioners</h1>
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

export default Ac;
