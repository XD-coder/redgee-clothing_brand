import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border text-foreground py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo/logo.webp" alt="Stitches Logo" className="h-8 w-8 rounded-full" />
              <span className="text-2xl font-bold">Stitches</span>
            </div>
            <p className="text-muted-foreground">
              Premium clothing crafted with excellence. Every thread tells a story.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.482-1.995.699 0 1.037.524 1.037 1.219 0 .737-.469 1.839-.711 2.861-.202.861.432 1.567 1.282 1.567 1.54 0 2.719-1.681 2.719-3.739 0-1.541-.554-2.703-1.442-2.703-.314 0-.663.219-.663.524 0 .524.219 1.087.219 1.087-.663.314-1.442-.105-1.442-1.087 0-2.042 1.578-3.5 4.061-3.5 2.13 0 3.772 1.52 3.772 3.561 0 2.13-1.337 3.772-3.193 3.772-.625 0-1.213-.314-1.417-.699 0 0-.314 1.196-.385 1.48-.14.524-.524 1.175-.777 1.578C10.302 23.63 11.137 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Shop</h3>
            <ul className="space-y-2">
              <li><a href="/shop" className="text-muted-foreground hover:text-primary transition-colors">All Products</a></li>
              <li><a href="/collections" className="text-muted-foreground hover:text-primary transition-colors">Collections</a></li>
              <li><a href="/shop?category=new" className="text-muted-foreground hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="/shop?category=sale" className="text-muted-foreground hover:text-primary transition-colors">Sale</a></li>
            </ul>
          </div>

          {/* Customer Care Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Care</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="/contact?subject=sizing" className="text-muted-foreground hover:text-primary transition-colors">Size Guide</a></li>
              <li><a href="/contact?subject=returns" className="text-muted-foreground hover:text-primary transition-colors">Returns</a></li>
              <li><a href="/contact?subject=shipping" className="text-muted-foreground hover:text-primary transition-colors">Shipping Info</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/docs" className="text-muted-foreground hover:text-primary transition-colors">Project Info</a></li>
              <li><a href="/contact?subject=careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="/contact?subject=press" className="text-muted-foreground hover:text-primary transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © 2025 Stitches. All rights reserved. Made by Kartikey Mishra.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
