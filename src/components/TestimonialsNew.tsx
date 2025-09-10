'use client';

import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
  image: string;
  product: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Aarav Sharma',
    role: 'Fashion Influencer',
    location: 'Mumbai, India',
    text: 'Stitches delivers true luxury with every piece. The craftsmanship is exceptional, and the fit is absolutely perfect. I get compliments every time I wear their suits!',
    rating: 5,
    image: '/models/model-1.jpg',
    product: 'Premium Wool Suit',
    verified: true
  },
  {
    id: 2,
    name: 'Priya Menon',
    role: 'Creative Director',
    location: 'Bangalore, India',
    text: 'The attention to detail is incredible. Sustainable, stylish, and so comfortable. Stitches has become my go-to brand for both professional and casual wear.',
    rating: 5,
    image: '/models/model-2.jpg',
    product: 'Silk Evening Dress',
    verified: true
  },
  {
    id: 3,
    name: 'Rahul Tandon',
    role: 'Entrepreneur',
    location: 'Delhi, India',
    text: 'Outstanding customer service and quality that exceeded my expectations. The premium materials and modern designs make every piece feel like a luxury investment.',
    rating: 5,
    image: '/models/model-3.jpg',
    product: 'Cashmere Sweater',
    verified: true
  },
  {
    id: 4,
    name: 'Ananya Kapoor',
    role: 'Corporate Executive',
    location: 'Chennai, India',
    text: 'Stitches understands modern professional wear. Their pieces are elegant, comfortable, and make me feel confident in every meeting and event.',
    rating: 5,
    image: '/models/model-4.jpg',
    product: 'Power Blazer Collection',
    verified: true
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Loved by Fashion 
              <span className="text-primary"> Enthusiasts</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover why thousands of customers choose Stitches for their premium clothing needs
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary rounded-2xl p-8 lg:p-12 shadow-lg"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Quote className="h-8 w-8 text-primary" />
                    <div className="flex">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed font-medium">
                    "{currentTestimonial.text}"
                  </blockquote>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold text-lg">
                          {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground flex items-center space-x-2">
                          <span>{currentTestimonial.name}</span>
                          {currentTestimonial.verified && (
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </h4>
                        <p className="text-muted-foreground">{currentTestimonial.role}</p>
                        <p className="text-sm text-muted-foreground">{currentTestimonial.location}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 px-4 py-2 bg-primary/5 rounded-lg inline-block">
                      <p className="text-sm text-primary font-medium">
                        Purchased: {currentTestimonial.product}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                    <Quote className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background border border-border rounded-full hover:bg-secondary transition-colors shadow-lg"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background border border-border rounded-full hover:bg-secondary transition-colors shadow-lg"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>
        </div>

        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-border hover:bg-muted-foreground'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">4.9★</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
