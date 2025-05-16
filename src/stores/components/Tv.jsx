import React from 'react';
import { tvData } from '../data/tvData';
import './Tv.css'; // Add or reuse styles as needed

const Tv = () => {
  const firstFiveImages = tvData.slice(0, 5);
  const nextFiveImages = tvData.slice(5, 10);

  return (
    <>
      <h1>Televisions</h1>
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

export default Tv;
