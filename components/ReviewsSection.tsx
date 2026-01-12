import React from 'react';
import { REVIEWS } from '../constants';
import { Star } from 'lucide-react';

const ReviewsSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-dark text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div className="flex flex-col gap-8 px-6 lg:pl-12 z-10">
             {/* Stars */}
            <div className="flex gap-1 text-primary">
            {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} fill="currentColor" size={24} />
            ))}
            </div>

            <h2 className="font-heading font-extrabold text-4xl md:text-6xl leading-tight">
            "Probablement la meilleure pizza que j’aie mangée récemment !"
            </h2>
            
            <p className="font-body text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
            Des guides gastronomiques aux Niçois fidèles, en passant par les touristes du monde entier, découvrez pourquoi notre savoir-faire fait l'unanimité à Nice.
            </p>
            
            <div className="mt-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                    <img src={REVIEWS[2].image} className="w-full h-full object-cover" alt="Critic" />
                </div>
                <div className="text-left">
                    <p className="font-bold">Lucas van den Berg</p>
                    <p className="text-sm text-gray-400">Restaurant Critic</p>
                </div>
            </div>
        </div>

        {/* Right: Scrolling Images with Fade Mask */}
        <div className="relative w-full h-[600px] flex items-center overflow-hidden">
            {/* Gradient Mask for fading to background (left side) */}
            <div className="absolute inset-y-0 left-0 w-32 z-20 bg-gradient-to-r from-dark to-transparent"></div>

            <div className="flex gap-6 animate-[float_40s_linear_infinite] w-max hover:pause pl-12">
                {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, idx) => (
                <div 
                    key={`${review.id}-${idx}`} 
                    className="relative w-[350px] aspect-[3/4] rounded-3xl overflow-hidden group flex-shrink-0"
                >
                    <img src={review.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 gap-2">
                         <p className="font-heading italic text-lg text-white/90">
                            {review.text.length > 100 ? review.text.substring(0, 100) + '...' : review.text}
                         </p>
                         <p className="font-bold text-white mt-2">{review.author}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;