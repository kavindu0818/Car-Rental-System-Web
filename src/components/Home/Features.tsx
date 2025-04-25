import React from 'react';
import { ShieldCheck, Clock, MapPin, Headphones } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
    title: 'Fully Insured Vehicles',
    description: 'All our vehicles come with comprehensive insurance coverage for your peace of mind.'
  },
  {
    icon: <Clock className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
    title: '24/7 Booking',
    description: 'Book your vehicle anytime, day or night, with our easy-to-use online booking system.'
  },
  {
    icon: <MapPin className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
    title: 'Multiple Locations',
    description: 'Pick up and drop off your rental at any of our conveniently located offices.'
  },
  {
    icon: <Headphones className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
    title: 'Customer Support',
    description: 'Our dedicated team is available to assist you with any questions or concerns.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Experience premium car rental service with benefits that put you first
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;