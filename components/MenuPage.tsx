import React, { useState, useEffect } from 'react';
import { MenuItem, MenuCategory } from '../types';
import ReservationBanner from './ReservationBanner';

interface MenuPageProps {
    data: any;
    t: any;
    initialCategory?: MenuCategory;
}

const MenuPage: React.FC<MenuPageProps> = ({ data, t, initialCategory }) => {
    const [activeCategory, setActiveCategory] = useState<MenuCategory>(initialCategory || 'classics');

    useEffect(() => {
        if (initialCategory) {
            setActiveCategory(initialCategory);
        }
    }, [initialCategory]);

    const categories: { key: MenuCategory; label: string; dataKey: string }[] = [
        { key: 'starters', label: t.menuPage.starters, dataKey: 'STARTERS' },
        { key: 'salads', label: t.menuPage.salads, dataKey: 'SALADS' },
        { key: 'meterPizzas', label: t.menuPage.meterPizzas, dataKey: 'METER_PIZZAS' },
        { key: 'classics', label: t.menuPage.classics, dataKey: 'CLASSICS' },
        { key: 'specials', label: t.menuPage.specials, dataKey: 'SPECIALS' },
        { key: 'desserts', label: t.menuPage.desserts, dataKey: 'DESSERTS' },
        { key: 'drinks', label: t.menuPage.drinks, dataKey: 'DRINKS' },
    ];

    const activeItems = data[categories.find(c => c.key === activeCategory)?.dataKey || 'CLASSICS'] || [];

    return (
        <div className="bg-white min-h-screen pt-8 pb-20">
            <div className="max-w-[1000px] mx-auto px-6">
                {/* Title */}
                <h1 className="font-display text-5xl md:text-6xl text-center mb-12 text-dark">
                    {t.menuPage.title}
                </h1>

                {/* Categories Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveCategory(cat.key)}
                            className={`
                px-6 py-2 rounded-full font-heading font-bold text-lg uppercase tracking-wide transition-all
                ${activeCategory === cat.key
                                    ? 'bg-secondary text-white shadow-lg scale-105'
                                    : 'bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-dark'
                                }
              `}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Gluten Free Note */}
                <p className="text-center text-gray-400 italic mb-12 text-sm">
                    {t.menuPage.glutenFree}
                </p>

                {/* Menu Items List */}
                <div className="space-y-8 max-w-[800px] mx-auto">
                    {activeItems.map((item: MenuItem) => (
                        <div key={item.id} className="group border-b border-gray-100 pb-6 mb-6 last:border-0">
                            <div className="flex justify-between items-baseline gap-4">
                                <div className="flex-1">
                                    <h3 className="font-heading font-bold text-xl md:text-2xl text-dark mb-2 group-hover:text-primary transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="font-body text-gray-500 text-sm md:text-base leading-relaxed max-w-[90%]">
                                        {item.ingredients}
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <span className="font-heading font-bold text-xl md:text-2xl text-dark">
                                        {item.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {activeItems.length === 0 && (
                        <p className="text-center text-gray-400 italic">No items available.</p>
                    )}
                </div>

                {/* Reservation Banner */}
                <div className="mt-20">
                    <ReservationBanner t={t.reservation} />
                </div>
            </div>
        </div>
    );
};

export default MenuPage;
