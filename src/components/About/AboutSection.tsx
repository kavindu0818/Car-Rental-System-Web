import React from 'react';
import { Shield, Car, Clock, ThumbsUp } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-5 mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About LuxeRentals
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Since 2010, LuxeRentals has been providing premium car rental services to customers who expect nothing but the best. Our dedication to quality and customer satisfaction has made us a leading name in the industry.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              We take pride in our meticulously maintained fleet of vehicles that ranges from economical options to luxury cars. Whether you're traveling for business or pleasure, we have the perfect vehicle to meet your needs.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our team of dedicated professionals is committed to providing exceptional service and ensuring that your rental experience exceeds your expectations.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <img
                src="https://images.pexels.com/photos/6765538/pexels-photo-6765538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Our team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <p className="text-white text-lg font-medium">Our team is ready to serve you</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Why Choose LuxeRentals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                <Car className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Premium Fleet</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Our vehicles are regularly maintained and updated to ensure safety, comfort, and reliability.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Comprehensive Insurance</h4>
              <p className="text-gray-600 dark:text-gray-300">
                All our rentals include comprehensive insurance coverage for your peace of mind.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Flexible Rental Periods</h4>
              <p className="text-gray-600 dark:text-gray-300">
                From single-day rentals to long-term leases, we offer flexible options to suit your schedule.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                <ThumbsUp className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Customer Satisfaction</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Our 98% customer satisfaction rate reflects our commitment to exceptional service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;