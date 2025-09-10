"use client";
import React, { useState } from 'react';

const steps = ['Shipping', 'Payment', 'Review'];

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    paymentMethod: 'card'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    alert('Order placed successfully!');
  };

  const cartTotal = 15998;

  return (
    <main className="bg-background text-foreground min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary mb-10">Checkout</h1>
        
        {/* Step Indicator */}
        <div className="flex justify-center mb-10">
          {steps.map((step, idx) => (
            <div key={step} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                idx <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                {idx + 1}
              </div>
              <span className={`ml-2 font-medium ${idx <= currentStep ? 'text-foreground' : 'text-muted-foreground'}`}>
                {step}
              </span>
              {idx < steps.length - 1 && <div className="w-16 h-px bg-border mx-4" />}
            </div>
          ))}
        </div>

        <div className="bg-card p-8 rounded-2xl shadow-lg">
          {/* Shipping Step */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-border rounded-lg bg-background"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-border rounded-lg bg-background"
                  required
                />
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-border rounded-lg bg-background"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-border rounded-lg bg-background"
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-border rounded-lg bg-background md:col-span-2"
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-border rounded-lg bg-background"
                  required
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-border rounded-lg bg-background"
                  required
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-border rounded-lg bg-background"
                  required
                />
              </div>
            </div>
          )}

          {/* Payment Step */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Payment Method</h2>
              <div className="space-y-4">
                <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleInputChange}
                    className="text-primary"
                  />
                  <span>Credit/Debit Card</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleInputChange}
                    className="text-primary"
                  />
                  <span>UPI</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                    className="text-primary"
                  />
                  <span>Cash on Delivery</span>
                </label>
              </div>
            </div>
          )}

          {/* Review Step */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Order Review</h2>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Shipping Address</h3>
                <p>{formData.firstName} {formData.lastName}</p>
                <p>{formData.address}</p>
                <p>{formData.city}, {formData.state} {formData.pincode}</p>
                <p>{formData.email} | {formData.phone}</p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Payment Method</h3>
                <p className="capitalize">{formData.paymentMethod === 'card' ? 'Credit/Debit Card' : formData.paymentMethod.toUpperCase()}</p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Order Total</h3>
                <div className="flex justify-between text-xl font-bold">
                  <span>Total Amount</span>
                  <span className="text-primary">₹{cartTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {currentStep > 0 && (
              <button
                onClick={prevStep}
                className="bg-background border border-border text-foreground py-3 px-6 rounded-full font-semibold hover:bg-muted transition-colors"
              >
                Previous
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button
                onClick={nextStep}
                className="bg-primary text-primary-foreground py-3 px-6 rounded-full font-semibold hover:bg-primary/80 transition-colors ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-primary text-primary-foreground py-3 px-6 rounded-full font-semibold hover:bg-primary/80 transition-colors ml-auto"
              >
                Place Order
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
