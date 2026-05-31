import React from 'react';

const Gallery = () => {
  const images = [
    { id: 1, src: 'https://htmlbeans.com/html/petshop/images/img17.jpg', big: true },
    { id: 2, src: 'https://htmlbeans.com/html/petshop/images/img18.jpg' },
    { id: 3, src: 'https://htmlbeans.com/html/petshop/images/img19.jpg' },
    { id: 4, src: 'https://htmlbeans.com/html/petshop/images/img20.jpg' },
    { id: 5, src: 'https://htmlbeans.com/html/petshop/images/img21.jpg' }
  ];

  return (
    <section className="py-15 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-9 font-black text-text-dark uppercase tracking-widest text-center mb-3">Our Gallery</h2>
        <div className="text-center mb-12.5">
          <svg width="46" height="22" viewBox="0 0 46 22" fill="none" className="inline-block">
            <circle cx="6" cy="6" r="5" stroke="#c8b96e" strokeWidth="1.8" />
            <circle cx="6" cy="16" r="5" stroke="#c8b96e" strokeWidth="1.8" />
            <circle cx="40" cy="6" r="5" stroke="#c8b96e" strokeWidth="1.8" />
            <circle cx="40" cy="16" r="5" stroke="#c8b96e" strokeWidth="1.8" />
            <rect x="10" y="8" width="26" height="6" rx="3" fill="#c8b96e" />
          </svg>
        </div>

        <div className="grid grid-cols-4 gap-5 auto-rows-62.5">
          {images.map((img) => (
            <div
              key={img.id}
              className={`overflow-hidden rounded-lg bg-border-light transition-all cursor-pointer ${
                img.big ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
              } hover:scale-110`}
            >
              <img src={img.src} alt="gallery" className="w-full h-full object-cover transition-transform hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
