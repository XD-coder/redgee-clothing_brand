import React from 'react';

export default function NotFoundPage() {
  return (
    <main className="bg-background text-foreground min-h-screen py-16 flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <a 
            href="/" 
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/80 transition-colors"
          >
            Go Home
          </a>
          <br />
          <a 
            href="/shop" 
            className="inline-block bg-background border border-border text-foreground px-8 py-3 rounded-full font-semibold hover:bg-muted transition-colors"
          >
            Browse Products
          </a>
        </div>
      </div>
    </main>
  );
}
