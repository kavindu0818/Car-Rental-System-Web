import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Fuel, Settings, Users } from 'lucide-react';
import {CarModel} from "../../model/CarModel.ts";

interface CarCardProps {
  car: CarModel;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {

  console.log("Car Card item", car)
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-2 text-sm font-semibold rounded-xl shadow-lg transform -translate-y-1 transition-transform group-hover:translate-y-0">
          ${car.price}/day
        </div>
        {!car.available && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
            <span className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transform scale-95 transition-transform group-hover:scale-100">
              Currently Unavailable
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {car.name}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg font-medium">
            {car.type}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-2 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
          {car.type + "Description"}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-2 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
            <Calendar size={16} className="mr-2" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-2 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
            <Fuel size={16} className="mr-2" />
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-2 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
            <Users size={16} className="mr-2" />
            <span>{car.site} Seats</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-2 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
            <Settings size={16} className="mr-2" />
            <span>{car.model + "transmition"}</span>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t dark:border-gray-800">
          <span className="text-gray-700 dark:text-gray-300 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-lg">
            {car.number}
          </span>
          <Link
            to={`/cars/${car.number}`}
            className="inline-flex items-center px-4 py-2 text-indigo-600 dark:text-indigo-400 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 dark:group-hover:text-white"
          >
            View Details
            <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
