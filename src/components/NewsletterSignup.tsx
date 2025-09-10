'use client';

import React, { useState } from 'react';
import { Mail, Gift, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 5000);
  };

  const benefits = [
    {
      icon: <Gift className="h-5 w-5" />,
      text: 'Exclusive offers & early access'
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      text: 'New collection previews'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      text: 'Style tips & fashion insights'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Stay In <span className="text-primary">Style</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of fashion enthusiasts and be the first to know about our latest collections, 
            exclusive offers, and style inspiration.
          </p>
        </motion.div>

        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background rounded-2xl shadow-xl p-8 lg:p-12 border border-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 bg-secondary rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground text-lg"
                  required
                  disabled={isLoading}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full bg-primary text-primary-foreground py-4 px-8 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <span>Join the Style Community</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Benefits */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                What you'll get:
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/50"
                  >
                    <div className="text-primary">
                      {benefit.icon}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Privacy Note */}
            <p className="text-xs text-muted-foreground text-center mt-6">
              We respect your privacy. No spam, unsubscribe at any time. 
              <br />
              By subscribing, you agree to our{' '}
              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-2xl shadow-xl p-8 lg:p-12 border border-border text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Welcome to Stitches!
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Thank you for joining our style community. Check your inbox for a special welcome offer!
            </p>
            <div className="bg-secondary rounded-lg p-4 inline-block">
              <p className="text-sm text-primary font-medium flex items-center space-x-2">
                <Gift className="h-4 w-4 text-primary/70" />
                <span>Look out for your 15% off welcome code</span>
              </p>
            </div>
          </motion.div>
        )}

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="flex items-center justify-center space-x-8 text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm">Subscribers</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9★</div>
              <div className="text-sm">Rating</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Weekly</div>
              <div className="text-sm">Updates</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
