import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/shop', label: 'SHOP' },
    { path: '/blog', label: 'BLOG' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/contact', label: 'CONTACT US' },
  ];

  return (
    <header className="w-full bg-white relative z-50">
      
      {/* --- TOP ROW: INFO & SOCIALS --- */}
      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-xs">
        
        {/* Left Side: Email & Phone */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
          <div className="flex items-center gap-3">
            <div className="text-[#00b2ff] text-2xl">📬</div>
            <div>
              <p className="font-bold text-gray-900">Mail us:</p>
              <p className="text-gray-500">petty@support.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-[#00b2ff] text-2xl">📞</div>
            <div>
              <p className="font-bold text-gray-900">Call us:</p>
              <p className="text-gray-500">(+1) 345 678 000</p>
            </div>
          </div>
        </div>

        {/* Center Blank Space (Reserved for Logo alignment) */}
        <div className="hidden md:block"></div>

        {/* Right Side: Social Media & Account Links */}
        <div className="flex items-center justify-center md:justify-end gap-4">
          {/* Social Icons */}
          <div className="flex gap-1.5">
            <a href="#" className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#00b2ff] hover:text-white transition">f</a>
            <a href="#" className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#00b2ff] hover:text-white transition">t</a>
            <a href="#" className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#00b2ff] hover:text-white transition">in</a>
          </div>
          <div className="h-4 w-px bg-gray-300 mx-1"></div>
          {/* Account & Cart */}
          <a href="#" className="flex items-center gap-1.5 text-gray-700 hover:text-[#00b2ff]">
            <span>👤</span> Account
          </a>
          <a href="#" className="flex items-center gap-1.5 text-gray-700 hover:text-[#00b2ff] ml-2">
            <span>🛒</span> Cart
          </a>
        </div>
      </div>

      {/* --- MIDDLE FLOATING LOGO OVERLAY --- */}
      <div className="absolute left-1/2 top-4 transform -translate-x-1/2 z-20 text-center hidden md:block">
        <div className="bg-white px-8 pb-4 pt-2 rounded-b-full shadow-sm border-b border-x border-gray-100 flex flex-col items-center">
          {/* Paw Style Logo Icon */}
          <div className="w-10 h-10 text-3xl mb-1 filter hue-rotate-[50deg]">🐾</div>
          <span className="text-2xl font-bold text-gray-800 tracking-tight block">Petty</span>
        </div>
      </div>

      {/* --- BOTTOM ROW: BLUE NAV BAR --- */}
      <nav className="bg-[#00b2ff] w-full shadow-md relative">
        <div className="max-w-7xl mx-auto px-4 flex justify-between md:justify-center items-center h-14">
          
          {/* Mobile View Mobile Logo & Toggle */}
          <div className="md:hidden flex items-center justify-between w-full">
            <span className="text-white font-bold text-lg tracking-wider">PETTY</span>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
              ☰
            </button>
          </div>

          {/* Desktop Links (Centered Layout around the logo) */}
          <div className="hidden md:flex items-center gap-10 font-bold text-sm tracking-wider text-white">
            {navLinks.slice(0, 3).map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className={({ isActive }) => `hover:opacity-80 pb-1 border-b-2 ${isActive ? 'border-white' : 'border-transparent'}`}
              >
                {link.label}
              </NavLink>
            ))}
            
            {/* Invisible spacing block to keep layout balanced around center absolute logo */}
            <div className="w-28"></div>

            {navLinks.slice(3).map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className={({ isActive }) => `hover:opacity-80 pb-1 border-b-2 ${isActive ? 'border-white' : 'border-transparent'}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#00a2e6] border-t border-sky-400">
            <div className="flex flex-col p-4 space-y-3 font-semibold text-sm text-white">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:bg-sky-500 p-2 rounded"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}