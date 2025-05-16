import React from 'react';
import { computerData } from '../data/computerData';
import './Computer.css'; // Add CSS for styling if not already

const Computer = () => {
  const firstFiveImages = computerData.slice(0, 5);
  const nextFiveImages = computerData.slice(5, 10);

  return (
    <>
    <h1>Computers</h1>
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

export default Computer;
