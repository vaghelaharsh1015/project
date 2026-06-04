import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const catalogProducts = [
  { id: 1, name: 'Premium Raw Organic Kibble', price: 45.00, oldPrice: 55.00, category: 'Food', image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400', sale: true },
  { id: 2, name: 'Ergonomic Cozy Velvet Bed', price: 68.00, category: 'Beds', image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1df0?w=400', sale: false },
  { id: 3, name: 'Multi-Level Activity Cat Tree', price: 120.00, category: 'Toys', image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400', sale: false },
  { id: 4, name: 'Natural Rubber Chew Toy', price: 14.50, oldPrice: 19.00, category: 'Toys', image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400', sale: true },
  { id: 5, name: 'Stainless Steel Auto Water Fountain', price: 39.00, category: 'Bowls', image: 'https://images.unsplash.com/photo-1615087240969-eeff2fa558f2?w=400', sale: false },
  { id: 6, name: 'Adjustable Heavy-Duty Harness', price: 28.00, category: 'Gear', image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=400', sale: false },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Food', 'Beds', 'Toys', 'Bowls', 'Gear'];

  const filteredProducts = selectedCategory === 'All' 
    ? catalogProducts 
    : catalogProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="animate-fadeIn">
      <div className="bg-brand-accent py-12 border-b border-brand-border text-center">
        <h1 className="text-3xl font-black text-brand-secondary uppercase tracking-wider">Product Collections</h1>
        <p className="text-xs text-brand-muted mt-2">Home &gt; Shop</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="space-y-6">
          <div>
            <h3 className="font-bold text-brand-secondary uppercase text-sm tracking-wider mb-4 border-b border-brand-border pb-2">Categories</h3>
            <div className="flex flex-col space-y-2">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left text-sm py-1 transition-colors ${selectedCategory === cat ? 'text-brand-primary font-bold' : 'text-brand-muted hover:text-brand-primary'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid Area */}
        <main className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6 text-xs text-brand-muted">
            <p>Showing {filteredProducts.length} results</p>
            <select className="border border-brand-border p-1 focus:outline-none">
              <option>Default Sorting</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}