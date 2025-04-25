import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Fuel, Calendar, Settings } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/Store';
import { getCars } from '../../slice/CarSlice';
import { CarModel } from '../../model/CarModel';

const FeaturedCars: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cars = useSelector((state: RootState) => state.cars.cars);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  // const availableCars: CarModel[] = Array.isArray(cars)
  //     ? cars.filter((car: CarModel) => car.available === 'true')
  //     : [];

  console.log("CAR", cars);
  // console.log("CARsAAA", availableCars);
  return (
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Vehicles
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Explore our selection of premium vehicles for your next journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car: CarModel) => (
                <div
                    key={car.number}
                    className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-indigo-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
                      ${car.price}/day
                    </div>
                  </div>
                  <div className="p-5 border-b dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{car.name}</h3>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Calendar size={16} className="mr-1" />
                        <span>{car.year}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Fuel size={16} className="mr-1" />
                        <span>{car.fuel}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Settings size={16} className="mr-1" />
                        <span>{car.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{car.type}</span>
                    <Link
                        to={`/cars/${car.number}`}
                        className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                    >
                      View Details
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
                to="/cars"
                className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 font-medium rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-900 transition-colors duration-300"
            >
              View All Vehicles
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
  );
};

export default FeaturedCars;
