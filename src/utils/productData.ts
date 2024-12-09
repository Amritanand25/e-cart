import { Product } from '../types/product';

export const productImages = [
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80', // Headphones
  'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1200&q=80', // Smart Watch
  'https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?w=1200&q=80', // Laptop
  'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&q=80', // Keyboard
  'https://images.unsplash.com/photo-1527814050087-3793815479db?w=1200&q=80', // Speakers
];

const productNames = [
  'Premium Wireless Headphones',
  'Smart Watch Pro',
  'Ultra Laptop X1',
  'Mechanical Keyboard RGB',
  'Wireless Bluetooth Speaker',
];

const descriptions = [
  'Experience crystal-clear sound with active noise cancellation and 30-hour battery life.',
  'Track your fitness and stay connected with this premium smartwatch.',
  'Powerful performance meets sleek design in this ultrabook.',
  'Mechanical switches with customizable RGB lighting for the ultimate typing experience.',
  'Room-filling sound with deep bass and 24-hour playback.',
];

export const generateMockProducts = (start: number, limit: number): Product[] => {
  return Array.from({ length: limit }, (_, index) => {
    const arrayIndex = (start + index) % 5;
    const basePrice = 200 + Math.floor(Math.random() * 800);
    return {
      id: start + index,
      name: productNames[arrayIndex],
      description: descriptions[arrayIndex],
      price: basePrice,
      originalPrice: basePrice * 1.2,
      image: productImages[arrayIndex],
    };
  });
};