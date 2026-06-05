import React from 'react';

export default function About() {
  return (
    <div className="animate-fadeIn">
      {/* Banner */}
      <div className="bg-brand-accent py-12 border-b border-brand-border text-center">
        <h1 className="text-3xl font-black text-brand-secondary uppercase tracking-wider">About Our Shop</h1>
        <p className="text-xs text-brand-muted mt-2">Home &gt; About Us</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <img src="https://htmlbeans.com/html/petshop/images/img02.jpg" alt="About us" className="border border-brand-border shadow-md object-cover w-full h-[450px]" />
        </div>
        <div className="space-y-6">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest">Est. 2018</span>
          <h2 className="text-3xl font-black text-brand-secondary leading-tight">We Provide Premium Quality Pet Care Options Comfortably.</h2>
          <p className="text-brand-muted text-sm leading-relaxed">
            Founded on the principle of uncompromised care, our sourcing pipelines connect directly with organic farms and certified premium manufacturers. Every unit down to raw threads in toys is fully verified for toxic components.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-brand-accent border-l-4 border-brand-primary">
              <h4 className="font-bold text-brand-secondary text-sm">100% Organic Sourcing</h4>
              <p className="text-xs text-brand-muted mt-1">Clean recipes entirely free of industrial fillers.</p>
            </div>
            <div className="p-4 bg-brand-accent border-l-4 border-brand-primary">
              <h4 className="font-bold text-brand-secondary text-sm">Expert Vetted</h4>
              <p className="text-xs text-brand-muted mt-1">Endorsed comprehensively by physical therapy experts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}