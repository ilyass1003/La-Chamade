import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import { ASSETS, getData } from './constants';
import { TRANSLATIONS } from './translations';
import { Phone } from 'lucide-react';

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'fr' | 'en' | 'it'>('fr');

  const data = getData(currentLang);
  const t = TRANSLATIONS[currentLang];

  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} t={t.navbar} />

      <main>
        <Hero t={t.hero} />

        {/* Popular Pizzas Section */}
        <div id="menu">
          <ProductSection
            title={t.menu.pizzas.title}
            subtitle={t.menu.pizzas.subtitle}
            items={data.PIZZAS}
            bgColor="bg-stone-50"
            cardBgColor="bg-white"
            viewMoreLink="#"
            viewMoreText={t.menu.pizzas.viewMore}
          />
        </div>

        {/* Desserts Section */}
        <ProductSection
          title={t.menu.desserts.title}
          subtitle={t.menu.desserts.subtitle}
          items={data.DESSERTS}
          bgColor="bg-white"
          cardBgColor="bg-stone-50"
          viewMoreLink="#"
          viewMoreText={t.menu.desserts.viewMore}
        />

        {/* Drinks Section */}
        <ProductSection
          title={t.menu.drinks.title}
          subtitle={t.menu.drinks.subtitle}
          items={data.DRINKS}
          bgColor="bg-stone-50"
          cardBgColor="bg-white"
          viewMoreLink="#"
          viewMoreText={t.menu.drinks.viewMore}
        />

        {/* Reviews */}
        <ReviewsSection t={t.reviews} reviews={data.REVIEWS} />

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
              <h2 className="font-heading font-extrabold text-4xl md:text-6xl text-dark leading-tight whitespace-pre-line">
                {t.reservation.title}
              </h2>
              <a
                href="tel:0669524404"
                className="flex items-center gap-4 bg-secondary text-white px-8 py-4 rounded-lg font-body text-2xl md:text-3xl font-bold tracking-wider hover:scale-105 transition-transform shadow-xl hover:shadow-2xl"
              >
                <Phone size={32} fill="currentColor" />
                {t.reservation.button}
              </a>
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

      <Footer t={t.footer} />
    </div>
  );
};

export default App;