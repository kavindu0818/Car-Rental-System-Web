import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "The rental process was smooth from start to finish. The car was in perfect condition and made our vacation even more enjoyable.",
    author: "Sarah Johnson",
    role: "Business Traveler",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    content: "Exceptional service! The staff was incredibly helpful and the car exceeded my expectations. Will definitely use LuxeRentals again.",
    author: "Michael Chen",
    role: "Tourist",
    rating: 5,
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    content: "I've rented from several companies, but LuxeRentals provides the best value and quality by far. Their selection of vehicles is impressive.",
    author: "Emma Rodriguez",
    role: "Regular Customer",
    rating: 4,
    avatar: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 to-blue-900 dark:from-[#0B1120] dark:to-[#0F172A] text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700/20 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-700/20 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 dark:from-blue-100 dark:to-indigo-200">
              What Our Customers Say
            </h2>
            <p className="max-w-2xl mx-auto text-blue-100 dark:text-blue-200">
              Read testimonials from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white/5 dark:bg-blue-900/20 backdrop-blur-lg p-6 rounded-xl border border-white/10 dark:border-blue-700/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={`${
                        i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'
                      }`} 
                    />
                  ))}
                </div>
                <p className="mb-6 text-white/90 dark:text-blue-100 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-white/20 dark:ring-blue-500/30"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-blue-200 dark:text-blue-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;