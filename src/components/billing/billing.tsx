'use client';
import React, { useState, useEffect } from 'react';

// --- TYPE DEFINITIONS ---
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface ServiceOption {
  cost: number;
  title: string;
  description: string;
}

interface ServicesState {
  premiumPackaging: { selected: boolean };
  onTimeDelivery: { selected: boolean };
}

interface CustomerInfo {
  name: string;
  email: string;
  contact: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
}

// Defining a type for the Razorpay response to avoid 'any'
interface RazorpaySuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayErrorResponse {
  error: {
    code: string;
    description: string;
    source: string;
    step: string;
    reason: string;
  };
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image: string;
  handler: (response: RazorpaySuccessResponse) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
}

// Declaring the global Razorpay object
declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
      on: (event: string, handler: (response: RazorpayErrorResponse) => void) => void;
    };
  }
}

// --- CONSTANTS ---
const CONSTANTS = {
  PRODUCTS: [
    { id: 1, name: "The Stitches Classic T-Shirt", price: 1500, quantity: 1, image: "https://placehold.co/150x150/d3d3d3/000000?text=T-Shirt" },
    { id: 2, name: "Essential Denim Jacket", price: 4200, quantity: 1, image: "https://placehold.co/150x150/d3d3d3/000000?text=Jacket" },
    { id: 3, name: "Premium Casual Sneakers", price: 3000, quantity: 1, image: "https://placehold.co/150x150/d3d3d3/000000?text=Sneakers" }
  ] as Product[],
  SHIPPING_COST: 250,
  SERVICES: {
    premiumPackaging: { cost: 200, title: "Premium Packaging", description: "Give your order an elegant touch." },
    onTimeDelivery: { cost: 300, title: "On-time Delivery", description: "Choose your preferred delivery slot." }
  } as { [key: string]: ServiceOption },
  RAZORPAY_KEY: "rzp_test_YOUR_KEY_ID"
};

// --- RAZORPAY HELPER FUNCTIONS ---
const loadRazorpayScript = (): void => {
  const script = document.createElement('script');
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  script.async = true;
  document.body.appendChild(script);
};

const handleMockPayment = (total: number, customerDetails: CustomerInfo): void => {
  if (typeof window.Razorpay === 'undefined') {
    console.error("Razorpay script not loaded.");
    return;
  }

  const options: RazorpayOptions = {
    key: CONSTANTS.RAZORPAY_KEY,
    amount: total * 100, // Amount in paise
    currency: "INR",
    name: "Stitches",
    description: "Order for Premium Clothing",
    image: "https://placehold.co/100x100/A8A8A8/ffffff?text=S",
    handler: (response: RazorpaySuccessResponse) => {
      console.log("Payment successful:", response);
    },
    prefill: {
      name: customerDetails.name,
      email: customerDetails.email,
      contact: customerDetails.contact,
    },
    theme: {
      color: "#2B2B2B"
    }
  };

  const rzp1 = new window.Razorpay(options);
  rzp1.on('payment.failed', (response: RazorpayErrorResponse) => {
    console.error("Payment failed:", response.error);
  });
  rzp1.open();
};

// --- UI COMPONENTS ---
const StepIndicator: React.FC<{ step: number; title: string; current: boolean }> = ({ step, title, current }) => (
  <div className={`flex items-center space-x-2`}>
  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${current ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
      {step}
    </div>
  <span className={`hidden sm:inline text-sm font-medium ${current ? 'text-foreground' : 'text-muted-foreground'}`}>{title}</span>
  </div>
);

const OrderItemList: React.FC<{ cartItems: Product[] }> = ({ cartItems }) => (
  <div className="space-y-6">
    {cartItems.map((item) => (
      <div key={item.id} className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg shadow-sm" />
        </div>
        <div className="flex-grow">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
          <p className="font-bold text-foreground mt-1">₹{item.price}</p>
        </div>
      </div>
    ))}
  </div>
);

const CostBreakdown: React.FC<{ subtotal: number; services: ServicesState; shipping: number; total: number }> = ({ subtotal, services, shipping, total }) => (
  <div className="mt-8 pt-6 border-t border-border">
    <div className="flex justify-between items-center mb-2">
  <span className="text-lg font-medium text-muted-foreground">Subtotal</span>
  <span className="text-lg font-medium text-foreground">₹{subtotal}</span>
    </div>
    {services.premiumPackaging.selected && (
      <div className="flex justify-between items-center mb-2">
  <span className="text-lg font-medium text-muted-foreground">{CONSTANTS.SERVICES.premiumPackaging.title}</span>
  <span className="text-lg font-medium text-foreground">₹{CONSTANTS.SERVICES.premiumPackaging.cost}</span>
      </div>
    )}
    {services.onTimeDelivery.selected && (
      <div className="flex justify-between items-center mb-2">
  <span className="text-lg font-medium text-muted-foreground">{CONSTANTS.SERVICES.onTimeDelivery.title}</span>
  <span className="text-lg font-medium text-foreground">₹{CONSTANTS.SERVICES.onTimeDelivery.cost}</span>
      </div>
    )}
    <div className="flex justify-between items-center mb-4">
  <span className="text-lg font-medium text-muted-foreground">Shipping</span>
  <span className="text-lg font-medium text-foreground">₹{shipping}</span>
    </div>
  <div className="flex justify-between items-center text-xl font-bold text-foreground border-t pt-4 mt-4">
      <span>Total</span>
      <span>₹{total}</span>
    </div>
  </div>
);

const ServicesSelection: React.FC<{ services: ServicesState; onServiceChange: (serviceName: 'premiumPackaging' | 'onTimeDelivery') => void }> = ({ services, onServiceChange }) => (
  <div className="pb-6">
  <h2 className="text-2xl font-semibold text-foreground mb-6 border-b pb-4 border-border">Choose Additional Services</h2>
    <div className="space-y-6">
      {(Object.entries(CONSTANTS.SERVICES) as [keyof ServicesState, ServiceOption][]).map(([key, service]) => (
  <div key={key} className="flex justify-between items-center p-4 bg-muted rounded-lg border border-border">
          <div>
            <h3 className="font-bold">{service.title}</h3>
            <p className="text-sm text-muted-foreground">{service.description} (+₹{service.cost})</p>
          </div>
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-black rounded-full"
            checked={services[key].selected}
            onChange={() => onServiceChange(key)}
          />
        </div>
      ))}
    </div>
  </div>
);

const ContactForm: React.FC<{ customerInfo: CustomerInfo; onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ customerInfo, onInputChange }) => (
  <div className="pb-6">
  <h2 className="text-2xl font-semibold text-foreground mb-6 border-b pb-4 border-border">Shipping & Contact Info</h2>
    <div className="space-y-5">
      <div>
  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={customerInfo.name}
          onChange={onInputChange}
          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all bg-muted"
        />
      </div>
      <div>
  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={customerInfo.email}
          onChange={onInputChange}
          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all bg-muted"
        />
      </div>
      <div>
  <label htmlFor="contact" className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
        <input
          type="tel"
          id="contact"
          name="contact"
          value={customerInfo.contact}
          onChange={onInputChange}
          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all bg-muted"
        />
      </div>
      <div>
  <label htmlFor="addressLine1" className="block text-sm font-medium text-foreground mb-1">Address Line 1*</label>
        <input
          type="text"
          id="addressLine1"
          name="addressLine1"
          value={customerInfo.addressLine1}
          onChange={onInputChange}
          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all bg-muted"
        />
      </div>
      <div>
  <label htmlFor="addressLine2" className="block text-sm font-medium text-foreground mb-1">Address Line 2 (optional)</label>
        <input
          type="text"
          id="addressLine2"
          name="addressLine2"
          value={customerInfo.addressLine2}
          onChange={onInputChange}
          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all bg-muted"
        />
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label htmlFor="city" className="block text-sm font-medium text-foreground mb-1">City*</label>
          <input
            type="text"
            id="city"
            name="city"
            value={customerInfo.city}
            onChange={onInputChange}
            className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all bg-muted"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="state" className="block text-sm font-medium text-foreground mb-1">State*</label>
          <input
            type="text"
            id="state"
            name="state"
            value={customerInfo.state}
            onChange={onInputChange}
            className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all bg-muted"
          />
        </div>
      </div>
      <div>
  <label htmlFor="pincode" className="block text-sm font-medium text-foreground mb-1">Pincode*</label>
        <input
          type="text"
          id="pincode"
          name="pincode"
          value={customerInfo.pincode}
          onChange={onInputChange}
          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all bg-muted"
        />
      </div>
    </div>
  </div>
);

const OrderReview: React.FC<{ services: ServicesState; customerInfo: CustomerInfo }> = ({ services, customerInfo }) => (
  <div className="pb-6">
  <h2 className="text-2xl font-semibold text-foreground mb-6 border-b pb-4 border-border">Review Your Order</h2>
    <div className="space-y-6">
      <div>
        <h3 className="font-bold text-lg mb-2">Selected Services</h3>
  {services.premiumPackaging.selected && <p className="text-sm text-muted-foreground"> - {CONSTANTS.SERVICES.premiumPackaging.title}</p>}
  {services.onTimeDelivery.selected && <p className="text-sm text-muted-foreground"> - {CONSTANTS.SERVICES.onTimeDelivery.title}</p>}
  {!services.premiumPackaging.selected && !services.onTimeDelivery.selected && <p className="text-sm text-muted-foreground">No additional services selected.</p>}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">Shipping To</h3>
  <p className="text-sm text-muted-foreground">{customerInfo.name}</p>
  <p className="text-sm text-muted-foreground">{customerInfo.addressLine1}</p>
  {customerInfo.addressLine2 && <p className="text-sm text-muted-foreground">{customerInfo.addressLine2}</p>}
  <p className="text-sm text-muted-foreground">{customerInfo.city}, {customerInfo.state} - {customerInfo.pincode}</p>
  <p className="text-sm text-muted-foreground mt-2">Contact: {customerInfo.contact}</p>
      </div>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---
const App: React.FC = () => {
  useEffect(() => {
    loadRazorpayScript();
  }, []);

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [services, setServices] = useState<ServicesState>({
    premiumPackaging: { selected: false },
    onTimeDelivery: { selected: false }
  });
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    contact: '9876543210',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: ''
  });

  const subtotal: number = CONSTANTS.PRODUCTS.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const servicesCost: number = (services.premiumPackaging.selected ? CONSTANTS.SERVICES.premiumPackaging.cost : 0) +
                               (services.onTimeDelivery.selected ? CONSTANTS.SERVICES.onTimeDelivery.cost : 0);
  const total: number = subtotal + servicesCost + CONSTANTS.SHIPPING_COST;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCustomerInfo(prevInfo => ({ ...prevInfo, [name]: value }));
  };

  const handleServiceChange = (serviceName: 'premiumPackaging' | 'onTimeDelivery'): void => {
    setServices(prevServices => ({
      ...prevServices,
      [serviceName]: { ...prevServices[serviceName], selected: !prevServices[serviceName].selected }
    }));
  };

  const handleNextStep = (): void => {
    if (currentStep === 2) {
      if (!customerInfo.addressLine1 || !customerInfo.city || !customerInfo.state || !customerInfo.pincode) {
        console.error("Please fill in all required address fields.");
        return;
      }
    }
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = (): void => {
    setCurrentStep(currentStep - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <ServicesSelection services={services} onServiceChange={handleServiceChange} />;
      case 2:
        return <ContactForm customerInfo={customerInfo} onInputChange={handleInputChange} />;
      case 3:
        return <OrderReview services={services} customerInfo={customerInfo} />;
      default:
        return null;
    }
  };

  return (
  <div className="min-h-screen bg-background font-sans text-foreground antialiased p-4 sm:p-8 flex justify-center items-center">
  <div className="w-full max-w-4xl bg-card rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        {/* Order Summary Side Panel */}
  <div className="lg:w-1/2 p-6 sm:p-10 bg-muted flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="mr-2 text-gray-700"><path d="M228.43,219.57l-15.17-21.78a28.09,28.09,0,0,0-23.72-12.79H66.46a28.09,28.09,0,0,0-23.72,12.79L27.57,219.57a8,8,0,0,0,13.23,9.26L56,198.81V216a8,8,0,0,0,16,0V192h112v24a8,8,0,0,0,16,0V198.81l15.2,29.92a8,8,0,0,0,13.23-9.26ZM195.54,176a12,12,0,0,1,10.16,5.48L216,188.79V144a8,8,0,0,0-16,0v24a8,8,0,0,1-8,8ZM188,40a28,28,0,0,0-56,0V56h-8V40a28,28,0,0,0-56,0V56H40V128a8,8,0,0,0,16,0V88h32v40a8,8,0,0,0,16,0V88h32v40a8,8,0,0,0,16,0V88h32v40a8,8,0,0,0,16,0V56h-8ZM92,40a12,12,0,0,1,24,0V56H92ZM188,56H164V40a12,12,0,0,1,24,0Z"></path></svg>
              <h1 className="text-3xl font-bold">Stitches</h1>
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-6 border-b pb-4 border-border">Order Summary</h2>
            <OrderItemList cartItems={CONSTANTS.PRODUCTS} />
          </div>
          <CostBreakdown subtotal={subtotal} services={services} shipping={CONSTANTS.SHIPPING_COST} total={total} />
        </div>

        {/* Dynamic Content and Navigation */}
  <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between">
          <div className="pb-6">
            {/* Step Indicators */}
            <div className="flex justify-around mb-8">
              <StepIndicator step={1} title="Services" current={currentStep === 1} />
              <div className="h-0.5 w-12 bg-border self-center transition-all duration-300"></div>
              <StepIndicator step={2} title="Details" current={currentStep === 2} />
              <div className="h-0.5 w-12 bg-border self-center transition-all duration-300"></div>
              <StepIndicator step={3} title="Review" current={currentStep === 3} />
            </div>
            {/* Conditional Content Rendering */}
            {renderStepContent()}
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 pt-6 border-t border-border flex justify-between">
            {currentStep > 1 && (
              <button
                onClick={handlePreviousStep}
                className="px-6 py-3 bg-muted text-muted-foreground text-lg font-bold rounded-full hover:bg-muted/80 transition-colors"
              >
                Back
              </button>
            )}
            {currentStep < 3 ? (
              <button
                onClick={handleNextStep}
                className="px-6 py-3 bg-primary text-primary-foreground text-lg font-bold rounded-full shadow-lg hover:bg-primary/80 transition-colors transform hover:-translate-y-1 ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => handleMockPayment(total, customerInfo)}
                className="px-6 py-3 bg-black text-white text-lg font-bold rounded-full shadow-lg hover:bg-gray-800 transition-colors transform hover:-translate-y-1 ml-auto"
              >
                Pay with Razorpay
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
