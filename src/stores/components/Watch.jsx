import React from 'react';
import { watchData } from '../data/watchData';
import './Watch.css'; // Create and style as needed

const Watch = () => {
  const firstFiveImages = watchData.slice(0, 5);
  const nextFiveImages = watchData.slice(5, 10);

  return (
    <>
      <h1>Watches</h1>
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

export default Watch;
