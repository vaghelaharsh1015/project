import React from "react";

export default function Gallery() {
  return (
    <div className="animate-fadeIn bg-white pb-20">
      
      {/* --- PAGE BANNER --- */}
      <div className="relative h-[45vh] bg-cover bg-center flex items-center justify-center text-center px-4 mb-16"
        style={{
          backgroundImage: `url('https://htmlbeans.com/html/petshop/images/img33.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold tracking-wide drop-shadow-sm">
          Gallery
        </h1>
      </div>

      {/* --- GALLERY MASONRY CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* ROW 1: Asymmetric 3-Column Layout (Exactly like image top) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-4">
          
          {/* Column 1: Left Big Vertical Image */}
          <div className="h-[460px] overflow-hidden shadow-xs relative group">
            <img
              src="https://htmlbeans.com/html/petshop/images/img17.jpg"
              alt="Girl with white puppy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Column 2: Middle Stack (Top and Bottom Images) */}
          <div className="flex flex-col gap-4 h-[460px]">
            <div className="h-1/2 overflow-hidden shadow-xs relative group">
              <img
                src="https://htmlbeans.com/html/petshop/images/img18.jpg"
                alt="Vet at animal shelter"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-1/2 overflow-hidden shadow-xs relative group">
              <img
                src="https://htmlbeans.com/html/petshop/images/img19.jpg"
                alt="Doctor checking a cat"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Column 3: Right Stack (Top and Bottom Images) */}
          <div className="flex flex-col gap-4 h-[460px]">
            <div className="h-1/2 overflow-hidden shadow-xs relative group">
              <img
                src="https://htmlbeans.com/html/petshop/images/img20.jpg"
                alt="Little brown puppy treatment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Image with Dark Zoom Icon Hover Overlay Effect */}
            <div className="h-1/2 overflow-hidden shadow-xs relative group cursor-pointer">
              <img
                src="https://htmlbeans.com/html/petshop/images/img21.jpg"
                alt="Vets with white dog"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-gray-800 font-bold">🔍</span>
              </div>
            </div>
          </div>

        </div>

        {/* ROW 2: New Bottom Row Added Grid (Exactly like image bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          
          {/* Bottom Left Square Frame (Dog and Cat) */}
          <div className="md:col-span-1 h-[260px] overflow-hidden shadow-xs group">
            <img 
              src="https://htmlbeans.com/html/petshop/images/img37.jpg" 
              alt="Dog and Cat resting" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Bottom Right Wide Landscape Frame (Yawning Golden Puppy) */}
          <div className="md:col-span-2 h-[260px] overflow-hidden shadow-xs group">
            <img 
              src="https://htmlbeans.com/html/petshop/images/img38.jpg" 
              alt="Yawning golden puppy close up" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>

        {/* --- PAGINATION INDICATORS BAR --- */}
        <div className="flex justify-center items-center gap-2 mt-16 text-[11px] font-bold text-gray-400 select-none">
          <button className="w-8 h-8 rounded-full border border-gray-200 hover:border-[#8cc63f] hover:text-[#8cc63f] flex items-center justify-center transition cursor-pointer">
            «
          </button>
          <button className="w-8 h-8 rounded-full border border-gray-200 hover:border-[#8cc63f] hover:text-[#8cc63f] flex items-center justify-center transition cursor-pointer">
            1
          </button>
          {/* Page 2 Active State Green Background */}
          <button className="w-8 h-8 rounded-full bg-[#8cc63f] text-white flex items-center justify-center shadow-xs cursor-pointer">
            2
          </button>
          <button className="w-8 h-8 rounded-full border border-gray-200 hover:border-[#8cc63f] hover:text-[#8cc63f] flex items-center justify-center transition cursor-pointer">
            3
          </button>
        </div>

      </div>

    </div>
  );
}