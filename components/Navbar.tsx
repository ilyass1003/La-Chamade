import React from 'react';
import { ChevronDown } from 'lucide-react';

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

        {/* Center Section: Menu + Reservation CTA */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center gap-8">
          {/* Menu Button */}
          <a
            href="#menu"
            className="group relative px-2 py-2 font-bold text-dark text-lg hover:text-secondary transition-colors"
          >
            {/* Dots animation on hover */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2"></span>
            Menu
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-x-2"></span>
          </a>

          {/* New Reservation CTA */}
          <a href="#reservation"
            className="inline-flex items-center gap-3 hover:shadow-2xl transition bg-black/5 ring-black/10 ring-1 rounded-full p-2 pr-4 shadow group"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full" style={{
              background: 'radial-gradient(100% 100% at 50% 0%, #ff6b6b 0%, #ef4444 60%, #dc2626 100%)',
              boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.7), 0 6px 18px rgba(239,68,68,0.35)'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
            <span className="text-sm font-medium text-dark">Réservez une table</span>
          </a>
        </div>

        {/* Right Side Actions (Language Selector) */}
        <div className="flex items-center gap-6 z-20">

          {/* Language Selector */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              onBlur={() => setTimeout(() => setIsLangOpen(false), 200)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                outline: 'none',
                cursor: 'pointer',
                width: '140px',
                height: '46px',
                backgroundImage: 'linear-gradient(to top, rgb(216, 217, 219) 0%, rgb(255, 255, 255) 80%, rgb(253, 253, 253) 100%)',
                borderRadius: '30px',
                border: '1px solid rgb(143, 144, 146)',
                transition: '0.2s',
                fontFamily: '"Inter", sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: 'rgb(96, 96, 96)',
                textShadow: 'rgb(255, 255, 255) 0px 1px'
              }}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 3px 3px #CECFD1'}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = ''}
              onMouseDown={(e) => e.currentTarget.style.boxShadow = '0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa'}
              onMouseUp={(e) => e.currentTarget.style.boxShadow = '0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 3px 3px #CECFD1'}
            >
              {currentLang}
              <ChevronDown size={14} className={`transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-full bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setCurrentLang(lang);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-50 flex items-center justify-between ${currentLang === lang ? 'text-secondary bg-pinkish/50' : 'text-gray-600'
                      }`}
                  >
                    {lang}
                    {currentLang === lang && <div className="w-1.5 h-1.5 rounded-full bg-secondary" />}
                  </button>
                ))}
              </div>
            )}
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