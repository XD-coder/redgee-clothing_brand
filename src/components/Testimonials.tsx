'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Shield, CheckCircle, Users, Award, TrendingUp, Clock, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  image: string;
  rating: number;
  content: string;
  verified: boolean;
  purchaseDate: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Blogger",
    company: "Style Maven",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    content: "Absolutely love the quality and attention to detail in every piece. The sustainable approach to fashion is exactly what the industry needs. I've been wearing Stitches for 2 years now and the pieces still look brand new!",
    verified: true,
    purchaseDate: "2024-01-15",
    location: "New York, NY"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Creative Director",
    company: "Design Studio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    content: "The craftsmanship is exceptional. Each garment tells a story of thoughtful design and premium materials. My wardrobe has been completely transformed since discovering Stitches.",
    verified: true,
    purchaseDate: "2024-02-20",
    location: "San Francisco, CA"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    content: "Finally found a brand that aligns with my values without compromising on style. The customer service is outstanding, and the packaging is beautiful. Every purchase feels like a gift to myself.",
    verified: true,
    purchaseDate: "2024-03-10",
    location: "Austin, TX"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    content: "The versatility of the pieces is incredible. I can go from a business meeting to a casual dinner without missing a beat. The investment in quality really shows, and the timeless designs never go out of style.",
    verified: true,
    purchaseDate: "2024-01-28",
    location: "Seattle, WA"
  }
];

const stats = [
  { label: "Happy Customers", value: "50,000+", icon: Users, color: "text-muted-foreground" },
  { label: "Average Rating", value: "4.9★", icon: Award, color: "text-muted-foreground" },
  { label: "Satisfaction Rate", value: "99%", icon: TrendingUp, color: "text-muted-foreground" },
  { label: "Support Available", value: "24/7", icon: Clock, color: "text-muted-foreground" }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-primary fill-current' : 'text-border'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what fashion enthusiasts are saying about their Stitches experience.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-xl p-6 shadow-sm border border-border text-center"
              >
                <div className="flex justify-center mb-3">
                  <IconComponent className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="bg-background rounded-2xl shadow-xl border border-border overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="p-8 lg:p-12"
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  
                  {/* Customer Image & Verification */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className="relative inline-block">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-primary/20"
                      />
                      {testimonials[currentIndex].verified && (
                        <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-1">
                          <CheckCircle className="h-4 w-4 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1 text-center lg:text-left">
                    {/* Rating */}
                    <div className="flex justify-center lg:justify-start mb-4">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg lg:text-xl text-foreground mb-6 italic">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    {/* Customer Info */}
                    <div className="space-y-2">
                      <div>
                        <h4 className="font-semibold text-foreground text-lg">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-muted-foreground">
                          {testimonials[currentIndex].role}
                          {testimonials[currentIndex].company && (
                            <span> at {testimonials[currentIndex].company}</span>
                          )}
                        </p>
                      </div>
                      
                      {/* Verification Badge */}
                      <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Shield className="h-4 w-4 text-primary/70" />
                          <span>Verified Purchase</span>
                        </div>
                        <div>{testimonials[currentIndex].location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background shadow-lg border border-border rounded-full p-3 hover:bg-secondary transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background shadow-lg border border-border rounded-full p-3 hover:bg-secondary transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-border hover:bg-muted-foreground'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {isAutoPlaying ? (
              <>
                <Pause className="h-4 w-4" />
                <span>Pause Auto-advance</span>
              </>
            ) : (
              <>
                <Play className="h-4 w-4" />
                <span>Play Auto-advance</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}