'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  type: 'product' | 'category' | 'page';
  url: string;
  image?: string;
  price?: string;
}

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search results - in a real app, this would be an API call
  const mockResults: SearchResult[] = [
    {
      id: '1',
      title: 'Cashmere Sweater',
      type: 'product',
      url: '/product/1',
      image: '/models/model-1.jpg',
      price: '$299'
    },
    {
      id: '2',
      title: 'Silk Dress',
      type: 'product',
      url: '/product/2',
      image: '/models/model-2.jpg',
      price: '$459'
    },
    {
      id: '3',
      title: "Women's Collection",
      type: 'category',
      url: '/shop?category=womens'
    },
    {
      id: '4',
      title: 'About Us',
      type: 'page',
      url: '/about'
    }
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.length > 0) {
      setIsLoading(true);
      // Simulate API delay
      const timer = setTimeout(() => {
        const filtered = mockResults.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-20">
      <div className="bg-background rounded-lg shadow-xl w-full max-w-2xl mx-4">
        {/* Search Input */}
        <div className="flex items-center p-4 border-b border-border">
          <Search className="h-5 w-5 text-muted-foreground mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for products, categories, or pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground"
          />
          <button
            onClick={onClose}
            className="p-1 hover:bg-secondary rounded"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-6 w-6 border-2 border-border border-t-primary"></div>
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              {results.map((result) => (
                <Link
                  key={result.id}
                  href={result.url}
                  onClick={onClose}
                  className="flex items-center px-4 py-3 hover:bg-secondary transition-colors"
                >
                  {result.image && (
                    <img
                      src={result.image}
                      alt={result.title}
                      className="w-12 h-12 object-cover rounded mr-3"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">{result.title}</h3>
                    <p className="text-sm text-muted-foreground capitalize">
                      {result.type}
                      {result.price && ` • ${result.price}`}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : query.length > 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No results found for &quot;{query}&quot;
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              Start typing to search...
            </div>
          )}
        </div>

        {/* Quick Links */}
        {query.length === 0 && (
          <div className="border-t border-border p-4">
            <h4 className="text-sm font-medium text-muted-foreground mb-3">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/shop?category=womens"
                onClick={onClose}
                className="text-sm text-foreground hover:text-primary"
              >
                Women's Collection
              </Link>
              <Link
                href="/shop?category=mens"
                onClick={onClose}
                className="text-sm text-foreground hover:text-primary"
              >
                Men's Collection
              </Link>
              <Link
                href="/collections"
                onClick={onClose}
                className="text-sm text-foreground hover:text-primary"
              >
                All Collections
              </Link>
              <Link
                href="/about"
                onClick={onClose}
                className="text-sm text-foreground hover:text-primary"
              >
                About Stitches
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
