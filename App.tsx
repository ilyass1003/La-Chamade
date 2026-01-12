import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import { PIZZAS, DESSERTS, WINES, ASSETS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Popular Pizzas Section */}
        <div id="menu">
          <ProductSection 
            title="Fan Favorites ❤️"
            subtitle="From classic combinations to bold flavors, these pizzas top our list for a reason."
            items={PIZZAS}
            bgColor="bg-pinkish"
            cardBgColor="bg-white"
            viewMoreLink="#"
            viewMoreText="View full Menu"
          />
        </div>

        {/* Desserts Section */}
        <ProductSection 
          title="Save Room for Dessert!"
          subtitle="Our desserts are worth it. Trust us, you won’t want to miss these sweet delights."
          items={DESSERTS}
          bgColor="bg-white"
          cardBgColor="bg-pinkish"
          viewMoreLink="#"
          viewMoreText="View full Menu"
        />

        {/* Wines Section */}
        <ProductSection 
           title="Italian Vineyards & Local Flavors 🍷"
           subtitle="Elevate your dining experience with our curated selection of authentic Italian wines and classic apéritifs."
           items={WINES}
           bgColor="bg-pinkish"
           cardBgColor="bg-white"
           viewMoreLink="#"
           viewMoreText="View Wine List"
        />

        {/* Reviews */}
        <ReviewsSection />

        {/* Reservation Interstitial */}
        <section id="reservation" className="w-full bg-white py-24 px-6">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
            
            {/* Spinning Pizza */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
               <img 
                 src={ASSETS.heroPizza} 
                 className="w-full h-full object-contain animate-[spin_20s_linear_infinite]" 
                 alt="Pizza"
               />
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8">
              <h2 className="font-heading font-extrabold text-4xl md:text-6xl text-dark leading-tight">
                Appelez notre<br />réceptionniste IA<br />pour réserver !
              </h2>
              <div className="bg-[#e9fbf0] text-[#22cc66] px-8 py-4 rounded-lg font-body text-3xl md:text-4xl font-bold tracking-wider">
                06 69 52 44 04
              </div>
            </div>

          </div>
        </section>

        {/* Map */}
        <section className="w-full h-[400px] bg-gray-100">
          <iframe 
            className="w-full h-full border-0" 
            src="https://maps.google.com/maps?q=La%20Chamade%20Nice&z=16&output=embed" 
            allowFullScreen 
            loading="lazy"
            title="La Chamade Map"
          ></iframe>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;