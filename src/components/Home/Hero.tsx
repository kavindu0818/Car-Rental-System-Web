import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-indigo-900 to-blue-900 dark:from-[#0B1120] dark:to-[#0F172A] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-8 -right-8 w-96 h-96 bg-indigo-700/30 dark:bg-blue-700/20 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] bg-blue-700/30 dark:bg-indigo-800/20 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-500/30 dark:bg-blue-600/20 rounded-full opacity-20 blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 dark:from-blue-100 dark:to-indigo-200">
              Experience Luxury on Wheels
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 dark:text-blue-200 mb-10 max-w-lg leading-relaxed">
              Discover our exclusive fleet of premium vehicles. Your journey to luxury starts here.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/cars" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-blue-500 text-indigo-900 dark:text-white font-medium rounded-xl hover:bg-gray-100 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Browse Cars
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white dark:border-blue-400 text-white font-medium rounded-xl hover:bg-white/10 dark:hover:bg-blue-500/20 transition-all duration-300 backdrop-blur-sm"
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in delay-300">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] group">
              <img 
                src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Luxury car" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 text-sm font-semibold rounded-full mb-4 transform -translate-y-4 transition-transform group-hover:translate-y-0">
                  Featured
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 transform -translate-y-4 transition-transform group-hover:translate-y-0 delay-75">
                  Experience Luxury Driving
                </h3>
                <p className="text-blue-200 transform -translate-y-4 transition-transform group-hover:translate-y-0 delay-100">
                  Premium vehicles for unforgettable journeys
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white/50 dark:from-blue-400/50 to-transparent"></div>
        <span className="mt-2 text-sm text-white/70 dark:text-blue-200/70">Scroll to explore</span>
      </div>
    </div>
  );
};

export default Hero;