import React from 'react';

const Testimonial = ({ quote, author }) => {
  return (
    <blockquote>
      <p>"{quote}"</p>
      <footer>{author}</footer>
    </blockquote>
  );
};

export default Testimonial;
