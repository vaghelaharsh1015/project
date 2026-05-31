import React from 'react';

const WhatWeDo = () => {
  const services = [
    {
      id: 1,
      title: 'Pet Adoption',
      description: 'It is a long established fact that a reader looking at its layout the point',
      image: 'https://htmlbeans.com/html/petshop/images/img04.jpg'
    },
    {
      id: 2,
      title: 'Pet Grooming',
      description: 'It is a long established fact that a reader looking at its layout the point',
      image: 'https://htmlbeans.com/html/petshop/images/img05.jpg'
    },
    {
      id: 3,
      title: 'Pet Daycare',
      description: 'It is a long established fact that a reader looking at its layout the point',
      image: 'https://htmlbeans.com/html/petshop/images/img06.jpg'
    },
    {
      id: 4,
      title: 'Dog Training',
      description: 'It is a long established fact that a reader looking at its layout the point',
      image: 'https://htmlbeans.com/html/petshop/images/img07.jpg'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-cyan-primary to-cyan-dark py-15 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12.5">
          <h2 className="text-9 font-black text-white uppercase tracking-widest mb-5">What We Do</h2>
          <svg width="44" height="22" viewBox="0 0 44 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
            <circle cx="6" cy="6" r="5" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" />
            <circle cx="6" cy="16" r="5" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" />
            <circle cx="38" cy="6" r="5" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" />
            <circle cx="38" cy="16" r="5" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" />
            <rect x="10" y="8" width="24" height="6" rx="3" fill="rgba(255,255,255,0.85)" />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-15">
          {services.map((service) => (
            <div key={service.id} className="col-span-1">
              <div className="bg-white rounded-lg overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col">
                <div className="w-full h-62.5 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform hover:scale-110" onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80'} />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h4 className="text-4.5 font-bold text-text-dark mb-3">{service.title}</h4>
                  <p className="text-3.25 text-text-tertiary leading-relaxed mb-4 flex-grow">{service.description}</p>
                  <a href="#" className="text-cyan-primary text-3 font-bold flex items-center gap-2 uppercase tracking-tighter hover:gap-3 transition-all">
                    READ MORE <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-22.5">
        <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <ellipse cx="720" cy="90" rx="900" ry="90" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};

export default WhatWeDo;
