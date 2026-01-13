import React from 'react';
import { SectionProps, MenuItem } from '../types';
import ProductCard from './ProductCard';

interface ProductSectionProps extends SectionProps {
  items: MenuItem[];
  viewMoreLink?: string;
  viewMoreText?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  subtitle,
  items,
  bgColor = 'bg-white',
  cardBgColor = 'bg-white',
  viewMoreLink,
  viewMoreText
}) => {
  return (
    <section className={`w-full py-24 px-6 ${bgColor} flex flex-col items-center gap-16 relative z-10`}>
      <header className="flex flex-col items-center text-center gap-4 max-w-3xl">
        <div className="flex items-center gap-3">
          <h2 className="font-heading font-extrabold text-5xl md:text-6xl text-dark">
            {title}
          </h2>
        </div>
        <p className="font-body text-gray-500 text-lg">
          {subtitle}
        </p>
      </header>

      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} bgColor={cardBgColor} />
        ))}
      </div>

      {viewMoreLink && (
        <a
          href={viewMoreLink}
          className="mt-4 px-10 py-4 rounded-full text-white text-lg font-bold bg-secondary hover:brightness-110 hover:shadow-[0_10px_20px_rgba(255,0,60,0.3)] transition-all transform hover:-translate-y-1"
        >
          {viewMoreText || "View full Menu"}
        </a>
      )}
    </section>
  );
};

export default ProductSection;