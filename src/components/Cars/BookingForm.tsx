import React, { useState } from 'react';
import { Calendar, User, Mail, Phone, CreditCard, Check } from 'lucide-react';
import {BookingDetails} from '../../types';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/Store.ts";
import {saveCustomer} from "../../slice/customersSlice.ts";
import {Customer} from "../../model/Customer.ts";
import {CarModel} from "../../model/CarModel.ts";
import {BookingModel} from "../../model/BookingModel.ts";
import {addBooking} from "../../slice/bookingSlice.ts";
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";
import Login from "../user/Login.tsx";

// import {data} from "autoprefixer";

interface BookingFormProps {
  cars: CarModel;
  booking: BookingModel;
  onBookingSubmit: (booking: BookingDetails) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ cars, onBookingSubmit }) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // const isAuthenticated = useSelector((state: any) => state.user.isAuthenticated.data);
  const isAuthenticated = useSelector((state: any) => state.user.isAuthenticated);



  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrowStr);
  const [name, setCustomerName] = useState('');
  const [email, setCustomerEmail] = useState('');
  const [phone, setCustomerPhone] = useState('');
  const [address, setCustomerAddress] = useState('');
  const [license, setLicenceNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);



  const calculateTotalDays = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const calculateTotalPrice = () => {
    return calculateTotalDays() * cars.price;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Checking authentication:", isAuthenticated);

    if (!isAuthenticated) {
      toast.info("🔒 Please login first to book a car.", {
        position: "top-right",
        autoClose: 3000,
      });

      // You can even store form data here temporarily if you want
      localStorage.setItem('pendingBooking', JSON.stringify({
        startDate,
        endDate,
        name,
        email,
        phone,
        address,
        license,
        carId: cars.number + cars.name, // just an idea
      }));

      setIsAddModalOpen(true);
      return;
    }

    if (!cars.available) return;

    setIsSubmitting(true);

    try {
      const booking = new BookingModel(
          cars.number + cars.name,
          phone,
          startDate,
          endDate,
          "car booking",
          calculateTotalPrice(),
          cars.price
      );

      const customer = new Customer(
          phone,
          name,
          email,
          license,
          address
      );

      const bookingResult = await dispatch(addBooking(booking)).unwrap();

      if (bookingResult) {
        await dispatch(saveCustomer(customer)).unwrap();

        setIsSuccess(true);
        toast.success("✅ Booking and Customer saved successfully!", {
          position: "top-right",
          autoClose: 3000,
        });

        setTimeout(() => {
          navigate('/cars');
        }, 3000);
      }
    } catch (error) {
      console.error('Booking failed:', error);
      toast.error("⚠️ Booking failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };




  if (!cars.available) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800 text-center">
        <h3 className="text-red-600 dark:text-red-400 font-medium text-lg mb-2">
          Currently Unavailable
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          This vehicle is currently unavailable for booking. Please check back later or select another vehicle.
        </p>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg border border-green-200 dark:border-green-800 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-800/30 rounded-full mb-4">
          <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-green-600 dark:text-green-400 font-medium text-xl mb-2">
          Booking Successful!
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          Your booking has been confirmed. A confirmation email has been sent to your email address.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          You'll be redirected in a few seconds...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-800 transition-colors">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Book This Vehicle</h3>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 mb-6">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              <Calendar className="w-4 h-4 inline mr-1"/>
              Pick-up Date
            </label>
            <input
                type="date"
                id="startDate"
                min={today}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                required
            />
          </div>

          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              <Calendar className="w-4 h-4 inline mr-1"/>
              Return Date
            </label>
            <input
                type="date"
                id="endDate"
                min={startDate}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                required
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-300">Daily Rate:</span>
              <span className="font-medium text-gray-900 dark:text-gray-100">${cars.price}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-300">Number of Days:</span>
              <span className="font-medium text-gray-900 dark:text-gray-100">{calculateTotalDays()}</span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-800 dark:text-gray-200">Total:</span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">${calculateTotalPrice()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              <User className="w-4 h-4 inline mr-1"/>
              Full Name
            </label>
            <input
                type="text"
                id="customerName"
                value={name}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                required
            />
          </div>

          <div>
            <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              <Mail className="w-4 h-4 inline mr-1"/>
              Email Address
            </label>
            <input
                type="email"
                id="customerEmail"
                value={email}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                required
            />
          </div>

          <div>
            <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              <Phone className="w-4 h-4 inline mr-1"/>
              Phone Number
            </label>
            <input
                type="tel"
                id="customerPhone"
                value={phone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                required
            />
          </div>
        </div>

        <div>
          <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            <Phone className="w-4 h-4 inline mr-1"/>
            Customer Address
          </label>
          <input
              type="tel"
              id="customer Address"
              value={address}
              onChange={(e) => setCustomerAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              required
          />
        </div>

        <div>
          <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            <Phone className="w-4 h-4 inline mr-1"/>
           Licence Number
          </label>
          <input
              type="tel"
              id="Licence Number"
              value={license}
              onChange={(e) => setLicenceNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              required
          />
        </div>
        {/*</div>*/}

        <button
            type="submit"
            disabled={isSubmitting || !cars.available}
            className={`w-full flex items-center justify-center py-3 px-4 rounded-md text-white font-medium ${
                isSubmitting
                    ? 'bg-indigo-400 dark:bg-indigo-700'
                    : 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700'
            } transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
          ) : (
              <>
                <CreditCard className="mr-2 h-5 w-5"/>
                Confirm Booking
              </>
          )}
        </button>
      </form>

      {isAddModalOpen && <Login onClose={() => setIsAddModalOpen(false)}/>}
    </div>
  );
};

export default BookingForm;
