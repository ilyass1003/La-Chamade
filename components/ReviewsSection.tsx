import React from 'react';
import { Review } from '../types';
import { Star } from 'lucide-react';

interface ReviewsSectionProps {
    t: {
        title: string;
        text: string;
    };
    reviews: Review[];
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ t, reviews }) => {
    return (
        <section className="relative w-full h-[700px] bg-dark text-white overflow-hidden">

            {/* Scrolling Images Background */}
            <div className="absolute inset-0 flex items-center overflow-x-auto snap-x snap-mandatory pt-20 pb-20 px-6 gap-8 no-scrollbar scroll-smooth">
                {/* Spacer to push first image slightly out from under text initially if desired, or just list them */}
                <div className="shrink-0 w-[20px] md:w-[400px]" /> {/* Spacer so first image isn't buried */}

                {reviews.map((review, idx) => (
                    <div
                        key={`${review.id}-${idx}`}
                        className="relative shrink-0 w-[350px] md:w-[450px] aspect-[3/4] rounded-2xl overflow-hidden snap-center hover:scale-[1.02] transition-transform duration-300 shadow-2xl"
                    >
                        <img src={review.image} className="w-full h-full object-cover" alt="" />
                        {/* Text overlay on individual cards is optional, keeping subtle gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                    </div>
                ))}
                {/* Repeat reviews to allow more scrolling if list is short */}
                {reviews.map((review, idx) => (
                    <div
                        key={`dup-${review.id}-${idx}`}
                        className="relative shrink-0 w-[350px] md:w-[450px] aspect-[3/4] rounded-2xl overflow-hidden snap-center hover:scale-[1.02] transition-transform duration-300 shadow-2xl"
                    >
                        <img src={review.image} className="w-full h-full object-cover" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                    </div>
                ))}
            </div>

            {/* Text Overlay - Left Side with Gradient */}
            <div className="absolute inset-y-0 left-0 w-full md:w-[60%] lg:w-[50%] bg-gradient-to-r from-dark via-dark/80 to-transparent z-20 pointer-events-none flex flex-col justify-center px-8 md:pl-24">
                <div className="flex flex-col gap-8 max-w-lg">
                    {/* Stars */}
                    <div className="flex gap-1 text-primary">
                        {[1, 2, 3, 4, 5].map(i => (
                            <Star key={i} fill="currentColor" size={24} />
                        ))}
                    </div>

                    <h2 className="font-heading font-extrabold text-4xl md:text-5xl leading-tight">
                        {t.title}
                    </h2>

                    <p className="font-body text-lg text-gray-300 leading-relaxed">
                        {t.text}
                    </p>
                </div>
            </div>

        </section>
    );
};

export default ReviewsSection;