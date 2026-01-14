import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import MenuPage from './components/MenuPage';
import ReservationBanner from './components/ReservationBanner';
import { ASSETS, getData } from './constants';
import { TRANSLATIONS } from './translations';
import { Phone } from 'lucide-react';
import { MenuCategory } from './types';

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'fr' | 'en' | 'it'>('fr');
  const [currentView, setCurrentView] = useState<'home' | 'menu'>('home');
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('classics');

  const data = getData(currentLang);
  const t = TRANSLATIONS[currentLang];

  const handleNavigate = (view: 'home' | 'menu', category?: MenuCategory) => {
    setCurrentView(view);
    if (view === 'menu' && category) {
      setSelectedCategory(category);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
        currentView={currentView}
        onNavigate={handleNavigate}
        t={t.navbar}
      />

      <main>
        {currentView === 'home' ? (
          <>
            <Hero t={t.hero} onNavigate={handleNavigate} />

            {/* Popular Pizzas Section */}
            {/* Using SPECIALS for the home page highlight */}
            <div id="menu">
              <ProductSection
                title={t.menu.pizzas.title}
                subtitle={t.menu.pizzas.subtitle}
                items={data.SPECIALS.slice(0, 3)}
                bgColor="bg-stone-50"
                cardBgColor="bg-white"
                viewMoreLink="#"
                viewMoreText={t.menu.pizzas.viewMore}
                onNavigate={handleNavigate}
                targetCategory="classics"
              />
            </div>

            {/* Desserts Section */}
            <ProductSection
              title={t.menu.desserts.title}
              subtitle={t.menu.desserts.subtitle}
              items={data.DESSERTS.slice(0, 3)}
              bgColor="bg-white"
              cardBgColor="bg-white border border-gray-100 shadow-lg"
              viewMoreLink="#"
              viewMoreText={t.menu.desserts.viewMore}
              onNavigate={handleNavigate}
              targetCategory="desserts"
            />

            {/* Drinks Section */}
            <ProductSection
              title={t.menu.drinks.title}
              subtitle={t.menu.drinks.subtitle}
              items={data.DRINKS.filter(d => ['aperol', 'prosecco', 'moretti'].includes(d.id))}
              bgColor="bg-stone-50"
              cardBgColor="bg-white"
              viewMoreLink="#"
              viewMoreText={t.menu.drinks.viewMore}
              onNavigate={handleNavigate}
              targetCategory="drinks"
            />

            {/* Reviews */}
            <ReviewsSection t={t.reviews} reviews={data.REVIEWS} />

            {/* Reservation Interstitial */}
            <ReservationBanner t={t.reservation} />

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
          </>
        ) : (
          <MenuPage data={data} t={t} initialCategory={selectedCategory} />
        )}
      </main>

      <Footer t={t.footer} />
    </div>
  );
};

export default App;