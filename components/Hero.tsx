import React from 'react';
import { ASSETS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white pt-20 pb-0">

      {/* Floating Ingredients Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-10">
        <img src={ASSETS.basil} alt="Basil" className="absolute top-10 left-[5%] w-32 md:w-40 animate-float-slow" />
        <img src={ASSETS.olive} alt="Olive" className="absolute top-[30%] left-[10%] w-24 md:w-32 animate-float-medium" />
        <img src={ASSETS.garlic} alt="Garlic" className="absolute bottom-[20%] left-[15%] w-32 md:w-36 animate-float-fast" />
        <img src={ASSETS.tomato} alt="Tomato" className="absolute top-[60%] left-[5%] w-28 animate-float-slow" />
        <img src={ASSETS.mushroom} alt="Mushroom" className="absolute bottom-[10%] left-[20%] w-24 animate-float-medium" />

        <img src={ASSETS.mushroom} alt="Mushroom" className="absolute top-16 right-[10%] w-28 animate-float-medium" />
        <img src={ASSETS.tomato} alt="Tomato" className="absolute top-[25%] right-[5%] w-40 animate-float-slow" />
        <img src={ASSETS.jalapeno} alt="Jalapeno" className="absolute bottom-[30%] right-[12%] w-44 animate-float-fast" />
        <img src={ASSETS.basil} alt="Basil" className="absolute top-[50%] right-[2%] w-32 animate-float-medium" />
        <img src={ASSETS.olive} alt="Olive" className="absolute bottom-[10%] right-[15%] w-24 animate-float-fast" />
      </div>

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center gap-8 max-w-4xl mx-auto text-center px-4 mb-32 md:mb-0">
        <h1 className="font-heading font-extrabold text-6xl md:text-8xl lg:text-9xl leading-tight text-dark">
          The Art of<br />
          Meter-Long Pizza!
        </h1>

        <p className="font-body text-gray-500 text-lg md:text-xl max-w-xl">
          Gather your friends and family and enjoy the best pizza in Nice. Freshly made and delivered hot!
        </p>

        <a
          href="#menu"
          className="bg-secondary text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-[0_0_15px_0_rgba(255,0,60,0.6)] transition-all duration-300 transform hover:-translate-y-1"
        >
          View Our Menu
        </a>
      </div>

      {/* Spinning Pizza - Positioned to be half hidden at the bottom */}
      <div className="absolute bottom-[-25vw] md:bottom-[-20vw] left-1/2 -translate-x-1/2 z-20 w-[80vw] md:w-[60vw] max-w-[800px] aspect-square pointer-events-none">
        <img
          src={ASSETS.heroPizza}
          alt="Spinning Pizza"
          className="w-full h-full object-contain animate-[spin_60s_linear_infinite]"
        />
      </div>
    </section>
  );
};

export default Hero;