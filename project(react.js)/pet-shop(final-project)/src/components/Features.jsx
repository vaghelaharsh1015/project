import React from 'react';

const Features = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-primary to-green-dark py-15 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-50 h-50 bg-white rounded-full -top-12.5 -left-12.5"></div>
        <div className="absolute w-62.5 h-62.5 bg-white rounded-full -bottom-20 right-auto lg:right-2.5"></div>
        <div className="absolute w-37.5 h-37.5 bg-white rounded-full top-1/2 -right-10"></div>
      </div>

      <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 text-center text-white">
            <div className="text-12 mb-4">
              <i className="fas fa-bookmark"></i>
            </div>
            <h5 className="text-4.5 font-bold mb-3">Quality & Caring</h5>
            <p className="text-3.5 leading-relaxed opacity-95">It is a long established fact that a reader distracted by the readable content</p>
          </div>

          <div className="col-span-1 text-center text-white">
            <div className="text-12 mb-4">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h5 className="text-4.5 font-bold mb-3">Insured & Checked</h5>
            <p className="text-3.5 leading-relaxed opacity-95">It is a long established fact that a reader distracted by the readable content</p>
          </div>

          <div className="col-span-1 text-center text-white">
            <div className="text-12 mb-4">
              <i className="fas fa-home"></i>
            </div>
            <h5 className="text-4.5 font-bold mb-3">Free Home Consulting</h5>
            <p className="text-3.5 leading-relaxed opacity-95">It is a long established fact that a reader distracted by the readable content</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
