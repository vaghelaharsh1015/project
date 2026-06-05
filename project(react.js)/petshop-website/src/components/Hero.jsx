import React from "react";

export default function Hero() {
  return (
    <section
      className="relative h-[85vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://htmlbeans.com/html/petshop/images/img01.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl">

          <span className="inline-block bg-[#8cc63f] text-white text-xs font-bold px-4 py-2 uppercase mb-4">
            Welcome To Petty
          </span>

          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6">
            We will take care of
            <br />
            your pets
          </h1>

          <p className="text-white/90 text-lg mb-8 leading-8">
            Professional pet care services for your lovely pets.
            We provide grooming, daycare, adoption and veterinary support.
          </p>

          <button className="bg-[#8cc63f] hover:bg-[#7db335] text-white font-bold text-xs px-8 py-4 rounded-full uppercase tracking-wider transition-all">
            Contact Us
          </button>

        </div>
      </div>
    </section>
  );
}