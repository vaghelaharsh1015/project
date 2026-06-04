import React from 'react';

export default function Hero() {
  return (
    <section 
      className="relative h-[85vh] bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1600')` }}
    >
      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 max-w-3xl space-y-6">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-md">
          We will take care of <br /> your pets
        </h1>
        <div className="pt-2">
          <button className="bg-[#8cc63f] hover:bg-[#7db335] text-white font-bold text-xs px-8 py-3.5 rounded-full uppercase tracking-wider transition-all shadow-md">
            Contact Us
          </button>
        </div>
      </div>

      {/* Bottom Wave Border Effect */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg viewBox="0 0 1200 120" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,4.75,55.05,12.72,83.1,19.34,143.21,33.55,203.11,43.08,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}