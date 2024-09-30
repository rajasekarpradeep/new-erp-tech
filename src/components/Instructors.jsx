import React from 'react';
import content from '../data/content.json';

const Instructors = () => {
  const { instructors } = content;

  return (
    <section className="instructors" id="instructors">
      <h2>Meet Our Instructors</h2>
      <div className="instructor-list">
        {instructors.map((instructor, index) => (
          <div key={index} className="instructor-card">
            <img src={instructor.image} alt={instructor.name} />
            <h3>{instructor.name}</h3>
            <p>{instructor.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
