import React from 'react';
import { ChevronDown, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isLangOpen, setIsLangOpen] = React.useState(false);
  const [currentLang, setCurrentLang] = React.useState('Français');

  const languages = ['Français', 'English', 'Italiano'];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 px-6">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between relative">
        {/* Logo (Left) */}
        <div className="flex-shrink-0 z-20">
          <a href="#" className="font-display text-4xl text-dark hover:text-dark transition-colors no-underline">
            La Chamade
          </a>
        </div>

        {/* Center Section: Menu + Language Selector */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center gap-8">
          {/* Menu Link */}
          <a
            href="#menu"
            className="font-bold text-dark text-lg hover:text-secondary transition-colors"
          >
            Menu
          </a>

          {/* Language Selector (Simple Text) */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              onBlur={() => setTimeout(() => setIsLangOpen(false), 200)}
              className="flex items-center gap-2 font-bold text-dark text-lg hover:text-secondary transition-colors outline-none"
            >
              {currentLang}
              <ChevronDown size={16} className={`transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isLangOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-40 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden py-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setCurrentLang(lang);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 flex items-center justify-between ${currentLang === lang ? 'text-secondary' : 'text-gray-600'
                      }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side Actions (Reservation Button) */}
        <div className="flex items-center gap-4 z-20">

          {/* Reservation Button */}
          <a
            href="#reservation"
            className="hidden md:flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded-full font-medium hover:shadow-lg hover:brightness-110 transition-all"
          >
            <Phone size={18} fill="currentColor" />
            <span>Réservez</span>
          </a>

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