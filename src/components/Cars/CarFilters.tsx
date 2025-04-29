import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';

type FilterOptions = {
  categories: string[];
  fuelTypes: string[];
  transmission: string[];
  minPrice: number;
  maxPrice: number;
}

interface CarFiltersProps {
  options: FilterOptions;
  onFilterChange: (filters: any) => void;
  activeFilters: any;
}

const CarFilters: React.FC<CarFiltersProps> = ({ options, onFilterChange, activeFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (category: string) => {
    const newCategories = activeFilters.categories.includes(category)
      ? activeFilters.categories.filter((c: string) => c !== category)
      : [...activeFilters.categories, category];
    
    onFilterChange({ ...activeFilters, categories: newCategories });
  };

  const handleFuelTypeChange = (fuelType: string) => {
    const newFuelTypes = activeFilters.fuelTypes.includes(fuelType)
      ? activeFilters.fuelTypes.filter((f: string) => f !== fuelType)
      : [...activeFilters.fuelTypes, fuelType];
    
    onFilterChange({ ...activeFilters, fuelTypes: newFuelTypes });
  };

  const handleTransmissionChange = (transmission: string) => {
    const newTransmission = activeFilters.transmission.includes(transmission)
      ? activeFilters.transmission.filter((t: string) => t !== transmission)
      : [...activeFilters.transmission, transmission];
    onFilterChange({ ...activeFilters, transmission: newTransmission });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    onFilterChange({ ...activeFilters, maxPrice: value });
  };

  const clearFilters = () => {
    onFilterChange({
      categories: [],
      fuelTypes: [],
      transmission: [],
      maxPrice: options.maxPrice
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 mb-6 transition-colors">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <Filter className="mr-2 h-5 w-5" />
          Filters
        </h3>
        <div className="flex items-center">
          <button
            onClick={clearFilters}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mr-4 flex items-center"
          >
            <X className="h-4 w-4 mr-1" />
            Clear All
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-indigo-600 dark:text-indigo-400"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Filter className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden md:block'} space-y-6`}>
        {/* Price Range */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Price per day</h4>
          <div className="flex items-center">
            <span className="text-gray-600 dark:text-gray-400 text-sm">$0</span>
            <input
              type="range"
              min={options.minPrice}
              max={options.maxPrice}
              value={activeFilters.maxPrice}
              onChange={handlePriceChange}
              className="mx-2 flex-grow h-2 rounded-lg appearance-none bg-gray-200 dark:bg-gray-700"
            />
            <span className="text-gray-600 dark:text-gray-400 text-sm">${activeFilters.maxPrice}</span>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Vehicle Type</h4>
          <div className="space-y-2">
            {options.categories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  checked={activeFilters.categories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 dark:border-gray-600"
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Fuel Type */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Fuel Type</h4>
          <div className="space-y-2">
            {options.fuelTypes.map((fuelType) => (
              <label key={fuelType} className="flex items-center">
                <input
                  type="checkbox"
                  checked={activeFilters.fuelTypes.includes(fuelType)}
                  onChange={() => handleFuelTypeChange(fuelType)}
                  className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 dark:border-gray-600"
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300">{fuelType}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Transmission */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Transmission</h4>
          <div className="space-y-2">
            {options.transmission.map((trans) => (
              <label key={trans} className="flex items-center">
                <input
                  type="checkbox"
                  checked={activeFilters.transmission.includes(trans)}
                  onChange={() => handleTransmissionChange(trans)}
                  className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4 border-gray-300 dark:border-gray-600"
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300">{trans}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarFilters;
