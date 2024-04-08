import React from 'react';
import './course-card.css';

import imageSrc from './learning.png';

const CourseCard = () => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Card pic" className="card-image" />

      <div className="card-details">hello</div>

      <div className="card-buttons">
        <button>button</button>
      </div>

    </div>
  );
};

export default CourseCard;
