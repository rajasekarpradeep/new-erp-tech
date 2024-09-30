import React from 'react';
import content from '../data/content.json';

const Features = () => {
  const { features } = content;

  return (
    <section className="features" id="features">
      <h2>Why Choose Us</h2>
      <div className="feature-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.imageSrc} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
