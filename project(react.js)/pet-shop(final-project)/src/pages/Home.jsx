import React from 'react';
import TopBar from '../components/TopBar';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import WhatWeDo from '../components/WhatWeDo';
import Shop from '../components/Shop';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';

const Home = () => {
  return (
    <div>
      <TopBar />
      <Navigation />
      <Hero />
      <Welcome />
      <WhatWeDo />
      <Shop />
      <Features />
      <Gallery />
      <Testimonials />
      <Blog />
    </div>
  );
};

export default Home;
