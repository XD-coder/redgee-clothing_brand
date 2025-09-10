'use client';
import React, { useState, useEffect } from 'react';

// --- Interfaces for Type Safety ---
// Define the props for the Hero component.
interface HeroProps {
  scrollY: number;
}

// Define the props for the NavBar component.
interface NavBarProps {
  isScrolled: boolean;
}

// --- Component Definitions (Modular Structure within a Single File) ---

/**
 * Renders the hero section with the main title and descriptive text.
 * The title's position and the text's opacity are dynamically calculated
 * based on the user's scroll position.
 */
const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  // A threshold for the title's vertical movement.
  const scrollThreshold = typeof window !== 'undefined' ? window.innerHeight * 0.7 : 0;
  
  // Calculate the title's vertical translation and font size.
  // The Math.min ensures the title doesn't move past the threshold.
  const titleTransform = Math.min(scrollY / 1.5, scrollThreshold);
  // The Math.max ensures the font size doesn't shrink past a minimum value.
  const titleFontSize = Math.max(5 - (scrollY / 200), 1.5);
  
  const titleStyle = {
    transform: `translateY(${-titleTransform}px)`,
    fontSize: `${titleFontSize}rem`,
  };

  // Calculate the descriptive text's opacity. It fades out as the user scrolls.
  const textOpacity = Math.max(1 - (scrollY / 500), 0);
  const textStyle = {
    opacity: textOpacity,
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1542152288-693358055ee1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-neutral-900 bg-opacity-50"></div>
      <div className="z-10 relative will-change-transform">
        {/* The main title that animates and becomes the nav title */}
        <h1
          style={titleStyle}
          className="font-bold whitespace-nowrap will-change-transform transition-all duration-300 ease-out"
        >
          each stitch counts
        </h1>
        {/* The descriptive text that fades out on scroll */}
        <p
          style={textStyle}
          className="mt-4 text-xl md:text-2xl max-w-2xl px-4 mx-auto will-change-opacity transition-opacity duration-300 ease-in-out"
        >
          Where every detail is a testament to timeless craftsmanship and bespoke elegance. We are a premium clothing brand dedicated to creating garments that transcend trends and define style.
        </p>
      </div>
    </div>
  );
};

/**
 * Renders the fixed navigation bar at the top of the page.
 * It dynamically changes its background and shows/hides links based on
 * the user's scroll position.
 */
const NavBar: React.FC<NavBarProps> = ({ isScrolled }) => {
  // Determine the navigation bar's background color based on scroll state.
  const navBackgroundOpacity = isScrolled ? 1 : 0;
  const navBackgroundStyle = {
    backgroundColor: `rgba(26, 26, 26, ${navBackgroundOpacity})`,
  };

  return (
    <nav
      style={navBackgroundStyle}
      className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1
          className={`font-semibold transition-all duration-300 ease-in-out ${
            isScrolled ? 'text-2xl opacity-100' : 'text-transparent opacity-0'
          }`}
        >
          each stitch counts
        </h1>
        <div
          className={`flex items-center space-x-8 transition-opacity duration-300 ease-in-out ${
            isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <a href="#collections" className="text-stone-200 hover:text-stone-400 transition-colors">Collections</a>
          <a href="#about" className="text-stone-200 hover:text-stone-400 transition-colors">About</a>
          <a href="#contact" className="text-stone-200 hover:text-stone-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

/**
 * Renders the main content sections of the page.
 */
const Content: React.FC = () => {
  return (
    <div className="relative z-20 bg-neutral-900">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <section id="collections" className="mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12 border-b-2 border-stone-600 pb-4">Our Collections</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-stone-800 rounded-2xl p-6 shadow-xl">
              <img src="https://placehold.co/600x400/292524/A8A29E?text=The+Legacy+Collection" alt="Legacy Collection" className="w-full h-auto rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-2">The Legacy Collection</h3>
              <p>A tribute to classic tailoring and enduring style, featuring impeccably crafted suits and outerwear.  </p>
            </div>
            <div className="bg-stone-800 rounded-2xl p-6 shadow-xl">
              <img src="https://placehold.co/600x400/292524/A8A29E?text=The+Metropolitan+Series" alt="Metropolitan Series" className="w-full h-auto rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-2">The Metropolitan Series</h3>
              <p>Modern silhouettes and innovative fabrics designed for the urban professional. Effortless style for a dynamic life.  </p>
            </div>
          </div>
        </section>

        <section id="about" className="mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12 border-b-2 border-stone-600 pb-4">About Us</h2>
          <p className="text-xl leading-relaxed text-center max-w-3xl mx-auto">
            We believe in the power of quality. From our carefully selected fabrics to the hands of our skilled artisans, every step is a commitment to excellence. Our brand is a promise of clothing that tells a story—a story of dedication, precision, and an unwavering belief that each stitch counts.
          </p>
        </section>

        
      </div>
    </div>
  );
};

// --- Main App Component ---

/**
 * The main container component that handles scroll logic and renders
 * the other components.
 */
export default function App() {
  const [scrollY, setScrollY] = useState(0);

  // A threshold value to determine when the navigation bar becomes active.
  const scrollThreshold = typeof window !== 'undefined' ? window.innerHeight * 0.7 : 0;
  const isScrolled = scrollY > scrollThreshold;

  // Set up the scroll event listener.
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-neutral-900 min-h-screen text-stone-200 font-inter antialiased relative">
      <NavBar isScrolled={isScrolled} />
      <Hero scrollY={scrollY} />
      <Content />
    </div>
  );
}
