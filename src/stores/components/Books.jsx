import React from 'react';
import { bookData } from '../data/bookData';
import './Books.css'; // Ensure you create or update this CSS file

const Books = () => {
  const firstFiveBooks = bookData.slice(0, 5);
  const nextFiveBooks = bookData.slice(5, 10);

  return (
    <>
      <h1>Books</h1>
      <div className="proSection">
        <div className="row">
          {firstFiveBooks.map((item) => (
            <div className="imgBox" key={item.id}>
              <img className="proImage" src={item.image} alt={item.title} />
            </div>
          ))}
        </div>

        <div className="row">
          {nextFiveBooks.map((item) => (
            <div className="imgBox" key={item.id}>
              <img className="proImage" src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Books;
