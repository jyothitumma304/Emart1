import React from 'react';
import { speakerData } from '../data/speakerData';
import './Speakers.css'; // Ensure this CSS file exists

const Speakers = () => {
  const firstFive = speakerData.slice(0, 5);
  const nextFive = speakerData.slice(5, 10);

  return (
    <>
      <h1>Speakers</h1>
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

export default Speakers;
