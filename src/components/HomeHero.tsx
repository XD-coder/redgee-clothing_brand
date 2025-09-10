"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';

export default function HomeHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background via-secondary/5 to-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 right-32 w-48 h-48 bg-primary/5 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [-20, 20, -20],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 left-10 w-16 h-16 bg-primary/20 rounded-full blur-lg"
        />
      </div>

      {/* Logo */}
      <motion.img 
        src="/logo/logo.webp" 
        alt="Stitches Logo" 
        className="absolute left-8 top-8 h-24 w-24 opacity-80 pointer-events-none select-none z-20" 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Hero Content */}
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Premium Collection 2025</span>
          </div>
        </motion.div>

        <motion.h1 
          className="text-6xl lg:text-8xl font-extrabold text-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            Stitches
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Elevate your style with premium, sustainable clothing. Discover timeless designs, 
          luxury fabrics, and a shopping experience crafted for the modern fashion enthusiast.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link 
            href="/shop" 
            className="group inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span>Shop Collection</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/about" 
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full border-2 border-border text-foreground font-semibold text-lg hover:bg-secondary transition-all duration-300 hover:scale-105"
          >
            <span>Our Story</span>
          </Link>
        </motion.div>

        {/* Statistics */}
        <motion.div 
          className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">50K+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <span className="text-3xl font-bold text-primary">4.9</span>
              <Star className="h-6 w-6 text-primary fill-current" />
            </div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Sustainable</div>
          </div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40 pointer-events-none" />
    </section>
  );
}
