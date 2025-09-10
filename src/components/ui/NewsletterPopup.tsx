'use client';

import { useState, useEffect } from 'react';
import { X, Mail } from 'lucide-react';

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Show popup after 10 seconds if user hasn't closed it and hasn't subscribed
    const hasSeenPopup = localStorage.getItem('newsletter-popup-seen');
    const hasSubscribed = localStorage.getItem('newsletter-subscribed');
    
    if (!hasSeenPopup && !hasSubscribed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('newsletter-popup-seen', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      localStorage.setItem('newsletter-subscribed', 'true');
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-background rounded-lg shadow-xl max-w-md mx-4 p-6 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 hover:bg-secondary rounded"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        {!isSubmitted ? (
          <div className="text-center">
            <div className="mb-4">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Stay in Style
              </h3>
              <p className="text-muted-foreground">
                Get exclusive access to new collections, special offers, and style tips from Stitches.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe Now
              </button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our privacy policy. Unsubscribe at any time.
            </p>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="mb-4">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Welcome to Stitches!
              </h3>
              <p className="text-muted-foreground">
                Thank you for subscribing. You'll receive our latest updates and exclusive offers.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
