"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, ShoppingBag, Eye } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Legacy Suit',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
    price: '₹8,999',
    originalPrice: '₹12,999',
    description: 'Classic tailoring, premium wool blend.',
    rating: 4.9,
    reviews: 234,
    badge: 'Bestseller',
    inStock: true
  },
  {
    id: 2,
    name: 'Metropolitan Blazer',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80',
    price: '₹6,499',
    originalPrice: '₹8,999',
    description: 'Modern fit, sustainable fabric.',
    rating: 4.8,
    reviews: 189,
    badge: 'Eco-Friendly',
    inStock: true
  },
  {
    id: 3,
    name: 'Casual Luxe Shirt',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    price: '₹2,499',
    originalPrice: '₹3,499',
    description: 'Soft cotton, timeless style.',
    rating: 4.7,
    reviews: 156,
    badge: 'New',
    inStock: true
  },
];

export default function FeaturedProducts() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium pieces, crafted with exceptional attention to detail
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              {/* Product Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    product.badge === 'Bestseller' ? 'bg-red-100 text-red-800' :
                    product.badge === 'Eco-Friendly' ? 'bg-green-100 text-green-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
              >
                <Heart 
                  className={`h-5 w-5 ${
                    favorites.includes(product.id) 
                      ? 'text-red-500 fill-current' 
                      : 'text-gray-600'
                  }`} 
                />
              </button>

              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Quick Actions */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-2">
                    <Link href={`/product/${product.id}`}>
                      <button className="p-3 bg-white rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300">
                        <Eye className="h-5 w-5" />
                      </button>
                    </Link>
                    <button className="p-3 bg-white rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300">
                      <ShoppingBag className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-primary fill-current" />
                    <span className="text-sm font-medium text-foreground">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                  
                  <div className={`text-xs font-medium ${
                    product.inStock ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </div>
                </div>

                <Link href={`/product/${product.id}`}>
                  <button className="w-full mt-4 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'View Details' : 'Notify When Available'}
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/shop">
            <button className="inline-flex items-center space-x-2 px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
              <span>View All Products</span>
              <ShoppingBag className="h-5 w-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
