import React from 'react';

const CourseCard = ({ title, description, ctaText, ctaText2 }) => {
  return (
    <div className="course-card">
      <div className='course-card-header'>
      <h2>{title}</h2>
      </div>
      <div className='course-card-body'>
      <ul>
        {description.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>    
      <div className='course-card-footer'>
      <div className="course-btns">
        <button className='secondary-btn'>{ctaText2}</button>
        <button className='primary-btn'>{ctaText}</button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default CourseCard;
