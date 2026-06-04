import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white text-center p-2 relative">
      <div className="relative aspect-square overflow-hidden bg-gray-50 border border-gray-100 mb-3">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        {product.sale && (
          <span className="absolute top-2 left-2 bg-[#00b2ff] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
            Sale!
          </span>
        )}
      </div>
      <h3 className="font-semibold text-gray-800 text-sm hover:text-[#8cc63f] transition">
        <Link to={`/shop/product/${product.id}`}>{product.name}</Link>
      </h3>
      <div className="mt-1">
        <span className="text-sm font-bold text-[#8cc63f]">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}