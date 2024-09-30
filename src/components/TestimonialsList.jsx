import React from 'react';
import content from '../data/content.json';

const TestimonialsList = () => {
  const { testimonials } = content;

  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Students Say</h2>
      {testimonials.map((testimonial, index) => (
        <blockquote key={index}>
          <p>"{testimonial.quote}"</p>
          <footer>{testimonial.name}</footer>
        </blockquote>
      ))}
    </section>
  );
};

export default TestimonialsList;
