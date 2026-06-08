import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState('description');

  const allProducts = [
    { id: 1, name: "Pawbits Joint", price: 134.0, oldPrice: null, category: "Cats", image: "https://htmlbeans.com/html/petshop/images/img08.jpg", sku: "PET-001" },
    { id: 2, name: "Vitamin K2", price: 28.0, oldPrice: null, category: "Dogs", image: "https://htmlbeans.com/html/petshop/images/img09.jpg", sku: "PET-002" },
    { id: 3, name: "Maxxiflex+", price: 28.0, oldPrice: null, category: "Dogs", image: "https://htmlbeans.com/html/petshop/images/img10.jpg", sku: "PET-003" },
    { id: 4, name: "Premier Pet+", price: 42.0, oldPrice: null, category: "Foods", image: "https://htmlbeans.com/html/petshop/images/img11.jpg", sku: "PET-004" },
    { id: 5, name: "Calcium Pills", price: 30.0, oldPrice: null, category: "Foods", image: "https://htmlbeans.com/html/petshop/images/img12.jpg", sku: "PET-005" },
    { id: 6, name: "Vitamin D3", price: 42.0, oldPrice: 45.0, category: "Dogs", image: "https://htmlbeans.com/html/petshop/images/img13.jpg", sku: "PET-006" },
    { id: 7, name: "Pets Puriest", price: 28.0, oldPrice: null, category: "Dogs", image: "https://htmlbeans.com/html/petshop/images/img14.jpg", sku: "PET-007" },
    { id: 8, name: "Nutri-Pooch", price: 58.0, oldPrice: 62.0, category: "Foods", image: "https://htmlbeans.com/html/petshop/images/img15.jpg", sku: "PET-008" },
    { id: 9, name: "Yumove Dog", price: 45.0, oldPrice: null, category: "Dogs", image: "https://htmlbeans.com/html/petshop/images/img39.jpg", sku: "PET-009" }
  ];

  const foundProduct = allProducts.find(p => p.id === parseInt(id));

  const sampleProduct = foundProduct ? {
    ...foundProduct,
    description: 'Formulated directly with non-GMO proteins, real vegetables, and enriched functional lipids ensuring complete gut-flora stability and vibrant muscle building indices. Essential fatty acids work seamlessly to boost performance and build core resilience.'
  } : {
    id: id || 1,
    name: 'Product Not Found',
    price: 0.00,
    oldPrice: null,
    sku: 'N/A',
    category: 'Unknown',
    image: 'https://htmlbeans.com/html/petshop/images/img44.jpg',
    description: 'Sorry, the product you are looking for does not exist.'
  };

  const sidebarFeatured = [
    { id: 10, name: "Premier Pet+ for Dogs", price: 30.0, image: "https://htmlbeans.com/html/petshop/images/img40.jpg" },
    { id: 11, name: "Nutri-Pooch Vitamin+", price: 30.0, image: "https://htmlbeans.com/html/petshop/images/img41.jpg" },
    { id: 12, name: "Joint Support for Cats", price: 30.0, image: "https://htmlbeans.com/html/petshop/images/img42.jpg" }
  ];

  const relatedProducts = [
    { id: 7, name: 'Pets Puriest', price: 58.00, oldPrice: 62.00, image: 'https://htmlbeans.com/html/petshop/images/img14.jpg' },
    { id: 8, name: 'Nutri-Pooch', price: 58.00, oldPrice: 62.00, image: 'https://htmlbeans.com/html/petshop/images/img15.jpg' },
    { id: 9, name: 'Lintbells YuMove', price: 58.00, oldPrice: null, image: 'https://htmlbeans.com/html/petshop/images/img39.jpg' }
  ];

  return (
    <div className="animate-fadeIn py-16 bg-white min-h-screen font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* --- BREADCRUMB NAVIGATION --- */}
        <div className="text-xs text-gray-400 mb-10 select-none">
          <Link to="/" className="hover:text-[#8cc63f] transition">Home</Link>
          <span className="mx-2">&gt;</span>
          <Link to="/shop" className="hover:text-[#8cc63f] transition">Shop</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-600">{sampleProduct.name}</span>
        </div>

        {/* --- MAIN PAGE CONTENT GRID OVERVIEW --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* =========================================================================
              LEFT SIDE: PRODUCT DETAILS, TABS & RELATED PRODUCTS  
              ========================================================================= */}
          <div className="lg:col-span-3 space-y-16">
            
            {/* Top Product Hero Card Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {/* Left Image Frame */}
              <div className="border border-gray-200 p-6 bg-white flex items-center justify-center">
                <img src={sampleProduct.image} alt={sampleProduct.name} className="max-w-full h-auto object-contain max-h-[350px]" />
              </div>

              {/* Right Specs Info */}
              <div className="space-y-4">
                <h1 className="text-2xl font-bold text-gray-800 tracking-wide leading-tight">{sampleProduct.name}</h1>
                
                <div className="flex items-center gap-2 text-xs">
                  <div className="text-amber-400 flex tracking-2xs">⭐⭐⭐⭐⭐</div>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-400">( 3 customer reviews )</span>
                </div>

                <div className="text-2xl font-bold text-[#8cc63f] pt-1">
                  <span>${sampleProduct.price.toFixed(2)}</span>
                </div>

                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">{sampleProduct.description}</p>

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Qty:</span>
                    <div className="flex border border-gray-200 items-center bg-white">
                      <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 text-gray-500 font-bold text-sm transition cursor-pointer select-none">-</button>
                      <span className="w-8 text-center text-xs font-bold text-gray-700">{qty}</span>
                      <button onClick={() => setQty(qty + 1)} className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 text-gray-500 font-bold text-sm transition cursor-pointer select-none">+</button>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      addToCart({ ...sampleProduct, quantity: qty });
                      alert(`${sampleProduct.name} added to cart successfully!`);
                    }}
                    className="bg-[#222] text-white hover:bg-[#8cc63f] text-[11px] font-bold px-7 py-2.5 transition duration-300 uppercase tracking-widest cursor-pointer shadow-2xs"
                  >Add To Cart</button>
                </div>

                <div className="text-[11px] text-gray-400 space-y-1.5 pt-6 border-t border-gray-100">
                  <p><span className="font-bold text-gray-700 uppercase tracking-wide">SKU:</span> {sampleProduct.sku}</p>
                  <p><span className="font-bold text-gray-700 uppercase tracking-wide">Category:</span> {sampleProduct.category}</p>
                </div>
              </div>
            </div>

            {/* Description & Reviews Section Tabs */}
            <div className="mt-12">
              <div className="flex gap-1 border-b border-gray-200">
                <button 
                  onClick={() => setActiveTab('description')}
                  className={`text-xs font-bold uppercase tracking-wider px-5 py-3 transition relative cursor-pointer ${activeTab === 'description' ? 'text-[#8cc63f] border-b-2 border-[#8cc63f] -mb-[2px]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  Description
                </button>
                <button 
                  onClick={() => setActiveTab('reviews')}
                  className={`text-xs font-bold uppercase tracking-wider px-5 py-3 transition relative cursor-pointer ${activeTab === 'reviews' ? 'text-[#8cc63f] border-b-2 border-[#8cc63f] -mb-[2px]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  Reviews (03)
                </button>
              </div>

              <div className="border border-t-0 border-gray-200 p-6 md:p-8 bg-white text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                {activeTab === 'description' ? (
                  <div className="space-y-4">
                    <p>Passages of Lorem Ipsum as available, but the majority have suffered alteration in some form, by injected humour, or randomised words which buy don't look even slightly believable. If you are going to use a passage of need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    <p className="pt-2"><span className="font-semibold text-gray-700">Suitable for :</span> Pets</p>
                    <p><span className="font-semibold text-gray-700">Color:</span> Assorted colors, please see available color options</p>
                    <p><span className="font-semibold text-gray-700">Available Sizes:</span> 5 in, 3.2 in</p>
                  </div>
                ) : (
                  <p>No reviews yet. Be the first to review this product!</p>
                )}
              </div>
            </div>

            {/* Related Products Grid Module */}
            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-xl font-bold text-center text-gray-800 mb-10 tracking-wide">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedProducts.map((prod) => (
                  <div key={prod.id} className="bg-white flex flex-col text-left">
                    <div className="border border-gray-200 p-4 aspect-[4/5] flex items-center justify-center bg-white mb-4">
                      <img src={prod.image} alt={prod.name} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="space-y-1 px-1">
                      <h4 className="font-bold text-gray-800 text-sm hover:text-[#8cc63f] transition duration-200 cursor-pointer">{prod.name}</h4>
                      <div className="flex items-center gap-2 text-xs font-bold text-[#8cc63f]">
                        {prod.oldPrice && <span className="text-gray-400 line-through font-normal">${prod.oldPrice.toFixed(2)}</span>}
                        <span>${prod.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* =========================================================================
              RIGHT SIDE: DYNAMIC HIGH FIDELITY SIDEBAR 
              ========================================================================= */}
          <aside className="space-y-10 border-l border-gray-100 lg:pl-8 font-sans">
            
            {/* Widget 1: Filter Button */}
            <div className="space-y-3">
              <h3 className="font-bold text-gray-800 text-base tracking-wide uppercase">Filter</h3>
              <button className="border border-gray-300 text-gray-600 hover:border-[#8cc63f] hover:text-[#8cc63f] px-5 py-1.5 text-[11px] font-bold tracking-wider uppercase transition bg-white cursor-pointer">
                Filter
              </button>
            </div>

            {/* Widget 2: Categories Count Index */}
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800 text-base tracking-wide uppercase">Categories</h3>
              <ul className="space-y-2.5 text-xs font-medium text-gray-500">
                {[
                  { label: "Dogs", count: 30 },
                  { label: "Cats", count: 46 },
                  { label: "Birds", count: 58 },
                  { label: "Cages", count: 20 },
                  { label: "Foods", count: 62 }
                ].map((cat, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-gray-300 text-[10px] mr-2">&gt;</span>
                    <Link to="/shop" className="hover:text-[#8cc63f] transition">
                      {cat.label} <span className="text-gray-400 font-normal">[{cat.count}]</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 3: Featured Products Dynamic Miniature Row */}
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800 text-base tracking-wide uppercase">Featured Products</h3>
              <div className="space-y-4">
                {sidebarFeatured.map((fp) => (
                  <div key={fp.id} className="flex items-center gap-3 bg-white">
                    <div className="w-14 h-14 border border-gray-200 flex-shrink-0 p-1 bg-white">
                      <img src={fp.image} alt={fp.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[10px] text-gray-200 flex">⭐⭐⭐⭐⭐</div>
                      <h4 className="font-semibold text-gray-700 text-xs hover:text-[#8cc63f] transition line-clamp-1">
                        <Link to={`/shop/product/${fp.id}`}>{fp.name}</Link>
                      </h4>
                      <p className="text-xs font-bold text-[#8cc63f]">${fp.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 4: Round Search Bar Component Input */}
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800 text-base tracking-wide uppercase">Search Products</h3>
              <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
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
    </div>
  );
}