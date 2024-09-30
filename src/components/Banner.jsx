import React from 'react';
import content from '../data/content.json';

const Banner = () => {
  const { heading, subheading,para, ctaText } = content.banner;

  return (
    <section className="banner">
      <div className='banner-content'>
      <h1>{heading}</h1>
      <h2>{subheading}</h2>
      <p>{para}</p>
      <button className='primary-btn'>{ctaText}</button>
      </div>
      <div className='banner-image'>
        <img src="src\assets\headerimg.png" alt="" />
      </div>
    </section>
  );
};

export default Banner;
