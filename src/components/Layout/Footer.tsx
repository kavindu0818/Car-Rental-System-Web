import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Car className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">KMW CAR RENTAL</span>
            </div>
            <p className="mb-4">
              Premium car rental service with a wide range of vehicles to suit every need and occasion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/cars" className="hover:text-white transition-colors">Our Fleet</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-white transition-colors">Locations</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">Luxury Car Rental</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Business Travel</a>
              </li>
              {/*<li>*/}
              {/*  <a href="#" className="hover:text-white transition-colors">Airport Transfers</a>*/}
              {/*</li>*/}
              <li>
                <a href="#" className="hover:text-white transition-colors">Wedding Car Rental</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0 text-indigo-400" />
                <span>123 Main Street, Colombo</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-indigo-400" />
                <span>077 4257738</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-indigo-400" />
                <span>contact@kmwcarrental.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} KmwCarRental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
