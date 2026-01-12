import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-secondary text-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand & Contact */}
          <div className="flex flex-col gap-6">
            <a href="#" className="font-display text-4xl hover:text-blue-200 hover:underline transition-colors w-max">
              La Chamade
            </a>
            <div className="flex flex-col gap-4">
              <p className="font-body text-lg">12 Rue Dante, 06000 Nice</p>
              <a href="tel:0669524404" className="font-heading font-bold text-2xl hover:text-blue-200 hover:underline transition-colors w-max">
                06 69 52 44 04
              </a>
              <div className="font-body text-sm space-y-2">
                <p>
                  <strong>Lundi :</strong> Fermé<br />
                  <strong>Mardi - Vendredi :</strong> 12:00 - 14:00 et 19:00 - 22:00
                </p>
                <p>
                  <strong>Samedi - Dimanche :</strong> 19:00 - 22:00
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-body text-xs font-bold tracking-widest uppercase opacity-70">MENU</h3>
            <div className="flex flex-col gap-4">
              <a href="#" className="font-heading font-bold text-xl hover:text-blue-200 hover:underline transition-colors w-max">Accueil</a>
              <a href="#" className="font-heading font-bold text-xl hover:text-blue-200 hover:underline transition-colors w-max">Notre carte</a>
              <a href="#" className="font-heading font-bold text-xl hover:text-blue-200 hover:underline transition-colors w-max">Contactez-nous !</a>
            </div>
          </div>

          {/* Useful & Social */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h3 className="font-body text-xs font-bold tracking-widest uppercase opacity-70">USEFUL</h3>
              <div className="flex flex-col gap-2 font-heading font-semibold text-base">
                <a href="#" className="hover:text-blue-200 hover:underline w-max">Politique de Confidentialité</a>
                <a href="#" className="hover:text-blue-200 hover:underline w-max">Politique relative aux cookies</a>
                <a href="#" className="hover:text-blue-200 hover:underline w-max">Conditions Générales</a>
                <a href="#" className="hover:text-blue-200 hover:underline w-max">Remboursements et Annulations</a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-body text-xs font-bold tracking-widest uppercase opacity-70">SOCIAL</h3>
              <div className="flex flex-col gap-2 font-heading font-semibold text-base">
                <a href="#" className="hover:text-blue-200 hover:underline w-max">Instagram</a>
                <a href="#" className="hover:text-blue-200 hover:underline w-max">Trip Advisor</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 pt-8 border-t border-white/20 text-sm font-body opacity-80">
          <p>© 2026</p>
          <span className="hidden md:inline">•</span>
          <p>Made by <a href="https://niyapartner.fr" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">NIYA Partner</a> with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;