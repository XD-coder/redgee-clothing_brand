"use client";
import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Legacy Suit',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
    price: 8999,
    category: 'Suits',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy'],
    description: 'Classic tailoring, premium wool blend.'
  },
  {
    id: 2,
    name: 'Metropolitan Blazer',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80',
    price: 6499,
    category: 'Blazers',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Grey', 'Blue'],
    description: 'Modern fit, sustainable fabric.'
  },
  {
    id: 3,
    name: 'Casual Luxe Shirt',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    price: 2499,
    category: 'Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Blue'],
    description: 'Soft cotton, timeless style.'
  },
];

const categories = ['All', 'Suits', 'Blazers', 'Shirts'];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(p => p.category === selectedCategory);

  return (
    <main className="bg-background text-foreground min-h-screen py-16">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">Shop Stitches</h1>
      <div className="flex justify-center gap-4 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-6 py-2 rounded-full border border-border font-medium transition-colors hover:bg-primary hover:text-primary-foreground ${selectedCategory === cat ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground'}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-card rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-xl">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
              <p className="text-muted-foreground mb-2">{product.description}</p>
              <span className="block text-lg font-bold text-primary mb-4">₹{product.price}</span>
              <a href={`/product/${product.id}`} className="inline-block px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium shadow hover:bg-primary/80 transition-colors">View Details</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
