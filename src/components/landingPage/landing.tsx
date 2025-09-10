'use client';
import React, { useState } from 'react';

// Define a type for the product data to ensure consistency and type safety.
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
}

// Hero Section Component
const HeroSection = () => {
  const handleScroll = () => {
    const gallery = document.getElementById('gallery');
    if (gallery) {
      gallery.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full h-[600px] md:h-[800px] flex items-center justify-center relative overflow-hidden bg-black text-white">
      <div className="relative z-10 text-center flex flex-col items-center px-4">
        <div className="relative mb-8">
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 font-sans text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-widest uppercase text-gray-500 opacity-20 animate-fade-in">
            Luxury Collection
          </h2>
          <h1 className="relative font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide animate-fade-in-up delay-200">
            Exquisite Craftsmanship
          </h1>
        </div>
        <button
          onClick={handleScroll}
          className="mt-16 border border-white text-white py-3 px-8 text-sm md:text-base tracking-widest uppercase transition-colors duration-300 hover:bg-white hover:text-black rounded-full font-sans animate-fade-in-up delay-400"
        >
          Shop The Collection
        </button>
      </div>
    </header>
  );
};

// Product Gallery Component
const ProductGallery: React.FC<{ products: Product[] }> = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <main id="gallery" className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      {/* Category Navigation */}
      <nav className="flex justify-center flex-wrap space-x-4 md:space-x-8 mb-12 md:mb-16 font-sans">
        {['all', 'women', 'men', 'accessories'].map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`pb-2 text-sm md:text-base uppercase tracking-wider transition-colors duration-300 font-medium ${
              activeCategory === category
                ? 'border-b-2 border-gray-800 text-gray-800'
                : 'border-b-2 border-transparent text-gray-400 hover:text-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </nav>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="relative group overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
            <div className="relative overflow-hidden w-full h-96">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4 md:p-6 text-center">
              <h3 className="font-serif text-xl md:text-2xl font-light mb-1">
                {product.name}
              </h3>
              <p className="text-lg text-gray-600 font-sans">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

// Main App Component
const App = () => {
  // Dummy data for products, now with a defined type.
  const products: Product[] = [
    { id: 1, name: 'The Classic Trench', category: 'women', price: 950, imageUrl: 'https://placehold.co/600x800/e5e7eb/374151?text=Trench+Coat' },
    { id: 2, name: 'Merino Wool Sweater', category: 'men', price: 420, imageUrl: 'https://placehold.co/600x800/d1d5db/4b5563?text=Wool+Sweater' },
    { id: 3, name: 'Silk Pocket Square', category: 'accessories', price: 110, imageUrl: 'https://placehold.co/600x800/9ca3af/1f2937?text=Pocket+Square' },
    { id: 4, name: 'Tailored Linen Trousers', category: 'men', price: 380, imageUrl: 'https://placehold.co/600x800/6b7280/111827?text=Trousers' },
    { id: 5, name: 'Cashmere Shawl', category: 'women', price: 600, imageUrl: 'https://placehold.co/600x800/4b5563/d1d5db?text=Cashmere+Shawl' },
    { id: 6, name: 'Sleek Leather Belt', category: 'accessories', price: 250, imageUrl: 'https://placehold.co/600x800/374151/e5e7eb?text=Leather+Belt' },
    { id: 7, name: 'Elegant Evening Dress', category: 'women', price: 1200, imageUrl: 'https://placehold.co/600x800/111827/9ca3af?text=Evening+Dress' },
    { id: 8, name: 'Slim Fit Blazer', category: 'men', price: 780, imageUrl: 'https://placehold.co/600x800/1f2937/6b7280?text=Blazer' },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen flex flex-col">
      {/* Tailwind CSS CDN for styling */}
      <script src="https://cdn.tailwindcss.com"></script>

      {/* Custom Styles for Fonts and Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          
          /* Custom font setup for this project */
          .font-serif {
            font-family: 'Playfair Display', serif;
          }
          .font-sans {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>

      <HeroSection />
      <ProductGallery products={products} />

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-12 text-center font-sans">
        <p className="text-sm md:text-base font-light tracking-wide">
          © 2024 The Brand. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
