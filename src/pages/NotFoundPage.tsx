import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { Home, Car, AlertTriangle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-8">
          <AlertTriangle className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Link>
          <Link 
            to="/cars"
            className="inline-flex items-center justify-center px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 text-base font-medium rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
          >
            <Car className="mr-2 h-5 w-5" />
            Browse Cars
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;