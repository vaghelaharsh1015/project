import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-secondary text-stone-300 pt-16 pb-8 border-t-4 border-brand-primary">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Brand Block */}
        <div className="space-y-4">
          <Link to="/" className="text-2xl font-black tracking-wider text-white">
            PET<span className="text-brand-primary">SHOP</span>
          </Link>
          <p className="text-xs leading-relaxed text-stone-400">
            Premium products curated carefully for your loving domestic partners. High manufacturing transparency and sustainability standards.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-stone-700 pb-2">Quick Links</h4>
          <ul className="space-y-2 text-xs">
            <li><Link to="/about" className="hover:text-brand-primary transition">About Us</Link></li>
            <li><Link to="/shop" className="hover:text-brand-primary transition">Shop Collections</Link></li>
            <li><Link to="/blog" className="hover:text-brand-primary transition">Latest News</Link></li>
            <li><Link to="/contact" className="hover:text-brand-primary transition">Contact Support</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-stone-700 pb-2">Customer Care</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-brand-primary transition">Track Orders</a></li>
            <li><a href="#" className="hover:text-brand-primary transition">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-brand-primary transition">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-brand-primary transition">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-stone-700 pb-2">Contact</h4>
          <ul className="space-y-3 text-xs text-stone-400">
            <li className="flex gap-2">
              <span className="text-brand-primary font-bold">Add:</span> 121 King Street, Melbourne, Australia
            </li>
            <li className="flex gap-2">
              <span className="text-brand-primary font-bold">Mail:</span> info@petshopdomain.com
            </li>
            <li className="flex gap-2">
              <span className="text-brand-primary font-bold">Phone:</span> (+1) 234 567 890
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
        <p>&copy; {new Date().getFullYear()} PetShop Template. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-brand-primary">Privacy</a>
          <a href="#" className="hover:text-brand-primary">Terms</a>
        </div>
      </div>
    </footer>
  );
}