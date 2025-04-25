import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-700 rounded-full opacity-30 blur-3xl"></div>
              <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-700 rounded-full opacity-30 blur-3xl"></div>
            </div>
            
            <div className="relative py-12 px-6 md:py-16 md:px-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Your Next Adventure?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                Book your perfect vehicle today and enjoy the freedom of the open road with our premium rental service.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/cars" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Browse Our Fleet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/locations" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  Find Nearest Location
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;