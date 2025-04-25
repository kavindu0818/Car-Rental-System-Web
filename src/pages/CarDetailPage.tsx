import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ChevronLeft, Calendar, Fuel, Users, Settings, Info, Share2, Shield
} from 'lucide-react';
import Layout from '../components/Layout/Layout';
import BookingForm from '../components/Cars/BookingForm';
import { BookingDetails } from '../types';
import { CarModel } from "../model/CarModel.ts";
import {AppDispatch, RootState} from "../store/Store.ts";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../slice/CarSlice.ts";

const CarDetailPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams(); // ✅ Fix: Extract param
  const navigate = useNavigate();

  const cars = useSelector((state: RootState) => state.cars.cars);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);


  console.log("View car details page id", id)
  console.log("View car details", cars)

  const car = cars.find((car: CarModel) => car.number == id ); // ✅ Fix: Use find

  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'booking'>('overview');

  if (!car) {
    return (
        <Layout>
          <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Vehicle Not Found</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">The vehicle you're looking for doesn't exist or has been removed.</p>
            <Link to="/cars" className="inline-flex items-center px-5 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
              <ChevronLeft className="mr-2 h-5 w-5" />
              Back to All Cars
            </Link>
          </div>
        </Layout>
    );
  }

  const handleBookingSubmit = (booking: BookingDetails) => {
    console.log('Booking submitted:', booking);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  console.log(car,"car section")
  return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center mb-6">
            <Link to="/cars" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
              <ChevronLeft className="mr-1 h-5 w-5" />
              Back to all cars
            </Link>

            {!car.type && (
                <span className="ml-auto bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-red-900/30 dark:text-red-400">
              Currently Unavailable
            </span>
            )}
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2 mb-8 lg:mb-0">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img src={car.image} alt={car.name} className="w-full h-[400px] object-cover" />
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-1 text-lg font-semibold rounded-md">
                    ${car.price}/day
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{car.name}</h1>
                      <p className="text-gray-600 dark:text-gray-300">{car.model} · {car.year}</p>
                    </div>
                    <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300">
                    {car.type}
                  </span>
                  </div>

                  <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                    <nav className="-mb-px flex space-x-8">
                      {['overview', 'features', 'booking'].map(tab => (
                          <button
                              key={tab}
                              onClick={() => setActiveTab(tab as any)}
                              className={`pb-4 px-1 ${
                                  activeTab === tab
                                      ? 'border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 font-medium'
                                      : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                              }`}
                          >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                          </button>
                      ))}
                    </nav>
                  </div>

                  {activeTab === 'overview' && (
                      <div>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">{car.type + "Description"}</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          {/* Car Detail Boxes */}
                          {[
                            { icon: <Calendar />, label: 'Year', value: car.year },
                            { icon: <Fuel />, label: 'Fuel', value: car.fuel },
                            { icon: <Settings />, label: 'Transmission', value: car.type + "Transmission" },
                            { icon: <Users />, label: 'Seats', value: car.site },
                          ].map((item, i) => (
                              <div key={i} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                  <div className="text-indigo-600 dark:text-indigo-400 mr-2">{item.icon}</div>
                                  <span className="text-gray-700 dark:text-gray-300 font-medium">{item.label}</span>
                                </div>
                                <p className="text-gray-900 dark:text-white">{item.value}</p>
                              </div>
                          ))}
                        </div>

                        <div className="flex justify-between flex-wrap items-center">
                          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2 mr-4">
                            <Info className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                            <span>License Plate: <strong>{car.number}</strong></span>
                          </div>
                          <button
                              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 mb-2"
                              onClick={() => {
                                navigator.share?.({
                                  title: car.name,
                                  text: `Check out this ${car.name} for rent!`,
                                  url: window.location.href,
                                }).catch(console.error);
                              }}
                          >
                            <Share2 className="h-5 w-5 mr-2" />
                            Share
                          </button>
                        </div>
                      </div>
                  )}

                  {activeTab === 'features' && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Vehicle Features</h3>
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {/*{car.fe?.map((feature, index) => (*/}
                          {/*    <div key={index} className="flex items-start">*/}
                          {/*      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />*/}
                          {/*      <span className="text-gray-700 dark:text-gray-300">{feature}</span>*/}
                          {/*    </div>*/}
                          {/*))}*/}
                        </div>

                        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800/50 flex items-start">
                          <Shield className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-3 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-indigo-900 dark:text-indigo-300 mb-1">Fully Insured</h4>
                            <p className="text-indigo-800/80 dark:text-indigo-300/80 text-sm">
                              All our vehicles come with comprehensive insurance coverage for your peace of mind.
                            </p>
                          </div>
                        </div>
                      </div>
                  )}

                  {activeTab === 'booking' && (
                      <div className="md:hidden">
                        <BookingForm cars={car} onBookingSubmit={handleBookingSubmit} />
                      </div>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BookingForm cars={car} onBookingSubmit={handleBookingSubmit} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default CarDetailPage;
