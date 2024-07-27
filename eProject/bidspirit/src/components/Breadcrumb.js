import React, { useState, useEffect } from 'react';
import '../css/Breadcrumb.css'; // Import the CSS file for styling

const Breadcrumb = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set default active index to 0

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    // This effect runs once after the initial render to set the active index to 0
    setActiveIndex(0);
  }, []);

  return (
    <div>
      <ul className="breadcrumb">
        <li className={activeIndex === 0 ? 'active-breadcrumb' : ''} onClick={() => handleClick(0)}><a href="#">All</a></li>
        <li className={activeIndex === 1 ? 'active-breadcrumb' : ''} onClick={() => handleClick(1)}><a href="#">Popular</a></li>
        <li className={activeIndex === 2 ? 'active-breadcrumb' : ''} onClick={() => handleClick(2)}><a href="#">Antique</a></li>
        <li className={activeIndex === 3 ? 'active-breadcrumb' : ''} onClick={() => handleClick(3)}><a href="#">Furniture</a></li>
        <li className={activeIndex === 4 ? 'active-breadcrumb' : ''} onClick={() => handleClick(4)}><a href="#">Collectibles</a></li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
