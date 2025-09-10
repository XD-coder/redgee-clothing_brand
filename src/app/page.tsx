'use client';

import React from 'react';
import HomeHero from '../components/HomeHero';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import NewsletterSignup from '../components/NewsletterSignup';
import NewsletterPopup from '../components/ui/NewsletterPopup';
import FadeIn from '../components/ui/FadeIn';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function HomePage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <FadeIn>
        <HomeHero />
      </FadeIn>
      
      <ScrollReveal>
        <FeaturedProducts />
      </ScrollReveal>
      
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      
      <ScrollReveal>
        <NewsletterSignup />
      </ScrollReveal>

      <NewsletterPopup />
    </main>
  );
}