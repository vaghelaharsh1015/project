import React from 'react';

const Hero = () => {
  return (
    <section className="bg-cover bg-center relative flex items-center justify-center overflow-hidden min-h-155 bg-no-repeat" 
      style={{ backgroundImage: 'url("https://htmlbeans.com/html/petshop/images/img01.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-32 z-1"></div>
      <div className="absolute bottom-0 left-0 w-22.5 h-22.5 bg-white z-2"></div>
      
      <div className="relative z-3 text-center px-3.75">
        <h1 className="text-14 font-black text-white leading-tight mb-8 text-shadow">
          We will take care of<br />your pets
        </h1>
        <button className="bg-green-primary text-white text-3.25 font-bold tracking-widest uppercase py-3.5 px-11.5 rounded-full border-0 shadow-lg hover:bg-green-dark hover:-translate-y-0.5 transition-all">
          CONTACT US
        </button>
      </div>
    </section>
  );
};

export default Hero;
