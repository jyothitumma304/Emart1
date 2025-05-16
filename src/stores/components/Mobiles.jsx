import React from 'react';
import { mobileData } from "../data/mobileData";
import "./Mobiles.css"; // Updated CSS file

const Mobiles = () => {
  const firstFiveImages = mobileData.slice(0, 5);
  const nextFiveImages = mobileData.slice(5, 10);

  return (
    <>
    <h1>Mobiles</h1>
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

export default Mobiles;
