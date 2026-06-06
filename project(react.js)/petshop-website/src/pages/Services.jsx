import React from "react";

export default function Services() {
  const servicesList = [
    {
      title: "Pet Adoption",
      img: "https://htmlbeans.com/html/petshop/images/img04.jpg",
      desc: "It is a long established fact that a reader looking at its layout the point",
    },
    {
      title: "Pet Grooming",
      img: "https://htmlbeans.com/html/petshop/images/img05.jpg",
      desc: "It is a long established fact that a reader looking at its layout the point",
    },
    {
      title: "Pet Daycare",
      img: "https://htmlbeans.com/html/petshop/images/img06.jpg",
      desc: "It is a long established fact that a reader looking at its layout the point",
    },
    {
      title: "Dog Training",
      img: "https://htmlbeans.com/html/petshop/images/img07.jpg",
      desc: "It is a long established fact that a reader looking at its layout the point",
    },
  ];

  return (
    <div className="animate-fadeIn bg-white pb-20">
      
      {/* --- PAGE BANNER --- */}
      <div
        className="relative h-[45vh] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url('https://htmlbeans.com/html/petshop/images/img33.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold tracking-wide drop-shadow-sm">
          Services
        </h1>
      </div>

      {/* --- WHY CHOOSE US SECTION --- */}
      <section className="py-20 bg-white max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-2 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase tracking-widest">
            Why Choose Us
          </h2>
          <div className="flex justify-center items-center">
            <span className="text-[#8cc63f] text-sm">🦴</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-14 h-14 bg-[#00b2ff] text-white rounded-full flex items-center justify-center text-xl">
              🔖
            </div>
            <h4 className="font-bold text-gray-800 text-base">Quality & Caring</h4>
            <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
              It is a long established fact that a reader distracted by the readable content
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="w-14 h-14 bg-[#00b2ff] text-white rounded-full flex items-center justify-center text-xl">
              🛡️
            </div>
            <h4 className="font-bold text-gray-800 text-base">Insured & Checked</h4>
            <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
              It is a long established fact that a reader distracted by the readable content
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="w-14 h-14 bg-[#00b2ff] text-white rounded-full flex items-center justify-center text-xl">
              🏠
            </div>
            <h4 className="font-bold text-gray-800 text-base">Free Home Consulting</h4>
            <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
              It is a long established fact that a reader distracted by the readable content
            </p>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID TITLE --- */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-widest">
          Our Services
        </h2>
        <div className="w-10 h-0.5 bg-[#8cc63f] mx-auto mt-2"></div>
      </div>

      {/* --- SERVICES LIST GRID --- */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 flex flex-col sm:flex-row shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="sm:w-2/5 h-56 sm:h-auto relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:w-3/5 p-8 flex flex-col justify-center space-y-3 bg-white">
                <h4 className="font-bold text-xl text-gray-900 hover:text-[#8cc63f] transition-colors cursor-pointer">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.desc}
                </p>
                <div className="pt-3">
                  <button className="text-xs font-bold text-[#00b2ff] hover:text-gray-900 transition uppercase tracking-wider flex items-center gap-1">
                    Read More <span className="text-[10px]">&gt;</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECTION: WHAT WE DO --- */}
      <section
        className="bg-[#8cc63f] text-white pt-16 pb-24 mt-20 relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('https://htmlbeans.com/html/petshop/images/img03.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-extrabold uppercase tracking-widest text-white">
              What We Do
            </h2>
            <div className="flex justify-center items-center">
              <span className="text-white opacity-80 text-lg">Permanent 🦴</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {servicesList.map((service, index) => (
              <div key={index} className="bg-white text-gray-800 flex flex-col sm:flex-row shadow-sm overflow-hidden h-full">
                <div className="sm:w-2/5 h-48 sm:h-auto relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="sm:w-3/5 p-6 flex flex-col justify-center space-y-2 bg-white">
                  <h4 className="font-bold text-lg text-gray-900">{service.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{service.desc}</p>
                  <div className="pt-2">
                    <button className="text-xs font-bold text-[#00b2ff] hover:text-gray-900 transition uppercase tracking-wider flex items-center gap-1">
                      Read More <span className="text-[10px]">&gt;</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: GET APPOINTMENT (SAME TO SAME AS IMAGE_9ACDB2.PNG) --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header Title with Bone Icon */}
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 tracking-wider uppercase">
              Get Appointment
            </h2>
            <div className="flex justify-center items-center">
              <span className="text-[#8cc63f] text-sm">🦴</span>
            </div>
          </div>

          {/* Light Gray Outer Box Container */}
          <div className="bg-[#f4f4f4] max-w-4xl mx-auto p-8 md:p-12 shadow-xs">
            <form onSubmit={(e) => { e.preventDefault(); alert("Appointment Submitted!"); }} className="space-y-6 text-xs text-gray-400 italic">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name Input */}
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-white px-5 py-3.5 rounded-full focus:outline-none border border-transparent focus:border-gray-300 text-gray-700 placeholder-gray-400 shadow-2xs" 
                    required 
                  />
                </div>

                {/* Date Input with Inline Calendar Emoji */}
                <div className="relative flex items-center bg-white rounded-full px-5 py-3.5 shadow-2xs">
                  <input 
                    type="text" 
                    placeholder="Date" 
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400" 
                    required 
                  />
                  <span className="text-gray-400 pointer-events-none select-none text-sm">📅</span>
                </div>

                {/* Pet Type Input with Inline Paw Emoji */}
                <div className="relative flex items-center bg-white rounded-full px-5 py-3.5 shadow-2xs">
                  <input 
                    type="text" 
                    placeholder="Pet Type" 
                    className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400" 
                  />
                  <span className="text-gray-400 pointer-events-none select-none text-sm">🐾</span>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-white px-5 py-3.5 rounded-full focus:outline-none border border-transparent focus:border-gray-300 text-gray-700 placeholder-gray-400 shadow-2xs" 
                    required 
                  />
                </div>

                {/* Time Input with Inline Clock Emoji */}
                <div className="relative flex items-center bg-white rounded-full px-5 py-3.5 shadow-2xs">
                  <input 
                    type="text" 
                    placeholder="Time" 
                    onFocus={(e) => (e.target.type = "time")}
                    onBlur={(e) => (e.target.type = "text")}
                    className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400" 
                  />
                  <span className="text-gray-400 pointer-events-none select-none text-sm">🕒</span>
                </div>

                {/* Service Selection Dropdown Drop */}
                <div className="relative flex items-center bg-white rounded-full px-5 py-3.5 shadow-2xs">
                  <select className="w-full bg-transparent focus:outline-none text-gray-400 focus:text-gray-700 cursor-pointer appearance-none">
                    <option value="">Service we offered</option>
                    <option value="adoption">Pet Adoption</option>
                    <option value="grooming">Pet Grooming</option>
                    <option value="daycare">Pet Daycare</option>
                    <option value="training">Dog Training</option>
                  </select>
                  <span className="text-gray-400 pointer-events-none select-none text-[10px] ml-1">▼</span>
                </div>

              </div>

              {/* Centered Submit Button */}
              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  className="bg-[#8cc63f] hover:bg-[#7db335] text-white font-bold text-xs px-12 py-3.5 rounded-full uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-sm"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}