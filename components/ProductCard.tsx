import React from 'react';
import { MenuItem } from '../types';

interface ProductCardProps {
  item: MenuItem;
  bgColor?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, bgColor = 'bg-white' }) => {
  return (
    <div className={`flex flex-col items-center gap-6 w-full p-8 ${bgColor} rounded-[32px] hover:scale-[1.02] transition-transform duration-300 h-full`}>
      {/* Image */}
      <div className="flex-shrink-0 relative w-full aspect-square flex justify-center items-center mb-4 overflow-hidden rounded-full">
         {/* Use object-cover for wines to fill the circle better, object-contain for pizzas */}
        <img 
          src={item.image} 
          alt={item.name} 
          className={`w-full h-full ${item.image.includes('unsplash') ? 'object-cover' : 'object-contain'} drop-shadow-xl`} 
        />
      </div>

      {/* Content: Title -> Description -> Price */}
      <div className="flex-1 flex flex-col items-center text-center gap-4 w-full">
        <h3 className="font-heading font-extrabold text-2xl text-dark">
            {item.name}
        </h3>
        
        <p className="font-body text-gray-500 text-sm leading-relaxed max-w-xs">
          {item.ingredients}
        </p>

        <p className="font-heading font-bold text-2xl text-dark mt-auto">
            {item.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;