import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  // High fidelity default fallback dataset mock to protect matching lookups
  const sampleProduct = {
    id: id || 1,
    name: 'Premium Raw Organic Kibble Meal Set',
    price: 45.00,
    oldPrice: 55.00,
    sku: 'PET-KIB-0921',
    category: 'Dog Food',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600',
    description: 'Formulated directly with non-GMO proteins, real vegetables, and enriched functional lipids ensuring complete gut-flora stability and vibrant muscle building indices.'
  };

  return (
    <div className="animate-fadeIn py-12 max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-xs text-brand-muted mb-6">
        <Link to="/" className="hover:text-brand-primary">Home</Link> &gt; <Link to="/shop" className="hover:text-brand-primary">Shop</Link> &gt; {sampleProduct.name}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
        {/* Main Product Image Frame */}
        <div className="border border-brand-border bg-gray-50">
          <img src={sampleProduct.image} alt={sampleProduct.name} className="w-full object-cover" />
        </div>

        {/* Technical Buy Controls UI */}
        <div className="space-y-6">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-wider">{sampleProduct.category}</span>
          <h1 className="text-2xl md:text-3xl font-black text-brand-secondary">{sampleProduct.name}</h1>
          
          <div className="flex items-center gap-3 text-xl font-bold">
            {sampleProduct.oldPrice && <span className="text-sm text-brand-muted line-through font-normal">${sampleProduct.oldPrice.toFixed(2)}</span>}
            <span className="text-brand-primary">${sampleProduct.price.toFixed(2)}</span>
          </div>

          <p className="text-brand-muted text-xs leading-relaxed border-t border-b border-brand-border py-4">
            {sampleProduct.description}
          </p>

          <div className="flex gap-4 items-center pt-2">
            <div className="flex border border-brand-border items-center">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2 hover:bg-gray-100 text-sm font-bold">-</button>
              <span className="px-4 text-xs font-bold">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-3 py-2 hover:bg-gray-100 text-sm font-bold">+</button>
            </div>
            <button className="bg-brand-secondary text-white text-xs font-bold px-8 py-3.5 hover:bg-brand-primary transition uppercase tracking-wider">
              Add To Cart
            </button>
          </div>

          <div className="text-xs text-brand-muted space-y-1 pt-2">
            <p><span className="font-semibold text-brand-secondary">SKU:</span> {sampleProduct.sku}</p>
            <p><span className="font-semibold text-brand-secondary">Availability:</span> In Stock / Dispatch Within 24hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
}