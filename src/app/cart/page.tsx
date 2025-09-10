"use client";
import React, { useState } from 'react';

const initialCartItems = [
  {
    id: 1,
    name: 'Legacy Suit',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=300&q=80',
    price: 8999,
    size: 'M',
    color: 'Black',
    quantity: 1
  },
  {
    id: 2,
    name: 'Metropolitan Blazer',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=300&q=80',
    price: 6499,
    size: 'L',
    color: 'Navy',
    quantity: 2
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 500;
  const total = subtotal + shipping;

  return (
    <main className="bg-background text-foreground min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary mb-10">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl text-muted-foreground mb-4">Your cart is empty</h2>
            <a href="/shop" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/80 transition-colors">
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="bg-card p-6 rounded-2xl shadow-lg">
                  <div className="flex gap-4">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                      <p className="text-muted-foreground mb-2">Size: {item.size} | Color: {item.color}</p>
                      <p className="text-lg font-bold text-primary">₹{item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 border border-border rounded hover:bg-muted"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-border rounded hover:bg-muted"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:underline text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-card p-6 rounded-2xl shadow-lg h-fit">
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹{shipping}</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-primary">₹{total.toLocaleString()}</span>
                  </div>
                </div>
                <a 
                  href="/checkout"
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-full font-semibold hover:bg-primary/80 transition-colors block text-center mt-6"
                >
                  Proceed to Checkout
                </a>
                <a 
                  href="/shop"
                  className="w-full bg-background border border-border text-foreground py-3 px-6 rounded-full font-semibold hover:bg-muted transition-colors block text-center"
                >
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
