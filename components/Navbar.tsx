import React from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 px-6">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between relative">
        {/* Logo (Left) */}
        <div className="flex-shrink-0 z-20">
          <a href="#" className="font-display text-4xl text-dark hover:text-dark transition-colors no-underline">
            La Chamade
          </a>
        </div>

        {/* Reservation CTA (Center) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
           <a 
            href="#reservation" 
            className="bg-dark text-white px-6 py-2.5 rounded-full font-medium text-sm hover:shadow-[0_0_10px_0_rgba(255,0,60,0.5)] transition-shadow duration-300"
          >
            Réservez une table !
          </a>
        </div>

        {/* Right Side Actions (Menu + Lang) */}
        <div className="flex items-center gap-6 z-20">
          
          {/* Menu Button */}
          <a 
            href="#" 
            className="group relative px-2 py-2 font-bold text-dark text-lg hover:text-secondary transition-colors hidden md:block"
          >
            {/* Dots animation on hover */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2"></span>
            Menu
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-x-2"></span>
          </a>

          {/* Language Selector */}
          <div className="hidden md:flex items-center gap-2 bg-white/50 backdrop-blur-md border border-gray-200 px-3 py-2 rounded-lg text-sm font-medium text-dark cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="flex items-center gap-2">
               Français / English / Italiano
            </span>
            <ChevronDown size={14} className="text-gray-500" />
          </div>
          
          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-dark">
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <span className="block w-full h-0.5 bg-dark"></span>
              <span className="block w-full h-0.5 bg-dark"></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;