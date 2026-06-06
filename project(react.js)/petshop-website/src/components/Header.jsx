import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaShoppingCart,
} from "react-icons/fa";

import {
  FiUser,
  FiMail,
  FiPhone,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) setActiveDropdown(null);
    else setActiveDropdown(menu);
  };

  return (
    <header className="relative z-50 bg-white">
      
      {/* --- DESKTOP TOP HEADER --- */}
      <div className="relative hidden lg:block border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-8 px-6">
          {/* Left Side */}
          <div className="flex gap-12">
            <div className="flex items-center gap-3">
              <FiMail className="text-sky-500 text-4xl" />
              <div>
                <h4 className="font-semibold text-black">Mail us:</h4>
                <p className="text-gray-500">petty@support.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-sky-500 text-4xl" />
              <div>
                <h4 className="font-semibold text-black">Call us:</h4>
                <p className="text-gray-500">(+1) 345 678 000</p>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 top-8 z-20">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://htmlbeans.com/html/petshop/images/logo.png"
                alt="logo"
                className="w-16 mb-1"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:bg-[#8cc63f] hover:text-white transition duration-300 flex items-center justify-center cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:bg-[#8cc63f] hover:text-white transition duration-300 flex items-center justify-center cursor-pointer">
                <FaTwitter />
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:bg-[#8cc63f] hover:text-white transition duration-300 flex items-center justify-center cursor-pointer">
                <FaLinkedinIn />
              </div>
            </div>
            <div className="flex items-center gap-6 ml-4">
              <div className="flex items-center gap-2 cursor-pointer font-semibold text-sm">
                <FiUser className="text-sky-500 text-lg" />
                <span>Account</span>
              </div>
              <Link to="/cart" className="flex items-center gap-2 cursor-pointer hover:text-[#8cc63f] transition font-semibold text-sm">
                <FaShoppingCart className="text-sky-500 text-lg" />
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- DESKTOP NAVBAR --- */}
      <nav className="bg-sky-500 h-[70px] relative hidden lg:block">
        {/* White Curve */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-44 h-24 bg-white rounded-b-full z-0"></div>

        <div className="max-w-6xl mx-auto h-full flex justify-center items-center gap-20 text-white uppercase font-bold tracking-wide relative z-10">
          <Link to="/" className="hover:text-[#8cc63f] transition duration-300">Home</Link>

          {/* Pages Dropdown */}
          <div className="relative group h-full flex items-center">
            <span className="hover:text-[#8cc63f] transition duration-300 cursor-pointer">Pages ▾</span>
            <div className="absolute left-0 top-full w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col capitalize font-semibold text-sm text-left">
              <Link to="/services" className="px-5 py-3 text-gray-700 hover:bg-[#8cc63f] hover:text-white transition-colors border-b border-gray-100">Services</Link>
              <Link to="/about" className="px-5 py-3 text-gray-700 hover:bg-[#8cc63f] hover:text-white transition-colors border-b border-gray-100">About Us</Link>
              <Link to="/gallery" className="px-5 py-3 text-gray-700 hover:bg-[#8cc63f] hover:text-white transition-colors">Gallery</Link>
            </div>
          </div>

          {/* Shop Dropdown */}
          <div className="relative group h-full flex items-center">
            <span className="hover:text-[#8cc63f] transition duration-300 cursor-pointer">Shop ▾</span>
            <div className="absolute left-0 top-full w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col capitalize font-semibold text-sm text-left">
              <Link to="/shop" className="px-5 py-3 text-gray-700 hover:bg-[#8cc63f] hover:text-white transition-colors border-b border-gray-100">Shop</Link>
              <Link to="/shop/product/1" className="px-5 py-3 text-gray-700 hover:bg-[#8cc63f] hover:text-white transition-colors border-b border-gray-100">Shop Detail</Link>
              <Link to="/cart" className="px-5 py-3 text-gray-700 hover:bg-[#8cc63f] hover:text-white transition-colors border-b border-gray-100">Cart</Link>
              <Link to="/checkout" className="px-5 py-3 text-gray-700 hover:bg-[#8cc63f] hover:text-white transition-colors">Checkout</Link>
            </div>
          </div>

          {/* Space for Logo */}
          <div className="w-52"></div>

          {/* Blog Dropdown */}
          <div className="relative group h-full flex items-center">
            <span className="hover:text-[#8cc63f] transition duration-300 cursor-pointer">Blog ▾</span>
            <div className="absolute left-0 top-full w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col capitalize font-semibold text-sm text-left">
              <Link to="/blog-standard" className="px-5 py-3 text-gray-700 hover:bg-[#8cc63f] hover:text-white transition-colors border-b border-gray-100">Blog Standard</Link>
              <Link to="/single-blog" className="px-5 py-3 text-gray-700 hover:bg-[#8cc63f] hover:text-white transition-colors border-b border-gray-100">Single Blog</Link>
            </div>
          </div>

          <Link to="/contact" className="hover:text-[#8cc63f] transition duration-300">Contact Us</Link>
        </div>
      </nav>

      {/* --- MOBILE HEADER --- */}
      <div className="lg:hidden flex justify-between items-center px-4 py-4 bg-white shadow-sm relative z-50">
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="https://htmlbeans.com/html/petshop/images/logo.png" alt="logo" className="w-12" />
        </Link>
        <div className="flex items-center gap-5">
          <Link to="/cart" className="text-sky-500 text-2xl hover:text-[#8cc63f] transition cursor-pointer">
            <FaShoppingCart />
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 text-3xl focus:outline-none hover:text-[#8cc63f] transition cursor-pointer">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* --- MOBILE SIDEBAR MENU --- */}
      <div className={`lg:hidden fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white shadow-xl z-50 transition-transform duration-300 overflow-y-auto flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <img src="https://htmlbeans.com/html/petshop/images/logo.png" alt="logo" className="w-12" />
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 text-2xl hover:text-red-500 transition cursor-pointer">
            <FiX />
          </button>
        </div>

        <div className="flex flex-col text-gray-800 font-bold uppercase tracking-wider text-sm w-full">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="p-4 border-b border-gray-100 hover:text-[#8cc63f] transition">Home</Link>
          
          {/* Mobile Pages Dropdown */}
          <div className="border-b border-gray-100">
            <button onClick={() => toggleDropdown('pages')} className="w-full text-left p-4 flex justify-between items-center hover:text-[#8cc63f] transition cursor-pointer">
              Pages <span className="text-lg leading-none">{activeDropdown === 'pages' ? '-' : '+'}</span>
            </button>
            <div className={`flex flex-col bg-gray-50 text-xs font-semibold capitalize overflow-hidden transition-all duration-300 ${activeDropdown === 'pages' ? 'max-h-40 border-t border-gray-100' : 'max-h-0'}`}>
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-8 hover:text-[#8cc63f] border-b border-gray-100 transition">Services</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-8 hover:text-[#8cc63f] border-b border-gray-100 transition">About Us</Link>
              <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-8 hover:text-[#8cc63f] transition">Gallery</Link>
            </div>
          </div>

          {/* Mobile Shop Dropdown */}
          <div className="border-b border-gray-100">
            <button onClick={() => toggleDropdown('shop')} className="w-full text-left p-4 flex justify-between items-center hover:text-[#8cc63f] transition cursor-pointer">
              Shop <span className="text-lg leading-none">{activeDropdown === 'shop' ? '-' : '+'}</span>
            </button>
            <div className={`flex flex-col bg-gray-50 text-xs font-semibold capitalize overflow-hidden transition-all duration-300 ${activeDropdown === 'shop' ? 'max-h-60 border-t border-gray-100' : 'max-h-0'}`}>
              <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-8 hover:text-[#8cc63f] border-b border-gray-100 transition">Shop</Link>
              <Link to="/shop/product/1" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-8 hover:text-[#8cc63f] border-b border-gray-100 transition">Shop Detail</Link>
              <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-8 hover:text-[#8cc63f] border-b border-gray-100 transition">Cart</Link>
              <Link to="/checkout" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-8 hover:text-[#8cc63f] transition">Checkout</Link>
            </div>
          </div>

          {/* Mobile Blog Dropdown */}
          <div className="border-b border-gray-100">
            <button onClick={() => toggleDropdown('blog')} className="w-full text-left p-4 flex justify-between items-center hover:text-[#8cc63f] transition cursor-pointer">
              Blog <span className="text-lg leading-none">{activeDropdown === 'blog' ? '-' : '+'}</span>
            </button>
            <div className={`flex flex-col bg-gray-50 text-xs font-semibold capitalize overflow-hidden transition-all duration-300 ${activeDropdown === 'blog' ? 'max-h-40 border-t border-gray-100' : 'max-h-0'}`}>
              <Link to="/blog-standard" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-8 hover:text-[#8cc63f] border-b border-gray-100 transition">Blog Standard</Link>
              <Link to="/single-blog" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-8 hover:text-[#8cc63f] transition">Single Blog</Link>
            </div>
          </div>

          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="p-4 border-b border-gray-100 hover:text-[#8cc63f] transition">Contact Us</Link>
        </div>

        {/* Mobile Extra Links / Info */}
        <div className="mt-auto p-5 bg-gray-50 space-y-4">
          <div className="flex gap-4 mb-2">
             <div className="w-8 h-8 rounded-full bg-white border border-gray-200 hover:bg-[#8cc63f] hover:text-white hover:border-transparent transition flex items-center justify-center cursor-pointer text-gray-600">
                <FaFacebookF size={12} />
             </div>
             <div className="w-8 h-8 rounded-full bg-white border border-gray-200 hover:bg-[#8cc63f] hover:text-white hover:border-transparent transition flex items-center justify-center cursor-pointer text-gray-600">
                <FaTwitter size={12} />
             </div>
             <div className="w-8 h-8 rounded-full bg-white border border-gray-200 hover:bg-[#8cc63f] hover:text-white hover:border-transparent transition flex items-center justify-center cursor-pointer text-gray-600">
                <FaLinkedinIn size={12} />
             </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
            <FiUser className="text-sky-500 text-lg" />
            <span>My Account</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
            <FiMail className="text-sky-500 text-lg" />
            <span>petty@support.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
            <FiPhone className="text-sky-500 text-lg" />
            <span>(+1) 345 678 000</span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;