import React from 'react';

const collections = [
  {
    id: 1,
    name: 'The Legacy Collection',
    description: 'Timeless pieces that transcend seasons and trends.',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    itemCount: 12
  },
  {
    id: 2,
    name: 'Metropolitan Series',
    description: 'Modern urban wear for the contemporary professional.',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
    itemCount: 8
  },
  {
    id: 3,
    name: 'Weekend Essentials',
    description: 'Comfortable luxury for your leisure moments.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    itemCount: 15
  },
  {
    id: 4,
    name: 'Evening Elegance',
    description: 'Sophisticated pieces for special occasions.',
    image: 'https://images.unsplash.com/photo-1594032986687-30f0a89fbb49?auto=format&fit=crop&w=800&q=80',
    itemCount: 6
  }
];

export default function CollectionsPage() {
  return (
    <main className="bg-background text-foreground min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">Our Collections</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated collections, each telling its own story through 
            exceptional craftsmanship and timeless design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={collection.id} 
              className={`group cursor-pointer transition-transform hover:-translate-y-2 ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className={`w-full object-cover transition-transform group-hover:scale-105 ${
                    index === 0 ? 'h-96' : 'h-80'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <div className="mb-2">
                    <span className="text-sm font-medium bg-primary px-3 py-1 rounded-full">
                      {collection.itemCount} Items
                    </span>
                  </div>
                  <h2 className={`font-bold mb-3 ${index === 0 ? 'text-4xl' : 'text-2xl'}`}>
                    {collection.name}
                  </h2>
                  <p className={`text-white/90 ${index === 0 ? 'text-lg max-w-2xl' : 'text-base'}`}>
                    {collection.description}
                  </p>
                  <button className="mt-4 bg-white text-primary px-6 py-2 rounded-full font-semibold hover:bg-white/90 transition-colors">
                    Explore Collection
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products from Collections */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Featured from Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" 
                alt="Legacy Suit"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Legacy Suit</h3>
                <p className="text-muted-foreground mb-2">From The Legacy Collection</p>
                <span className="text-lg font-bold text-primary">₹8,999</span>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80" 
                alt="Metropolitan Blazer"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Metropolitan Blazer</h3>
                <p className="text-muted-foreground mb-2">From Metropolitan Series</p>
                <span className="text-lg font-bold text-primary">₹6,499</span>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" 
                alt="Weekend Shirt"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Weekend Shirt</h3>
                <p className="text-muted-foreground mb-2">From Weekend Essentials</p>
                <span className="text-lg font-bold text-primary">₹2,499</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-primary p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Discover Your Perfect Style
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Browse our complete collection and find pieces that speak to your unique sense of style.
          </p>
          <a 
            href="/shop" 
            className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Shop All Collections
          </a>
        </div>
      </div>
    </main>
  );
}
