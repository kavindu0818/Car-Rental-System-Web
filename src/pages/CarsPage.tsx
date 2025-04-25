import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout/Layout';
import CarCard from '../components/Cars/CarCard';
import CarFilters from '../components/Cars/CarFilters';
import { Search } from 'lucide-react';
import { CarModel } from '../model/CarModel';
import { getCars } from '../slice/CarSlice.ts';
import { RootState } from '../store/Store.ts';

const CarsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { cars, loading, error } = useSelector((state: RootState) => state.cars);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCars, setFilteredCars] = useState<CarModel[]>([]);

  const [filters, setFilters] = useState({
    categories: [] as string[],
    fuelTypes: [] as string[],
    transmission: [] as string[],
    maxPrice: 100000,
  });

  // Fetch cars on mount
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  // Update maxPrice when cars change
  useEffect(() => {
    if (cars.length > 0) {
      const newMax = Math.max(...cars.map((car) => car.price));
      setFilters((prev) => ({ ...prev, maxPrice: newMax }));
    }
  }, [cars]);

  // Get filter options
  const categories = useMemo(() => Array.from(new Set(cars.map((car) => car.category))), [cars]);
  const fuelTypes = useMemo(() => Array.from(new Set(cars.map((car) => car.fuel))), [cars]);
  const transmissionTypes = useMemo(() => Array.from(new Set(cars.map((car) => car.transmission))), [cars]);
  const minPrice = useMemo(() => Math.min(...cars.map((car) => car.pricePerDay), 0), [cars]);
  const maxPrice = useMemo(() => Math.max(...cars.map((car) => car.pricePerDay), 100000), [cars]);

  // Filtering logic
  useEffect(() => {
    let results = [...cars];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter((car) =>
          [car.name, car.make, car.model, car.type].some((field) =>
              field.toLowerCase().includes(term)
          )
      );
    }

    if (filters.categories.length > 0) {
      results = results.filter((car) => filters.categories.includes(car.category));
    }

    if (filters.fuelTypes.length > 0) {
      results = results.filter((car) => filters.fuelTypes.includes(car.fuel));
    }

    if (filters.transmission.length > 0) {
      results = results.filter((car) => filters.transmission.includes(car.transmission));
    }

    results = results.filter((car) => car.price <= filters.maxPrice);

    setFilteredCars(results);
  }, [searchTerm, filters, cars]);


  console.log("Car page car set", cars)

  return (
      <Layout>
        <div className="bg-gradient-to-r from-indigo-900 to-blue-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Our Fleet
            </h1>
            <p className="text-blue-100 text-center max-w-3xl mx-auto mb-8">
              Browse our wide selection of vehicles and find the perfect car for your needs
            </p>

            <div className="max-w-2xl mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                  type="text"
                  placeholder="Search by make, model, or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {loading ? (
              <div className="text-center text-lg">Loading cars...</div>
          ) : error ? (
              <div className="text-center text-red-500">Error loading cars: {error}</div>
          ) : (
              <div className="lg:grid lg:grid-cols-4 lg:gap-8">
                <div className="lg:col-span-1 mb-8 lg:mb-0">
                  <CarFilters
                      options={{
                        categories,
                        fuelTypes,
                        transmission: transmissionTypes,
                        minPrice,
                        maxPrice,
                      }}
                      onFilterChange={setFilters}
                      activeFilters={filters}
                  />
                </div>

                <div className="lg:col-span-3">
                  {filteredCars.length > 0 ? (
                      <>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          Showing {filteredCars.length} {filteredCars.length === 1 ? 'vehicle' : 'vehicles'}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                          {filteredCars.map((cars) => (
                              <CarCard key={cars.number} car={cars} />
                          ))}
                        </div>
                      </>
                  ) : (
                      <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No vehicles found</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Try adjusting your search or filter criteria
                        </p>
                        <button
                            onClick={() => {
                              setSearchTerm('');
                              setFilters({
                                categories: [],
                                fuelTypes: [],
                                transmission: [],
                                maxPrice: maxPrice,
                              });
                            }}
                            className="inline-flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                        >
                          Reset all filters
                        </button>
                      </div>
                  )}
                </div>
              </div>
          )}
        </div>
      </Layout>
  );
};

export default CarsPage;
