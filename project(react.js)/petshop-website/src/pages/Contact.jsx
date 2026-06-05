import React from 'react';

export default function Contact() {
  return (
    <div className="animate-fadeIn">
      <div className="bg-brand-accent py-12 border-b border-brand-border text-center">
        <h1 className="text-3xl font-black text-brand-secondary uppercase tracking-wider">Connect With Us</h1>
        <p className="text-xs text-brand-muted mt-2">Home &gt; Contact</p>
      </div>

      {/* Embedded High Fidelity Google Maps Frame Component Row */}
      <section className="w-full h-96 bg-stone-200 relative">
        <iframe 
          title="PetShop Location Map"
          className="w-full h-full grayscale opacity-90" 
          src="https://maps.google.com/maps?q=Melbourne%20VIC,%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight="0" 
          marginWidth="0"
        ></iframe>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Detail Contact Strings Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-black text-brand-secondary uppercase mb-2">Visit Our Main Agency</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              121 King Street, Melbourne <br /> VIC 3000, Australia
            </p>
          </div>
          <div>
            <h3 className="text-lg font-black text-brand-secondary uppercase mb-2">Direct Outreach</h3>
            <p className="text-xs text-brand-muted space-y-1">
              <div><strong>Email:</strong> support@petshopdomain.com</div>
              <div><strong>Phone:</strong> (+1) 234 567 890</div>
            </p>
          </div>
        </div>

        {/* Contact Input Form Container Area */}
        <div className="lg:col-span-2 bg-brand-accent p-6 md:p-8 border border-brand-border">
          <h3 className="text-xl font-black text-brand-secondary uppercase mb-4">Send Us A Message</h3>
          <form className="space-y-4 text-xs" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-semibold text-brand-secondary">Full Name</label>
                <input type="text" className="w-full p-3 border border-brand-border bg-white focus:outline-none focus:border-brand-primary" required />
              </div>
              <div>
                <label className="block mb-1 font-semibold text-brand-secondary">Email Address</label>
                <input type="email" className="w-full p-3 border border-brand-border bg-white focus:outline-none focus:border-brand-primary" required />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-semibold text-brand-secondary">Subject</label>
              <input type="text" className="w-full p-3 border border-brand-border bg-white focus:outline-none focus:border-brand-primary" />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-brand-secondary">Your Message</label>
              <textarea rows="5" className="w-full p-3 border border-brand-border bg-white focus:outline-none focus:border-brand-primary resize-none" required></textarea>
            </div>
            <button type="submit" className="bg-brand-secondary text-white font-bold px-8 py-3.5 hover:bg-brand-primary transition uppercase tracking-wider">
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}