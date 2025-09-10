"use client";
import React, { useState } from 'react';

const product = {
  id: 1,
  name: 'Legacy Suit',
  price: 8999,
  images: [
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80'
  ],
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: ['Black', 'Navy', 'Charcoal'],
  description: 'Classic tailoring meets modern sophistication. Crafted from premium wool blend with impeccable attention to detail.',
  features: [
    'Premium wool blend fabric',
    'Hand-finished details',
    'Slim fit silhouette',
    'Dry clean only',
    'Made in Italy'
  ],
  reviews: [
    { name: 'Aarav K.', rating: 5, text: 'Perfect fit and exceptional quality. Worth every penny!' },
    { name: 'Priya S.', rating: 5, text: 'Elegant design and comfortable to wear. Highly recommended.' }
  ]
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    // Add to cart logic
    alert('Added to cart!');
  };

  return (
    <main className="bg-background text-foreground min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImage === idx ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img src={image} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">{product.name}</h1>
            <p className="text-3xl font-bold text-primary">₹{product.price.toLocaleString()}</p>
          </div>

          <p className="text-lg text-muted-foreground">{product.description}</p>

          {/* Size Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Size</h3>
            <div className="grid grid-cols-5 gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-4 border rounded-lg font-medium transition-colors ${
                    selectedSize === size 
                      ? 'bg-primary text-primary-foreground border-primary' 
                      : 'border-border hover:border-primary'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Color</h3>
            <div className="flex gap-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`py-2 px-4 border rounded-lg font-medium transition-colors ${
                    selectedColor === color 
                      ? 'bg-primary text-primary-foreground border-primary' 
                      : 'border-border hover:border-primary'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quantity</h3>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-border rounded-lg hover:bg-muted"
              >
                -
              </button>
              <span className="text-lg font-medium w-8 text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-border rounded-lg hover:bg-muted"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-primary text-primary-foreground py-3 px-6 rounded-full font-semibold hover:bg-primary/80 transition-colors"
            >
              Add to Cart
            </button>
            <button className="bg-background border border-border text-foreground py-3 px-6 rounded-full font-semibold hover:bg-muted transition-colors">
              Add to Wishlist
            </button>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Customer Reviews</h3>
            <div className="space-y-4">
              {product.reviews.map((review, idx) => (
                <div key={idx} className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium">{review.name}</span>
                    <div className="flex text-yellow-500">
                      {'★'.repeat(review.rating)}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
