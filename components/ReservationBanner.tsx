import React from 'react';
import { Phone } from 'lucide-react';
import { ASSETS } from '../constants';

interface ReservationBannerProps {
    t: {
        title: string;
        button: string;
    };
}

const ReservationBanner: React.FC<ReservationBannerProps> = ({ t }) => {
    return (
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
                        {t.title}
                    </h2>
                    <a
                        href="tel:0669524404"
                        className="flex items-center gap-4 bg-secondary text-white px-8 py-4 rounded-lg font-body text-2xl md:text-3xl font-bold tracking-wider hover:scale-105 transition-transform shadow-xl hover:shadow-2xl"
                    >
                        <Phone size={32} fill="currentColor" />
                        {t.button}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ReservationBanner;
