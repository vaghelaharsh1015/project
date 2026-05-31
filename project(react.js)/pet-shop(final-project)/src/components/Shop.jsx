import React, { useState } from 'react';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('Dog');

  const products = [
    {
      id: 1,
      name: 'Pawbits Joint',
      price: '$134.00',
      image: 'https://htmlbeans.com/html/petshop/images/img08.jpg',
      sale: true,
      soldOut: false
    },
    {
      id: 2,
      name: 'Vitamin K2',
      price: '$28.00',
      image: 'https://htmlbeans.com/html/petshop/images/img09.jpg',
      sale: false,
      soldOut: false
    },
    {
      id: 3,
      name: 'Maxxiflex+',
      price: '$28.00',
      image: 'https://htmlbeans.com/html/petshop/images/img10.jpg',
      sale: true,
      soldOut: false
    },
    {
      id: 4,
      name: 'Premier Pet+',
      price: '$42.00',
      image: 'https://htmlbeans.com/html/petshop/images/img11.jpg',
      sale: false,
      soldOut: true
    },
    {
      id: 5,
      name: 'Calcium Pills',
      price: '$30.00',
      image: 'https://htmlbeans.com/html/petshop/images/img12.jpg',
      sale: false,
      soldOut: false
    },
    {
      id: 6,
      name: 'Vitamin D3',
      price: '$32.00',
      image: 'https://htmlbeans.com/html/petshop/images/img13.jpg',
      sale: true,
      soldOut: false
    }
  ];

  const categories = ['Cat', 'Dog', 'Birds', 'Cages', 'Foods'];

  return (
    <section className="py-15 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-9 font-black text-text-dark uppercase tracking-widest text-center mb-3">Petty Shop</h2>
        <div className="text-center mb-7.5">
          <svg width="46" height="22" viewBox="0 0 46 22" fill="none" className="inline-block">
            <circle cx="6" cy="6" r="5" stroke="#c8b96e" strokeWidth="1.8" />
            <circle cx="6" cy="16" r="5" stroke="#c8b96e" strokeWidth="1.8" />
            <circle cx="40" cy="6" r="5" stroke="#c8b96e" strokeWidth="1.8" />
            <circle cx="40" cy="16" r="5" stroke="#c8b96e" strokeWidth="1.8" />
            <rect x="10" y="8" width="26" height="6" rx="3" fill="#c8b96e" />
          </svg>
        </div>
        <p className="text-3.5 text-text-tertiary leading-loose max-w-125 mx-auto mb-10 text-center">
          It is a long established fact that a reader will be distracted by the readable content of a page
          when looking at its layout the point
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12.5">
          {categories.map((category) => (
            <button
              key={category}
              className={`flex flex-col items-center gap-2 bg-border-light border-2 border-border-gray px-5 py-4 rounded-lg cursor-pointer transition-all text-3 font-semibold text-text-tertiary uppercase tracking-tighter min-w-22.5 ${
                activeCategory === category
                  ? 'bg-cyan-primary border-cyan-primary text-white'
                  : 'hover:border-cyan-primary hover:text-cyan-primary'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              <svg viewBox="0 0 46 46" className="w-8 h-8" stroke={activeCategory === category ? '#fff' : '#26c0f0'} fill="none" strokeWidth="1.2">
                {category === 'Cat' && (
                  <>
                    <ellipse cx="23" cy="30" rx="13" ry="11" />
                    <circle cx="23" cy="16" r="9" />
                    <polygon points="15,9 12,2 19,7" />
                    <polygon points="31,9 34,2 27,7" />
                    <circle cx="20" cy="15" r="1.3" />
                    <circle cx="26" cy="15" r="1.3" />
                    <path d="M21.5 18 L23 20 L24.5 18" />
                    <line x1="11" y1="17" x2="18" y2="18" />
                    <line x1="11" y1="20" x2="18" y2="20" />
                    <line x1="28" y1="18" x2="35" y2="17" />
                    <line x1="28" y1="20" x2="35" y2="20" />
                    <path d="M36 30 Q44 24 42 18" />
                    <line x1="17" y1="40" x2="15" y2="46" />
                    <line x1="29" y1="40" x2="31" y2="46" />
                  </>
                )}
                {category === 'Dog' && (
                  <>
                    <ellipse cx="23" cy="30" rx="13" ry="10" />
                    <circle cx="23" cy="16" r="9" />
                    <path d="M14 12 Q8 10 9 20 Q13 22 16 18" />
                    <path d="M32 12 Q38 10 37 20 Q33 22 30 18" />
                    <circle cx="20" cy="14" r="1.5" />
                    <circle cx="26" cy="14" r="1.5" />
                    <ellipse cx="23" cy="19" rx="2.5" ry="1.8" />
                    <path d="M20 21 Q23 24 26 21" />
                    <path d="M36 28 Q44 22 43 16" />
                    <line x1="17" y1="39" x2="15" y2="46" />
                    <line x1="29" y1="39" x2="31" y2="46" />
                  </>
                )}
                {category === 'Birds' && (
                  <>
                    <ellipse cx="23" cy="30" rx="10" ry="12" />
                    <circle cx="23" cy="14" r="7" />
                    <path d="M13 26 Q4 20 6 12 Q14 18 16 26" />
                    <path d="M33 26 Q42 20 40 12 Q32 18 30 26" />
                    <circle cx="21" cy="13" r="1.2" />
                    <path d="M23 16 L26 18 L23 19" />
                    <path d="M19 42 L17 46 M19 42 L19 46 M19 42 L21 46" />
                    <path d="M27 42 L25 46 M27 42 L27 46 M27 42 L29 46" />
                  </>
                )}
                {category === 'Cages' && (
                  <>
                    <path d="M10 10 Q23 4 36 10 L38 38 Q23 44 8 38 Z" />
                    <line x1="16" y1="8" x2="14" y2="40" />
                    <line x1="23" y1="5" x2="23" y2="42" />
                    <line x1="30" y1="8" x2="32" y2="40" />
                    <ellipse cx="23" cy="14" rx="13" ry="3" />
                    <ellipse cx="23" cy="24" rx="14" ry="3.5" />
                    <ellipse cx="23" cy="34" rx="13" ry="3" />
                    <line x1="23" y1="4" x2="23" y2="0" />
                    <line x1="20" y1="0" x2="26" y2="0" />
                  </>
                )}
                {category === 'Foods' && (
                  <>
                    <path d="M14 10 L10 40 Q23 44 36 40 L32 10 Z" />
                    <path d="M14 10 Q23 6 32 10 L30 16 Q23 12 16 16 Z" />
                    <circle cx="23" cy="28" r="3.5" />
                    <circle cx="18" cy="23" r="2" />
                    <circle cx="28" cy="23" r="2" />
                    <circle cx="16" cy="28" r="1.8" />
                    <circle cx="30" cy="28" r="1.8" />
                  </>
                )}
              </svg>
              <span>{category}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-auto-fill-60 gap-6 mb-10">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-border-light rounded-lg overflow-hidden transition-all hover:shadow-lg hover:border-cyan-primary flex flex-col">
              <div className="relative w-full h-55 bg-border-light overflow-hidden">
                {product.sale && <span className="absolute top-3 right-3 bg-green-primary text-white text-2.75 font-bold px-3 py-1.5 rounded z-10">Sale!</span>}
                {product.soldOut && (
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10">
                    <span className="text-white text-4.5 font-bold uppercase tracking-wider">SOLD OUT!</span>
                  </div>
                )}
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform hover:scale-108" />
                {!product.soldOut && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3 opacity-0 hover:opacity-100 transition-opacity">
                    <a href="#" className="w-10 h-10 bg-cyan-primary text-white rounded-full flex items-center justify-center transition-all hover:bg-cyan-dark hover:scale-110 text-3.5">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-cyan-primary text-white rounded-full flex items-center justify-center transition-all hover:bg-cyan-dark hover:scale-110 text-3.5">
                      <i className="fas fa-exchange-alt"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-cyan-primary text-white rounded-full flex items-center justify-center transition-all hover:bg-cyan-dark hover:scale-110 text-3.5">
                      <i className="fas fa-search-plus"></i>
                    </a>
                  </div>
                )}
              </div>
              <div className="p-4 flex-grow">
                <div className="text-3.5 font-semibold text-text-dark mb-2">{product.name}</div>
                <div className="text-4 font-bold text-cyan-primary">{product.price}</div>
              </div>
              <button
                className={`flex items-center justify-center gap-2 mx-4 mb-4 py-3 px-4 text-3 font-bold uppercase border-0 rounded transition-all ${
                  product.soldOut
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-cyan-primary text-white hover:bg-cyan-dark'
                }`}
                disabled={product.soldOut}
              >
                <i className="fas fa-shopping-cart"></i> ADD TO CART
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-cyan-primary text-white border-0 py-3 px-10 text-3.25 font-bold uppercase cursor-pointer transition-all rounded hover:bg-cyan-dark tracking-wider">
            VIEW ALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
