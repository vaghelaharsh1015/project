import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      {/* --- GET 50% OFFER WAVY BANNER (GLOBALLY SHARED) --- */}
      <section className="bg-[#00b2ff] text-white pt-10 pb-12 relative overflow-hidden">
        {/* Top Wave Divider Mask Layout */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[25px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,4.75,55.05,12.72,83.1,19.34,143.21,33.55,203.11,43.08,321.39,56.44Z"></path>
          </svg>
        </div>

        {/* Content Container Grid */}
        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 mt-4">
          {/* Offer Title Text */}
          <h2 className="text-white text-2xl md:text-3xl font-extrabold tracking-wide uppercase text-center md:text-left">
            Get 50% offer for all pet products
          </h2>
          {/* Dotted Border Coupon Code Container Box */}
          <div className="border-2 border-dashed border-white/60 bg-white/10 px-8 py-3 rounded-full text-xs font-bold tracking-widest text-white uppercase whitespace-nowrap shadow-xs">
            Coupon Code : <span className="text-yellow-200 font-black">Petty1234</span>
          </div>
        </div>
      </section>

      <footer className="bg-[#1f1f1f] text-gray-400 text-xs py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
        
        {/* --- COLUMN 1: BRAND & CONTACT --- */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {/* Green Paw Logo Icon Overlay */}
            <span className="text-[#8cc63f] text-2xl filter hue-rotate-[50deg]">🐾</span>
            <span className="text-white font-bold text-xl tracking-wide">Petty</span>
          </div>
          <p className="leading-relaxed text-gray-400">
            It is a long established fact that a reader distracted by the readable content
          </p>
          <ul className="space-y-2.5 pt-2 text-[11px]">
            <li className="flex items-center gap-2.5">
              <span className="text-gray-500 text-sm">📍</span>
              <span>No: 801, petty shop, Australia.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-gray-500 text-sm">✉️</span>
              <a href="mailto:pettyshop@mail.com" className="hover:text-[#8cc63f] transition">pettyshop@mail.com</a>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-gray-500 text-sm">📞</span>
              <a href="tel:+239008990000" className="hover:text-[#8cc63f] transition">(+23) 900 8990 000</a>
            </li>
          </ul>
        </div>

        {/* --- COLUMN 2: INFORMATION LINKS --- */}
        <div>
          <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Information</h4>
          <ul className="space-y-3 font-medium">
            {[
              { label: 'Pet Adoption', path: '/' },
              { label: 'Active Dogs', path: '/shop' },
              { label: 'Pet Daycare', path: '/' },
              { label: 'Dog Training', path: '/' },
              { label: 'Pet Helpcare', path: '/contact' }
            ].map((link, idx) => (
              <li key={idx} className="flex items-center group">
                <span className="text-gray-600 text-[10px] mr-2 transition-transform group-hover:translate-x-1 group-hover:text-[#8cc63f]">&gt;</span>
                <Link to={link.path} className="hover:text-[#8cc63f] transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --- COLUMN 3: INSTAGRAM GRID (6 PICTURES EXACTLY LIKE IMAGE) --- */}
        <div>
          <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Instagram</h4>
          <div className="grid grid-cols-3 gap-1.5 max-w-[200px]">
            <img src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=100" className="w-full aspect-square object-cover" alt="Insta 1" />
            <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100" className="w-full aspect-square object-cover" alt="Insta 2" />
            <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=100" className="w-full aspect-square object-cover" alt="Insta 3" />
            <img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=100" className="w-full aspect-square object-cover" alt="Insta 4" />
            <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=100" className="w-full aspect-square object-cover" alt="Insta 5" />
            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=100" className="w-full aspect-square object-cover" alt="Insta 6" />
          </div>
        </div>

        {/* --- COLUMN 4: CAPSULE NEWSLETTER --- */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-wider">Newsletter</h4>
          <p className="leading-relaxed text-gray-400">
            It is a long established fact that a by the readable content
          </p>
          
          {/* Rounded Input Bar Container Style */}
          <form className="flex items-center bg-white rounded-full p-1 max-w-[260px] shadow-sm mt-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full pl-4 pr-2 py-1.5 bg-transparent text-gray-800 text-xs italic focus:outline-none placeholder-gray-400" 
              required 
            />
            <button type="submit" className="bg-[#8cc63f] hover:bg-[#7db335] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold transition shrink-0 cursor-pointer shadow-xs">
              ➔
            </button>
          </form>
        </div>

      </div>
      </footer>
    </>
  );
}