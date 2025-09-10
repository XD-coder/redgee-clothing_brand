"use client";
import React, { useState } from 'react';

const wishlistItems = [
  {
    id: 1,
    name: 'Legacy Suit',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    price: 8999,
    availability: 'In Stock'
  },
  {
    id: 2,
    name: 'Metropolitan Blazer',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
    price: 6499,
    availability: 'Limited Stock'
  },
  {
    id: 3,
    name: 'Casual Luxe Shirt',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    price: 2499,
    availability: 'In Stock'
  }
];

export default function WishlistPage() {
  const [items, setItems] = useState(wishlistItems);

  const removeFromWishlist = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const addToCart = (id: number) => {
    alert('Added to cart!');
  };

  return (
    <main className="bg-background text-foreground min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary mb-10">My Wishlist</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-muted-foreground">
                <path d="M21 8.5c0-2.485-2.239-4.5-5-4.5S11 6.015 11 8.5c0 .842.25 1.626.677 2.281L16 21l4.323-10.219C20.75 10.126 21 9.342 21 8.5z"/>
                <path d="M3 8.5c0-2.485 2.239-4.5 5-4.5S13 6.015 13 8.5c0 .842-.25 1.626-.677 2.281L8 21 3.677 10.781C3.25 10.126 3 9.342 3 8.5z"/>
              </svg>
            </div>
            <h2 className="text-2xl text-muted-foreground mb-4">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-8">Save items you love to your wishlist</p>
            <a 
              href="/shop" 
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/80 transition-colors"
            >
              Start Shopping
            </a>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <p className="text-muted-foreground">{items.length} item{items.length !== 1 ? 's' : ''} saved</p>
              <button 
                onClick={() => setItems([])}
                className="text-destructive hover:underline"
              >
                Clear All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map(item => (
                <div key={item.id} className="bg-card rounded-2xl shadow-lg overflow-hidden group">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                    />
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      aria-label="Remove from wishlist"
                    >
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                      </svg>
                    </button>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-primary">₹{item.price.toLocaleString()}</span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        item.availability === 'In Stock' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.availability}
                      </span>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={() => addToCart(item.id)}
                        className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-full font-medium hover:bg-primary/80 transition-colors"
                      >
                        Add to Cart
                      </button>
                      <a
                        href={`/product/${item.id}`}
                        className="flex-1 bg-background border border-border text-foreground py-2 px-4 rounded-full font-medium hover:bg-muted transition-colors text-center"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recommendations */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-center text-primary mb-8">You Might Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1594032986687-30f0a89fbb49?auto=format&fit=crop&w=400&q=80" 
                    alt="Evening Dress"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Evening Dress</h3>
                    <span className="text-primary font-bold">₹12,999</span>
                  </div>
                </div>
                
                <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=400&q=80" 
                    alt="Formal Shirt"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Formal Shirt</h3>
                    <span className="text-primary font-bold">₹3,499</span>
                  </div>
                </div>
                
                <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" 
                    alt="Casual Jacket"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Casual Jacket</h3>
                    <span className="text-primary font-bold">₹5,999</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
