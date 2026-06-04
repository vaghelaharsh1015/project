import React from 'react';

const testimonialsData = [
  {
    id: 1,
    quote: "The organic raw food diet sets transformed my Golden Retriever's energy levels completely. Delivery was impeccable and fresh!",
    author: "Jessica Mercer",
    role: "Dog Owner",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
  },
  {
    id: 2,
    quote: "Finding high-grade eco-friendly multi-level cat trees used to be impossible. PetShop has gorgeous durable selections.",
    author: "David Vance",
    role: "Feline Consultant",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-brand-accent">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-brand-primary font-bold text-xs tracking-widest uppercase">Testimonials</span>
          <h2 className="text-2xl md:text-3xl font-black text-brand-secondary mt-1">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((t) => (
            <div key={t.id} className="bg-white p-6 md:p-8 border border-brand-border relative shadow-sm">
              <span className="absolute top-4 right-6 text-6xl text-brand-primary/20 font-serif">“</span>
              <p className="text-brand-muted italic text-sm leading-relaxed mb-6 relative z-10">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full object-cover border border-brand-primary" />
                <div>
                  <h4 className="font-bold text-brand-secondary text-sm">{t.author}</h4>
                  <span className="text-xs text-brand-muted">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}