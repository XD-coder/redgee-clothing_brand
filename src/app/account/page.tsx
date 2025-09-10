"use client";
import React, { useState } from 'react';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'orders', label: 'Orders' },
    { id: 'wishlist', label: 'Wishlist' },
    { id: 'addresses', label: 'Addresses' }
  ];

  const orders = [
    {
      id: 'ORD-001',
      date: '2025-09-05',
      total: 8999,
      status: 'Delivered',
      items: ['Legacy Suit']
    },
    {
      id: 'ORD-002',
      date: '2025-09-01',
      total: 6499,
      status: 'Shipped',
      items: ['Metropolitan Blazer']
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: 'Casual Luxe Shirt',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80',
      price: 2499
    }
  ];

  return (
    <main className="bg-background text-foreground min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary mb-10">My Account</h1>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-muted rounded-full p-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-card p-8 rounded-2xl shadow-lg">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Profile Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full p-3 border border-border rounded-lg bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full p-3 border border-border rounded-lg bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="john.doe@email.com"
                    className="w-full p-3 border border-border rounded-lg bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+91 9876543210"
                    className="w-full p-3 border border-border rounded-lg bg-background"
                  />
                </div>
              </div>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/80 transition-colors">
                Update Profile
              </button>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Order History</h2>
              <div className="space-y-4">
                {orders.map(order => (
                  <div key={order.id} className="bg-muted p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold">Order #{order.id}</h3>
                        <p className="text-muted-foreground">Placed on {order.date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === 'Delivered' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-2">{order.items.join(', ')}</p>
                    <p className="font-bold text-primary">₹{order.total.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Wishlist Tab */}
          {activeTab === 'wishlist' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">My Wishlist</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {wishlistItems.map(item => (
                  <div key={item.id} className="bg-muted p-4 rounded-lg">
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="font-semibold mb-2">{item.name}</h3>
                    <p className="text-primary font-bold mb-4">₹{item.price.toLocaleString()}</p>
                    <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/80 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Addresses Tab */}
          {activeTab === 'addresses' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Saved Addresses</h2>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Home</h3>
                <p>123 Main Street</p>
                <p>Mumbai, Maharashtra 400001</p>
                <div className="flex gap-4 mt-4">
                  <button className="text-primary hover:underline">Edit</button>
                  <button className="text-destructive hover:underline">Delete</button>
                </div>
              </div>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/80 transition-colors">
                Add New Address
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
