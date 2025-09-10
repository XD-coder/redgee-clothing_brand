import React from 'react';

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-primary mb-12">About Stitches</h1>
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Stitches, we believe that every thread tells a story, every fabric holds a memory, 
            and every garment represents a commitment to excellence.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-card p-8 rounded-2xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed mb-6">
            Founded in 2020, Stitches emerged from a simple yet powerful vision: to create clothing 
            that transcends trends and defines timeless elegance. Our journey began with a small team 
            of passionate designers and craftspeople who shared a common dream of revolutionizing the 
            fashion industry through sustainable practices and uncompromising quality.
          </p>
          <p className="text-lg leading-relaxed">
            Today, we stand as a testament to the power of dedication, innovation, and the belief that 
            premium clothing should be accessible to those who appreciate the finer things in life.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold text-primary mb-4">Quality Craftsmanship</h3>
            <p className="text-muted-foreground">
              Every piece is meticulously crafted by skilled artisans using traditional techniques 
              and the finest materials sourced from around the world.
            </p>
          </div>
          <div className="bg-card p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold text-primary mb-4">Sustainable Fashion</h3>
            <p className="text-muted-foreground">
              We are committed to ethical production practices and sustainable materials, 
              ensuring our impact on the environment is minimal.
            </p>
          </div>
          <div className="bg-card p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold text-primary mb-4">Timeless Design</h3>
            <p className="text-muted-foreground">
              Our designs focus on timeless elegance rather than fleeting trends, 
              creating pieces that remain stylish for years to come.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-card p-8 rounded-2xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-muted-foreground mb-2">Creative Director</p>
              <p className="text-sm">
                With over 15 years in fashion design, Sarah leads our creative vision 
                and ensures every piece meets our exacting standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-muted-foreground mb-2">Head of Production</p>
              <p className="text-sm">
                Michael oversees our sustainable production processes and maintains 
                our commitment to ethical manufacturing practices.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-primary p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Get in Touch</h2>
          <p className="text-primary-foreground/80 mb-6">
            Have questions about our products or story? We'd love to hear from you.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
