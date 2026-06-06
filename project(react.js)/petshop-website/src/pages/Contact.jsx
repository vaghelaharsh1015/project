import React from 'react';

export default function Contact() {
  return (
    <div className="animate-fadeIn pb-20 bg-white font-sans text-left">
      
      {/* --- PAGE BANNER --- */}
      <div className="relative h-[35vh] bg-cover bg-center flex items-center justify-center text-center px-4 mb-16 border-b border-gray-100"
        style={{
          backgroundImage: `url('https://htmlbeans.com/html/petshop/images/img33.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold tracking-widest uppercase drop-shadow-xs">
          Contact Us
        </h1>
      </div>

      {/* --- MAIN CONTACT CONTENT GRID (EXACTLY LIKE IMAGE_8C579E.PNG) --- */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* LEFT SIDE: CONTACT INPUT FORM CONTAINER (Occupies 2 columns) */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-gray-800 tracking-wide">
            Fill out the form
          </h2>
          
          <form 
            className="space-y-4 text-xs italic text-gray-400" 
            onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}
          >
            {/* Name and Email Input Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-[#f4f4f4] rounded-full px-5 py-3.5 text-gray-700 focus:outline-none border border-transparent focus:border-gray-200" 
                required 
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-[#f4f4f4] rounded-full px-5 py-3.5 text-gray-700 focus:outline-none border border-transparent focus:border-gray-200" 
                required 
              />
            </div>

            {/* Subject Input */}
            <div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full bg-[#f4f4f4] rounded-full px-5 py-3.5 text-gray-700 focus:outline-none border border-transparent focus:border-gray-200" 
              />
            </div>

            {/* Message Textarea */}
            <div>
              <textarea 
                rows="6" 
                placeholder="Message" 
                className="w-full bg-[#f4f4f4] rounded-2xl p-5 text-gray-700 focus:outline-none border border-transparent focus:border-gray-200 not-italic font-light resize-none" 
                required
              ></textarea>
            </div>

            {/* Popty Green Submission Action Button */}
            <div className="pt-2">
              <button 
                type="submit" 
                className="bg-[#8cc63f] hover:bg-[#7db335] text-white font-bold text-[10px] px-10 py-3.5 rounded-full uppercase tracking-widest transition duration-300 cursor-pointer shadow-2xs not-italic"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE: SIDEBAR EMBEDDED GOOGLE MAP COMPONENT */}
        <div className="w-full aspect-square md:max-w-sm lg:max-w-full border border-gray-200 p-1 bg-white shadow-2xs">
          <iframe 
            title="PetShop Location Map"
            className="w-full h-full opacity-95" 
            src="https://maps.google.com/maps?q=Jinnah%20Hospital%20Lahore&t=&z=14&ie=UTF8&iwloc=&output=embed" 
          ></iframe>
        </div>

      </div>

      {/* --- BOTTOM ROW: QUICK CONTACT AGENCY DETAILS --- */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-16 pt-10 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs text-gray-400 font-medium">
        <div className="space-y-1">
          <h4 className="text-gray-800 font-bold uppercase tracking-wider text-sm">Visit Our Main Agency</h4>
          <p className="leading-relaxed font-light">121 King Street, Melbourne<br />VIC 3000, Australia</p>
        </div>
        <div className="space-y-1">
          <h4 className="text-gray-800 font-bold uppercase tracking-wider text-sm">Direct Outreach</h4>
          <p className="font-light"><strong>Email:</strong> support@petshopdomain.com</p>
          <p className="font-light"><strong>Phone:</strong> (+1) 234 567 890</p>
        </div>
      </div>

    </div>
  );
}