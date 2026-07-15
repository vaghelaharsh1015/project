import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import { toast } from "react-toastify";

const catalogProducts = [
  { id: 1, name: "Pawbits Joint", price: 134.0, oldPrice: null, category: "Cats", image: "https://htmlbeans.com/html/petshop/images/img08.jpg", sale: true, soldOut: false },
  { id: 2, name: "Pawbits Joint", price: 134.0, oldPrice: null, category: "Dogs", image: "https://htmlbeans.com/html/petshop/images/img09.jpg", sale: false, soldOut: false },
  { id: 3, name: "Maxxiflex+", price: 28.0, oldPrice: null, category: "Dogs", image: "https://htmlbeans.com/html/petshop/images/img10.jpg", sale: true, soldOut: false },
  { id: 4, name: "Premier Pet+", price: 42.0, oldPrice: null, category: "Foods", image: "https://htmlbeans.com/html/petshop/images/img11.jpg", sale: false, soldOut: true },
  { id: 5, name: "Calcium Pills", price: 30.0, oldPrice: null, category: "Foods", image: "https://htmlbeans.com/html/petshop/images/img12.jpg", sale: false, soldOut: false },
  { id: 6, name: "Vitamin D3", price: 134.0, oldPrice: null, category: "Dogs", image: "https://htmlbeans.com/html/petshop/images/img13.jpg", sale: true, soldOut: false },
  { id: 7, name: "Pets Puriest", price: 28.0, oldPrice: null, category: "Dogs", image: "https://htmlbeans.com/html/petshop/images/img14.jpg", sale: false, soldOut: false },
  { id: 8, name: "Nutri-Pooch", price: 58.0, oldPrice: null, category: "Foods", image: "https://htmlbeans.com/html/petshop/images/img15.jpg", sale: false, soldOut: false },
  { id: 9, name: "Yumove Dog", price: 45.0, oldPrice: null, category: "Dogs", image: "https://htmlbeans.com/html/petshop/images/img39.jpg", sale: false, soldOut: false }
];

const featuredProducts = [
  { id: 10, name: "Premier Pet+ for Dogs", price: 30.0, image: "https://htmlbeans.com/html/petshop/images/img10.jpg" },
  { id: 11, name: "Nutri-Pooch Vitamin+", price: 30.0, image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=100" },
  { id: 12, name: "Joint Support for Cats", price: 30.0, image: "https://htmlbeans.com/html/petshop/images/img15.jpg" }
];

export default function Shop() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { label: "Dogs", count: 30 },
    { label: "Cats", count: 46 },
    { label: "Birds", count: 58 },
    { label: "Cages", count: 20 },
    { label: "Foods", count: 62 }
  ];

  const filteredProducts = selectedCategory === "All" 
    ? catalogProducts 
    : catalogProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="animate-fadeIn bg-white min-h-screen">
      
      {/* --- PAGE BANNER --- */}
      <div
        className="relative h-[35vh] bg-cover bg-center flex items-center justify-center text-center px-4 border-b border-gray-100"
        style={{
          backgroundImage: `url('https://htmlbeans.com/html/petshop/images/img33.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold tracking-widest uppercase drop-shadow-xs">
          Shop
        </h1>
      </div>

      {/* --- MAIN SHOP CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        
        {/* LEFT SIDE: 3-COLUMN PRODUCTS CONTAINER */}
        <main className="lg:col-span-3 order-2 lg:order-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white flex flex-col text-left">
                
                {/* Thin Gray Framed Product Image Container */}
                <div className="relative aspect-[4/5] border border-gray-200 p-4 flex items-center justify-center bg-white mb-3.5 overflow-hidden">
                  <Link to={`/shop/product/${product.id}`} className="w-full h-full flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  
                  {/* Circular Blue Sale Tag Badge */}
                  {product.sale && (
                    <span className="absolute top-2 right-2 bg-[#00b2ff] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Sale!
                    </span>
                  )}

                  {/* High Fidelity Sold Out Overlay Layer */}
                  {product.soldOut && (
                    <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
                      <span className="text-red-500 font-bold text-xs tracking-widest bg-white/95 border border-red-200 px-2 py-1 shadow-2xs uppercase">
                        SOLD OUT!
                      </span>
                    </div>
                  )}
                </div>

                {/* Typography Labels Specs */}
                <div className="px-1 space-y-0.5">
                  <h3 className="font-bold text-gray-800 text-sm hover:text-[#8cc63f] transition duration-200">
                    <Link to={`/shop/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <div className="text-xs font-bold text-[#8cc63f]">
                    <span>${product.price.toFixed(2)}</span>
                  </div>
                  <button 
                    onClick={() => {
                      addToCart({ ...product, quantity: 1 });
                      toast.success(`${product.name} added to cart successfully!`);
                    }}
                    className="mt-3 w-full bg-[#222] hover:bg-[#8cc63f] text-white text-[10px] font-bold py-2.5 rounded-full uppercase tracking-wider transition-colors duration-300 cursor-pointer shadow-sm"
                  >
                    Add To Cart
                  </button>
                </div>

              </div>
            ))}
          </div>
        </main>

        {/* RIGHT SIDE: SIDEBAR FILTERS AND WIDGETS (EXACTLY LIKE IMAGE_997F23.JPG) */}
        <aside className="space-y-10 order-1 lg:order-2 text-left font-sans">
          
          {/* Widget 1: Price Filter Button */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-800 text-base tracking-wide uppercase">Filter</h3>
            <button className="border border-gray-300 text-gray-600 hover:border-[#8cc63f] hover:text-[#8cc63f] px-5 py-1.5 text-[11px] font-bold tracking-wider uppercase transition bg-white">
              Filter
            </button>
          </div>

          {/* Widget 2: Category Selector Lists */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 text-base tracking-wide uppercase">Categories</h3>
            <ul className="space-y-2.5 text-xs font-medium text-gray-500">
              <li className="flex items-center">
                <span className="text-gray-300 text-[10px] mr-2">&gt;</span>
                <button 
                  onClick={() => setSelectedCategory("All")}
                  className={`hover:text-[#8cc63f] transition ${selectedCategory === "All" ? "text-[#8cc63f] font-bold" : ""}`}
                >
                  All Products
                </button>
              </li>
              {categories.map((cat, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-gray-300 text-[10px] mr-2">&gt;</span>
                  <button 
                    onClick={() => setSelectedCategory(cat.label)}
                    className={`hover:text-[#8cc63f] transition text-left ${selectedCategory === cat.label ? "text-[#8cc63f] font-bold" : ""}`}
                  >
                    {cat.label} <span className="text-gray-400 font-normal">[{cat.count}]</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Widget 3: Featured Products Dynamic Mini Row */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 text-base tracking-wide uppercase">Featured Products</h3>
            <div className="space-y-4">
              {featuredProducts.map((fp) => (
                <div key={fp.id} className="flex items-center gap-3 bg-white">
                  <div className="w-14 h-14 border border-gray-200 flex-shrink-0 p-1 bg-white">
                    <img src={fp.image} alt={fp.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="space-y-0.5">
                    {/* Star Rating Layout */}
                    <div className="text-[10px] text-gray-300 flex">⭐⭐⭐⭐⭐</div>
                    <h4 className="font-semibold text-gray-700 text-xs hover:text-[#8cc63f] transition line-clamp-1">
                      <Link to={`/shop/product/${fp.id}`}>{fp.name}</Link>
                    </h4>
                    <p className="text-xs font-bold text-[#8cc63f]">${fp.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Widget 4: Round Capsule Search Inputs */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 text-base tracking-wide uppercase">Search Products</h3>
            <form className="relative flex items-center max-w-[240px]" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-[#f4f4f4] rounded-full pl-5 pr-10 py-2.5 text-xs italic text-gray-700 focus:outline-none border border-transparent focus:border-gray-200"
              />
              <span className="absolute right-4 text-gray-400 text-xs pointer-events-none">🔍</span>
            </form>
          </div>

        </aside>

      </div>
    </div>
  );
}