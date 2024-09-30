import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import CoursesSection from './components/CoursesSection';
import TestimonialsList from './components/TestimonialsList';
import Features from './components/Features';
import Instructors from './components/Instructors';
import Alumni from './components/Alumni';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <CoursesSection />
      {/* <TestimonialsList />
      <Features />
      <Instructors />
      <Alumni /> */}
      <Footer />
    </div>
  );
};

export default App;
