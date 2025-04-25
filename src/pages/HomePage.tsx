import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Home/Hero';
import FeaturedCars from '../components/Home/FeaturedCars';
import Features from '../components/Home/Features';
import Testimonials from '../components/Home/Testimonials';
import CallToAction from '../components/Home/CallToAction';
// import { cars } from '../slice/CarSlice.ts';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedCars />
      <Features />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default HomePage;