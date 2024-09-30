import React from 'react';
import CourseCard from './CourseCard';
import content from '../data/content.json';

const CoursesSection = () => {
  const { heading, subpara, courseCards } = content.courses; // Destructure heading, subpara, and courseCards

  return (
    <section className="courses" id="courses">
      <h1>{heading}</h1>
      <p>{subpara}</p> 
      <div className="courses-list">
        {courseCards.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
