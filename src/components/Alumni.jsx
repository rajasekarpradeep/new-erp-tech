import React from 'react';
import content from '../data/content.json';

const Alumni = () => {
  const { alumni } = content;

  return (
    <section className="alumni" id="alumni">
      <h2>Our Alumni</h2>
      <div className="alumni-list">
        {alumni.map((alum, index) => (
          <div key={index} className="alum-card">
            <h3>{alum.name}</h3>
            <p>{alum.work}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Alumni;
