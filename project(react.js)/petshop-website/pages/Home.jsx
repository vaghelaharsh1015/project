import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

const services = [
  { title: 'Pet Adoption', img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=300' },
  { title: 'Pet Grooming', img: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=300' },
  { title: 'Pet Daycare', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=300' },
  { title: 'Dog Training', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300' }
];

const sampleProducts = [
  { id: 1, name: 'Pawbits Joint', price: 134.00, category: 'Food', image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300', sale: true },
  { id: 2, name: 'Vitamin K2', price: 28.00, category: 'Food', image: 'https://images.unsplash.com/photo-1615087240969-eeff2fa558f2?w=300', sale: true },
  { id: 3, name: 'Maxxiflex+', price: 28.00, category: 'Food', image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=300', sale: false },
  { id: 4, name: 'Premier Pet+', price: 42.00, category: 'Food', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300', sale: false }
];

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />

      {/* --- SECTION 1: WELCOME TO PETTY --- */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight uppercase">Welcome To Petty</h2>
          <div className="w-12 h-1 bg-[#8cc63f]"></div>
          <p className="text-gray-500 text-sm leading-relaxed">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4 text-center text-xs font-bold text-gray-700">
            <div className="space-y-2 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-sky-400 flex items-center justify-center text-sky-400 text-xl">🏷️</div>
              <p>Lowest Price</p>
            </div>
            <div className="space-y-2 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-sky-400 flex items-center justify-center text-sky-400 text-xl">🍏</div>
              <p>Healthy Pets</p>
            </div>
            <div className="space-y-2 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-sky-400 flex items-center justify-center text-sky-400 text-xl">😊</div>
              <p>Happy People</p>
            </div>
          </div>
        </div>
        {/* Right side puppy image */}
        <div className="flex justify-center">
          <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500" alt="Puppy" className="max-w-[350px] object-contain" />
        </div>
      </section>

      {/* --- SECTION 2: WHAT WE DO (GREEN PATTERN BAR) --- */}
      <section className="bg-[#8cc63f] text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold uppercase tracking-wide">What We Do</h2>
            <p className="text-sm opacity-90">🐾 🐾 🐾</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, idx) => (
              <div key={idx} className="bg-white text-gray-800 p-4 flex flex-col items-center text-center shadow-sm">
                <img src={s.img} alt={s.title} className="w-full h-40 object-cover mb-4" />
                <h4 className="font-bold text-base text-gray-900 mb-1">{s.title}</h4>
                <p className="text-xs text-gray-500 mb-4">It is a long established fact that a reader looking at its layout.</p>
                <button className="text-xs font-bold text-[#00b2ff] hover:text-gray-900 uppercase">Read More |</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: PETTY SHOP --- */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 uppercase">Petty Shop</h2>
          <p className="text-xs text-gray-400 max-w-md mx-auto">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
        </div>

        {/* Category Icons Row */}
        <div className="flex justify-center gap-6 md:gap-12 border-b border-gray-100 pb-6 mb-10 text-xs font-bold text-gray-600">
          <button className="flex flex-col items-center gap-2 text-[#8cc63f]"><span>🐱</span> Cat</button>
          <button className="flex flex-col items-center gap-2 hover:text-[#8cc63f]"><span>🐶</span> Dog</button>
          <button className="flex flex-col items-center gap-2 hover:text-[#8cc63f]"><span>🦜</span> Birds</button>
          <button className="flex flex-col items-center gap-2 hover:text-[#8cc63f]"><span>🏠</span> Cages</button>
          <button className="flex flex-col items-center gap-2 hover:text-[#8cc63f]"><span>🥩</span> Foods</button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {sampleProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        <div className="text-center">
          <button className="border-2 border-[#8cc63f] text-[#8cc63f] hover:bg-[#8cc63f] hover:text-white font-bold text-xs px-8 py-3 rounded-full uppercase transition">
            View All
          </button>
        </div>
      </section>

      {/* --- SECTION 4: THREE BLOCKS OVER DOG PIC --- */}
      <section 
        className="relative py-24 bg-cover bg-center text-white text-center px-6"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1200')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <span className="text-3xl text-sky-400">🔖</span>
            <h4 className="font-bold text-lg">Quality & Caring</h4>
            <p className="text-xs opacity-80">It is a long established fact that a reader distracted by the readable content.</p>
          </div>
          <div className="space-y-2">
            <span className="text-3xl text-sky-400">🛡️</span>
            <h4 className="font-bold text-lg">Insured & Checked</h4>
            <p className="text-xs opacity-80">It is a long established fact that a reader distracted by the readable content.</p>
          </div>
          <div className="space-y-2">
            <span className="text-3xl text-sky-400">🏠</span>
            <h4 className="font-bold text-lg">Free Home Consulting</h4>
            <p className="text-xs opacity-80">It is a long established fact that a reader distracted by the readable content.</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: GALLERY --- */}
      <section className="py-16 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 uppercase mb-8">Our Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300" className="w-full h-44 object-cover" alt="g1" />
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300" className="w-full h-44 object-cover" alt="g2" />
          <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=300" className="w-full h-44 object-cover" alt="g3" />
          <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300" className="w-full h-44 object-cover" alt="g4" />
          <img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=300" className="w-full h-44 object-cover" alt="g5" />
          <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300" className="w-full h-44 object-cover" alt="g6" />
        </div>
      </section>
    </div>
  );
}