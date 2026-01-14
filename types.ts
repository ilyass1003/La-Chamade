import React from 'react';

export interface MenuItem {
  id: string;
  name: string;
  ingredients: string;
  price: string;
  image: string;
  orderUrl: string;
}

export interface Review {
  id: string;
  author: string;
  role?: string;
  text: string;
  image: string;
  stars?: number;
}

export interface SectionProps {
  title: string;
  subtitle: string;
  bgColor?: string;
  cardBgColor?: string;
  children?: React.ReactNode;
}

export type MenuCategory = 'starters' | 'salads' | 'meterPizzas' | 'classics' | 'specials' | 'desserts' | 'drinks';

declare module '*.png';
declare module '*.jpg';