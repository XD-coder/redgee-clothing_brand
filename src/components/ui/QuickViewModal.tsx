'use client';

import { useState } from 'react';
import { X, Star, ShoppingBag, Heart } from 'lucide-react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  images: string[];
  colors: string[];
  sizes: string[];
  description: string;
}

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Added to cart:', { product, selectedColor, selectedSize, quantity });
  };

  const handleAddToWishlist = () => {
    // Add to wishlist logic
    console.log('Added to wishlist:', product);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-background rounded-lg shadow-xl max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex">
          {/* Product Images */}
          <div className="w-1/2 p-6">
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-0 right-0 z-10 p-2 bg-background rounded-full shadow-md hover:bg-secondary"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="aspect-square mb-4">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Image thumbnails */}
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 rounded border-2 overflow-hidden ${
                      selectedImage === index ? 'border-primary' : 'border-border'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-1/2 p-6">
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground">{product.name}</h2>
                <div className="flex items-center space-x-2 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < product.rating ? 'text-yellow-400 fill-current' : 'text-border'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-primary">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground">{product.description}</p>

              {/* Color Selection */}
              <div>
                <h4 className="font-medium text-foreground mb-2">Color</h4>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color ? 'border-primary' : 'border-border'
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h4 className="font-medium text-foreground mb-2">Size</h4>
                <div className="flex space-x-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-2 border rounded ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-background text-foreground hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h4 className="font-medium text-foreground mb-2">Quantity</h4>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded border border-border flex items-center justify-center hover:border-primary"
                  >
                    -
                  </button>
                  <span className="font-medium text-foreground">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded border border-border flex items-center justify-center hover:border-primary"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-primary text-primary-foreground py-3 rounded font-medium hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                
                <button
                  onClick={handleAddToWishlist}
                  className="w-full border border-border text-foreground py-3 rounded font-medium hover:border-primary hover:text-primary transition-colors flex items-center justify-center space-x-2"
                >
                  <Heart className="h-5 w-5" />
                  <span>Add to Wishlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
