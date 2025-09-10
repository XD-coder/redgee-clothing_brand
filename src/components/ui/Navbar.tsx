'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-background border-b border-border text-foreground sticky top-0 z-50 w-full">
      {/* Top Row */}
      <div className="flex items-center justify-between px-4 md:px-8 py-2">
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>

        {/* Search - Hidden on mobile */}
        <form className="hidden md:flex items-center gap-2 w-1/3 min-w-[180px]" role="search">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="text-muted-foreground"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="search" placeholder="Search" className="bg-background border-b border-border outline-none px-2 py-1 w-full text-foreground placeholder:text-muted-foreground" />
        </form>

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center gap-1">
          <img src="/logo/logo.webp" alt="Stitches Logo" className="h-12 w-12 mx-auto" />
          <span className="text-xl font-bold tracking-tight">Stitches</span>
        </Link>

        {/* Account & Cart */}
        <div className="flex items-center gap-6 w-1/3 justify-end">
          {/* Mobile search icon */}
          <button className="md:hidden p-2 text-foreground hover:bg-secondary rounded-md">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>

          <Link href="/account" className="flex items-center gap-1 hover:text-primary">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-3.314 3.134-6 7-6s7 2.686 7 6"/></svg>
            <span className="hidden md:inline">Account</span>
          </Link>
          <Link href="/cart" className="flex items-center gap-1 hover:text-primary">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span className="hidden md:inline">Cart</span>
          </Link>
        </div>
      </div>

      {/* Bottom Row - Desktop Navigation */}
      <div className="hidden md:flex justify-center items-center gap-8 py-3 border-t border-border bg-background text-lg font-medium">
        <Link href="/shop?category=womens" className="hover:text-primary">Women</Link>
        <Link href="/shop?category=mens" className="hover:text-primary">Men</Link>
        <Link href="/collections" className="hover:text-primary">Home & Outdoor</Link>
        <Link href="/collections" className="hover:text-primary">Jewelry & Watches</Link>
        <Link href="/collections" className="hover:text-primary">Fragrances</Link>
        <Link href="/collections" className="hover:text-primary">Gifts</Link>
        <Link href="/collections" className="hover:text-primary">Special Editions</Link>
        <span className="mx-2 text-border">|</span>
        <Link href="/about" className="hover:text-primary">About</Link>
        <Link href="/docs" className="hover:text-primary">Docs</Link>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background">
          <div className="flex flex-col h-full">
            {/* Mobile menu header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <Link href="/" className="flex items-center gap-2">
                <img src="/logo/logo.webp" alt="Stitches Logo" className="h-8 w-8" />
                <span className="text-lg font-bold">Stitches</span>
              </Link>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-foreground hover:bg-secondary"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Mobile search */}
            <div className="p-4 border-b border-border">
              <form className="relative">
                <input
                  type="search"
                  placeholder="Search for products..."
                  className="w-full px-4 py-3 pl-10 pr-4 bg-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                />
                <svg className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </form>
            </div>

            {/* Mobile navigation links */}
            <div className="flex-1 px-4 py-6 space-y-6">
              <Link
                href="/shop?category=womens"
                onClick={toggleMenu}
                className="block text-xl font-medium text-foreground hover:text-primary transition-colors"
              >
                Women
              </Link>
              <Link
                href="/shop?category=mens"
                onClick={toggleMenu}
                className="block text-xl font-medium text-foreground hover:text-primary transition-colors"
              >
                Men
              </Link>
              <Link
                href="/collections"
                onClick={toggleMenu}
                className="block text-xl font-medium text-foreground hover:text-primary transition-colors"
              >
                Collections
              </Link>
              <Link
                href="/about"
                onClick={toggleMenu}
                className="block text-xl font-medium text-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="block text-xl font-medium text-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/docs"
                onClick={toggleMenu}
                className="block text-xl font-medium text-foreground hover:text-primary transition-colors"
              >
                Documentation
              </Link>
            </div>

            {/* Mobile menu footer */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-4">
                <Link
                  href="/account"
                  onClick={toggleMenu}
                  className="flex items-center space-x-2 text-foreground hover:text-primary"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M4 20c0-3.314 3.134-6 7-6s7 2.686 7 6"/>
                  </svg>
                  <span>Account</span>
                </Link>
                <Link
                  href="/cart"
                  onClick={toggleMenu}
                  className="flex items-center space-x-2 text-foreground hover:text-primary"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                  <span>Cart</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
