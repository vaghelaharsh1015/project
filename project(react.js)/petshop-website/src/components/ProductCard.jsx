import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white text-center relative overflow-hidden border border-gray-100 hover:shadow-lg transition duration-300">

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {product.sale && (
          <span className="absolute top-3 left-3 bg-[#00b2ff] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
            Sale
          </span>
        )}

        {/* Hover Icons */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-3">

          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#8cc63f] hover:bg-[#8cc63f] hover:text-white transition">
            <FaShoppingCart />
          </button>

          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#8cc63f] hover:bg-[#8cc63f] hover:text-white transition">
            <FaHeart />
          </button>

        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">

        <p className="text-xs uppercase text-gray-400 mb-1">
          {product.category}
        </p>

        <h3 className="font-semibold text-gray-800 text-sm mb-2 hover:text-[#8cc63f] transition">
          <Link to={`/shop/product/${product.id}`}>
            {product.name}
          </Link>
        </h3>

        <span className="text-lg font-bold text-[#8cc63f]">
          ${product.price.toFixed(2)}
        </span>

      </div>
    </div>
  );
}