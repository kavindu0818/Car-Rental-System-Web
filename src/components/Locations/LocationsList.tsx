import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface LocationsListProps {
  locations: Location[];
}

const LocationsList: React.FC<LocationsListProps> = ({ locations }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 to-blue-900 dark:from-[#0B1120] dark:to-[#0F172A]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700/20 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-700/20 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white dark:text-blue-100 mb-4">
              Our Locations
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-blue-100 dark:text-blue-200">
              Visit one of our convenient locations to pick up your rental vehicle or get assistance from our friendly staff.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 justify-items-center">

            {locations.map((location) => (
                <div
                    key={location.id}
                    className="bg-white/5 dark:bg-blue-900/20 backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20 border border-white/10 dark:border-blue-700/30"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">{location.name}</h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-blue-300 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0"/>
                        <span className="text-blue-100 dark:text-blue-200">{location.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-blue-300 dark:text-blue-400 mr-3 flex-shrink-0"/>
                        <span className="text-blue-100 dark:text-blue-200">{location.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-blue-300 dark:text-blue-400 mr-3 flex-shrink-0"/>
                        <span className="text-blue-100 dark:text-blue-200">{location.email}</span>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-blue-300 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0"/>
                        <span className="text-blue-100 dark:text-blue-200">{location.hours}</span>
                      </div>
                    </div>

                    <div className="rounded-lg overflow-hidden h-40 relative group">
                      <img
                          src={`https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/pin-l+1e40af${location.coordinates.lng},${location.coordinates.lat}/${location.coordinates.lng},${location.coordinates.lat},13,0/400x200?access_token=pk.eyJ1IjoiZXhhbXBsZXVzZXIiLCJhIjoiY2xrMTBuM3RyMHZhcjNranl2ejNhcG90OSJ9.a0ynq2WyQMd29OE0lj3Dpg`}
                          alt={`Map showing location of ${location.name}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />


                      <div
                          className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transform transition-all duration-300 hover:scale-105 hover:bg-blue-700 dark:hover:bg-blue-600"
                        >
                          View on Map
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsList;
