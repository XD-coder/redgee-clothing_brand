'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Code2, Palette, Globe, Smartphone, Zap, Shield, Search, Users } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({ title, icon, children, defaultOpen = false }: SectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-border rounded-lg mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary transition-colors"
      >
        <div className="flex items-center space-x-3">
          {icon}
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
        {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
      </button>
      {isOpen && (
        <div className="p-4 pt-0 border-t border-border">
          {children}
        </div>
      )}
    </div>
  );
}

export default function DocsPage() {
  return (
    <main className="bg-background text-foreground min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">Stitches</h1>
            <p className="text-xl text-muted-foreground mb-2">Premium Clothing Brand E-commerce Platform</p>
            <p className="text-lg text-foreground mb-6">
              Complete Project Documentation & Technical Overview
            </p>
            <div className="bg-secondary rounded-lg p-4 inline-block">
              <p className="text-sm text-muted-foreground">
                Created by <span className="font-semibold text-primary">Kartikey Mishra</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Contact: <a href="mailto:kartikay.m1210@gmail.com" className="text-primary hover:underline">kartikay.m1210@gmail.com</a>
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Project Overview */}
        <ScrollReveal>
          <CollapsibleSection
            title="Project Overview"
            icon={<Globe className="h-6 w-6 text-primary" />}
            defaultOpen={true}
          >
            <div className="space-y-4">
              <p className="text-foreground">
                Stitches is a comprehensive e-commerce platform designed for a premium clothing brand. 
                Built with modern web technologies, it delivers a luxury shopping experience comparable 
                to high-end fashion brands like Hermès.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Complete e-commerce functionality</li>
                    <li>Premium Hermès-inspired design</li>
                    <li>Mobile-first responsive layout</li>
                    <li>Advanced search and filtering</li>
                    <li>User account management</li>
                    <li>Shopping cart and checkout</li>
                    <li>Wishlist functionality</li>
                    <li>Product collections showcase</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Target Audience</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Luxury fashion enthusiasts</li>
                    <li>Premium clothing shoppers</li>
                    <li>Style-conscious consumers</li>
                    <li>Quality-focused buyers</li>
                  </ul>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </ScrollReveal>

        {/* Technical Architecture */}
        <ScrollReveal>
          <CollapsibleSection
            title="Technical Architecture"
            icon={<Code2 className="h-6 w-6 text-primary" />}
          >
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Core Technologies</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Frontend Framework</h5>
                    <p className="text-sm text-muted-foreground">Next.js 15 with App Router</p>
                    <p className="text-sm text-muted-foreground">React 19 with TypeScript</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Styling</h5>
                    <p className="text-sm text-muted-foreground">Tailwind CSS v4</p>
                    <p className="text-sm text-muted-foreground">Custom OKLCH color system</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Animation</h5>
                    <p className="text-sm text-muted-foreground">Framer Motion</p>
                    <p className="text-sm text-muted-foreground">CSS transitions</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Project Structure</h4>
                <div className="bg-secondary rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-muted-foreground">{`src/
├── app/                    # Next.js 15 App Router
│   ├── about/             # About page
│   ├── account/           # User account dashboard
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout process
│   ├── collections/       # Product collections
│   ├── contact/           # Contact page
│   ├── docs/              # Documentation (this page)
│   ├── product/[id]/      # Dynamic product pages
│   ├── shop/              # Product catalog
│   ├── wishlist/          # User wishlist
│   ├── globals.css        # Global styles & Tailwind config
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # SEO robots.txt
│   └── sitemap.ts         # SEO sitemap
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   └── [feature]/         # Feature-specific components
├── lib/                   # Utility functions
│   ├── analytics.ts       # Analytics & tracking
│   ├── seo.ts            # SEO utilities
│   └── utils.ts          # General utilities
└── public/               # Static assets`}</pre>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </ScrollReveal>

        {/* Pages & Features */}
        <ScrollReveal>
          <CollapsibleSection
            title="Pages & Features"
            icon={<Smartphone className="h-6 w-6 text-primary" />}
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Core Pages</h4>
                  <div className="space-y-3">
                    <div className="bg-secondary rounded-lg p-3">
                      <h5 className="font-medium text-foreground">Homepage (/)</h5>
                      <p className="text-sm text-muted-foreground">Hero section, featured products, testimonials, newsletter signup</p>
                    </div>
                    <div className="bg-secondary rounded-lg p-3">
                      <h5 className="font-medium text-foreground">Shop (/shop)</h5>
                      <p className="text-sm text-muted-foreground">Product catalog with filtering, search, and category navigation</p>
                    </div>
                    <div className="bg-secondary rounded-lg p-3">
                      <h5 className="font-medium text-foreground">Product Details (/product/[id])</h5>
                      <p className="text-sm text-muted-foreground">Image gallery, size/color selection, reviews, add to cart</p>
                    </div>
                    <div className="bg-secondary rounded-lg p-3">
                      <h5 className="font-medium text-foreground">Shopping Cart (/cart)</h5>
                      <p className="text-sm text-muted-foreground">Item management, quantity updates, order summary</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">User Features</h4>
                  <div className="space-y-3">
                    <div className="bg-secondary rounded-lg p-3">
                      <h5 className="font-medium text-foreground">Account (/account)</h5>
                      <p className="text-sm text-muted-foreground">Profile, order history, wishlist, addresses</p>
                    </div>
                    <div className="bg-secondary rounded-lg p-3">
                      <h5 className="font-medium text-foreground">Checkout (/checkout)</h5>
                      <p className="text-sm text-muted-foreground">Multi-step checkout with shipping, payment, review</p>
                    </div>
                    <div className="bg-secondary rounded-lg p-3">
                      <h5 className="font-medium text-foreground">Wishlist (/wishlist)</h5>
                      <p className="text-sm text-muted-foreground">Save favorite items, manage preferences</p>
                    </div>
                    <div className="bg-secondary rounded-lg p-3">
                      <h5 className="font-medium text-foreground">Collections (/collections)</h5>
                      <p className="text-sm text-muted-foreground">Curated product showcases and categories</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Advanced Features</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-secondary rounded-lg p-3">
                    <h5 className="font-medium text-foreground mb-2">Global Search</h5>
                    <p className="text-sm text-muted-foreground">Modal search with product, category, and page results</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-3">
                    <h5 className="font-medium text-foreground mb-2">Quick View</h5>
                    <p className="text-sm text-muted-foreground">Product preview modal without page navigation</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-3">
                    <h5 className="font-medium text-foreground mb-2">Newsletter Popup</h5>
                    <p className="text-sm text-muted-foreground">Timed subscription popup with local storage</p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </ScrollReveal>

        {/* Design System */}
        <ScrollReveal>
          <CollapsibleSection
            title="Design System"
            icon={<Palette className="h-6 w-6 text-primary" />}
          >
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Color Palette</h4>
                <p className="text-muted-foreground mb-4">Custom OKLCH color system defined in globals.css:</p>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-background border border-border rounded-lg p-3">
                    <div className="w-full h-8 bg-background border border-border rounded mb-2"></div>
                    <p className="text-sm font-medium">Background</p>
                    <p className="text-xs text-muted-foreground">oklch(100% 0 0)</p>
                  </div>
                  <div className="bg-primary rounded-lg p-3">
                    <div className="w-full h-8 bg-primary rounded mb-2"></div>
                    <p className="text-sm font-medium text-primary-foreground">Primary</p>
                    <p className="text-xs text-primary-foreground opacity-70">oklch(25% 0 0)</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-3">
                    <div className="w-full h-8 bg-secondary rounded mb-2"></div>
                    <p className="text-sm font-medium">Secondary</p>
                    <p className="text-xs text-muted-foreground">oklch(96% 0 0)</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <div className="w-full h-8 bg-muted rounded mb-2"></div>
                    <p className="text-sm font-medium">Muted</p>
                    <p className="text-xs text-muted-foreground">oklch(96% 0 0)</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Typography</h4>
                <div className="bg-secondary rounded-lg p-4 space-y-3">
                  <div>
                    <h5 className="text-2xl font-bold text-foreground">Geist Sans - Primary Font</h5>
                    <p className="text-muted-foreground">Used for headings, body text, and UI elements</p>
                  </div>
                  <div>
                    <h5 className="text-lg font-mono text-foreground">Geist Mono - Code Font</h5>
                    <p className="text-muted-foreground">Used for code blocks and technical content</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Design Principles</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Luxury Aesthetic</h5>
                    <p className="text-sm text-muted-foreground">Clean lines, minimal design, premium feel inspired by Hermès</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Accessibility First</h5>
                    <p className="text-sm text-muted-foreground">WCAG compliant with proper contrast ratios and keyboard navigation</p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </ScrollReveal>

        {/* Performance & SEO */}
        <ScrollReveal>
          <CollapsibleSection
            title="Performance & SEO"
            icon={<Zap className="h-6 w-6 text-primary" />}
          >
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Performance Optimizations</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Image Optimization</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Next.js automatic image optimization</li>
                      <li>• WebP format with fallbacks</li>
                      <li>• Lazy loading implementation</li>
                      <li>• Responsive image sizing</li>
                    </ul>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Code Splitting</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Route-based code splitting</li>
                      <li>• Dynamic imports for large components</li>
                      <li>• Tree shaking for unused code</li>
                      <li>• Bundle size optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">SEO Implementation</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Meta Tags</h5>
                    <p className="text-sm text-muted-foreground">Dynamic titles, descriptions, and Open Graph tags</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Sitemap</h5>
                    <p className="text-sm text-muted-foreground">Automatically generated XML sitemap for search engines</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Structured Data</h5>
                    <p className="text-sm text-muted-foreground">Schema markup for products and organization</p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </ScrollReveal>

        {/* Mobile Experience */}
        <ScrollReveal>
          <CollapsibleSection
            title="Mobile Experience"
            icon={<Smartphone className="h-6 w-6 text-primary" />}
          >
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Mobile-First Design</h4>
                <p className="text-muted-foreground mb-4">
                  Built with mobile users as the primary focus, then enhanced for tablet and desktop experiences.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Navigation</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Hamburger menu with full-screen overlay</li>
                      <li>• Touch-friendly button sizes</li>
                      <li>• Swipe gestures for product galleries</li>
                      <li>• Mobile search functionality</li>
                    </ul>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Shopping Experience</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• One-handed cart management</li>
                      <li>• Mobile-optimized checkout flow</li>
                      <li>• Touch-friendly size/color selectors</li>
                      <li>• Mobile payment integration ready</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Responsive Breakpoints</h4>
                <div className="bg-secondary rounded-lg p-4 font-mono text-sm">
                  <div className="space-y-2 text-muted-foreground">
                    <div>• Mobile: &lt; 768px (Primary focus)</div>
                    <div>• Tablet: 768px - 1024px</div>
                    <div>• Desktop: &gt; 1024px</div>
                    <div>• Large Desktop: &gt; 1440px</div>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </ScrollReveal>

        {/* Security & Best Practices */}
        <ScrollReveal>
          <CollapsibleSection
            title="Security & Best Practices"
            icon={<Shield className="h-6 w-6 text-primary" />}
          >
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Security Measures</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Frontend Security</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Content Security Policy headers</li>
                      <li>• XSS protection implementation</li>
                      <li>• Secure environment variable handling</li>
                      <li>• HTTPS enforcement ready</li>
                    </ul>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Data Protection</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Local storage encryption ready</li>
                      <li>• Input validation and sanitization</li>
                      <li>• GDPR compliance considerations</li>
                      <li>• Privacy policy integration</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Code Quality</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">TypeScript</h5>
                    <p className="text-sm text-muted-foreground">Strict mode enabled for complete type safety</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">ESLint</h5>
                    <p className="text-sm text-muted-foreground">Next.js recommended rules with custom configurations</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Error Handling</h5>
                    <p className="text-sm text-muted-foreground">Comprehensive error boundaries and logging</p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </ScrollReveal>

        {/* Analytics & Monitoring */}
        <ScrollReveal>
          <CollapsibleSection
            title="Analytics & Monitoring"
            icon={<Search className="h-6 w-6 text-primary" />}
          >
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Analytics Implementation</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Google Analytics 4</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Page view tracking</li>
                      <li>• E-commerce event tracking</li>
                      <li>• User interaction monitoring</li>
                      <li>• Conversion funnel analysis</li>
                    </ul>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Performance Monitoring</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Core Web Vitals tracking</li>
                      <li>• Load time measurement</li>
                      <li>• Error rate monitoring</li>
                      <li>• User experience metrics</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">E-commerce Tracking</h4>
                <div className="bg-secondary rounded-lg p-4">
                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <h6 className="font-medium text-foreground mb-1">Purchase Events</h6>
                      <p className="text-muted-foreground">Transaction tracking with item details</p>
                    </div>
                    <div>
                      <h6 className="font-medium text-foreground mb-1">Add to Cart</h6>
                      <p className="text-muted-foreground">Product addition tracking</p>
                    </div>
                    <div>
                      <h6 className="font-medium text-foreground mb-1">View Item</h6>
                      <p className="text-muted-foreground">Product page visits</p>
                    </div>
                    <div>
                      <h6 className="font-medium text-foreground mb-1">Search Events</h6>
                      <p className="text-muted-foreground">User search behavior</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </ScrollReveal>

        {/* Future Enhancements */}
        <ScrollReveal>
          <CollapsibleSection
            title="Future Enhancements"
            icon={<Users className="h-6 w-6 text-primary" />}
          >
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Planned Features</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Backend Integration</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Database integration (PostgreSQL)</li>
                      <li>• User authentication system</li>
                      <li>• Payment processing (Stripe)</li>
                      <li>• Order management system</li>
                      <li>• Inventory tracking</li>
                    </ul>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Advanced Features</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• AI-powered product recommendations</li>
                      <li>• Virtual try-on technology</li>
                      <li>• Live chat customer support</li>
                      <li>• Multi-language support (i18n)</li>
                      <li>• Progressive Web App (PWA)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Technical Improvements</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Performance</h5>
                    <p className="text-sm text-muted-foreground">Further optimization with caching strategies and CDN integration</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Testing</h5>
                    <p className="text-sm text-muted-foreground">Unit, integration, and E2E testing implementation</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">DevOps</h5>
                    <p className="text-sm text-muted-foreground">CI/CD pipeline setup and automated deployments</p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </ScrollReveal>

        {/* Getting Started */}
        <ScrollReveal>
          <div className="bg-primary rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">Ready to Explore?</h3>
            <p className="text-primary-foreground/80 mb-6">
              Experience the complete luxury shopping platform and see all features in action.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/"
                className="bg-background text-primary px-6 py-3 rounded-lg font-medium hover:bg-background/90 transition-colors"
              >
                View Homepage
              </a>
              <a
                href="/shop"
                className="border border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                Browse Shop
              </a>
              <a
                href="/collections"
                className="border border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                View Collections
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal>
          <div className="text-center mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              This documentation provides a comprehensive overview of the Stitches e-commerce platform.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              For technical support or questions, contact{' '}
              <a href="mailto:kartikay.m1210@gmail.com" className="text-primary hover:underline">
                kartikay.m1210@gmail.com
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
