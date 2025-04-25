import React from 'react';
import Layout from '../components/Layout/Layout';
import LocationsList from '../components/Locations/LocationsList';
import { locations } from '../data/cars';
import { MapPin } from 'lucide-react';

const LocationsPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-indigo-900 to-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Locations</h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Find a LuxeRentals location near you for convenient pick-up and drop-off
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Visit Us in Person
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our convenient locations are staffed with friendly professionals ready to assist you with all your car rental needs. Whether you're picking up, dropping off, or have questions about our services, we're here to help.
              </p>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg flex items-start border border-indigo-100 dark:border-indigo-800/50">
                <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-indigo-800 dark:text-indigo-300 text-sm">
                  All our locations offer convenient parking, accessible entrances, and extended hours to accommodate your schedule.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="LuxeRentals office" 
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
        
        <LocationsList locations={locations} />
      </div>
    </Layout>
  );
};

export default LocationsPage;