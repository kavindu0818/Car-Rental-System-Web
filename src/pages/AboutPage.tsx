import React from 'react';
import Layout from '../components/Layout/Layout';
import AboutSection from '../components/About/AboutSection';
import TeamSection from '../components/About/TeamSection';
import CallToAction from '../components/Home/CallToAction';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-indigo-900 to-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Learn about our company's mission, values, and the team behind LuxeRentals
          </p>
        </div>
      </div>
      
      <AboutSection />
      <TeamSection />
      <CallToAction />
    </Layout>
  );
};

export default AboutPage;