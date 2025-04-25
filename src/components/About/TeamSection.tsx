import React from 'react';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Sarah founded LuxeRentals in 2010 with a vision to redefine the car rental experience with premium vehicles and exceptional service.'
  },
  {
    name: 'Michael Chen',
    role: 'Operations Director',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'With over 15 years of experience in the automotive industry, Michael ensures our fleet is maintained to the highest standards.'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Customer Relations Manager',
    image: 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Emma leads our customer service team with a focus on providing personalized and responsive support to all our clients.'
  },
  {
    name: 'David Kim',
    role: 'Fleet Manager',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'David brings his passion for automobiles to curating our diverse fleet, ensuring we offer the perfect vehicle for every occasion.'
  }
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 to-blue-900 dark:from-[#0B1120] dark:to-[#0F172A]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700/20 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-700/20 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white dark:text-blue-100 mb-4">
              Meet Our Team
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-blue-100 dark:text-blue-200">
              Our dedicated team of professionals works tirelessly to ensure that your car rental experience exceeds your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white/5 dark:bg-blue-900/20 backdrop-blur-lg rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20 border border-white/10 dark:border-blue-700/30 group"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-300 dark:text-blue-400 font-medium mb-3">{member.role}</p>
                  <p className="text-blue-100 dark:text-blue-200">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;