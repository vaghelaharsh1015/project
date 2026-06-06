import React, { useState } from "react";
import {
  FaMoneyBillWave,
  FaAtom,
  FaSmile,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function About() {
  // Team members list
  const teamMembers = [
    {
      name: "Jessie Bell",
      role: "Care Taker",
      img: "https://htmlbeans.com/html/petshop/images/img29.jpg",
    },
    {
      name: "Mark Antony",
      role: "Dog Trainer",
      img: "https://htmlbeans.com/html/petshop/images/img35.jpg",
    },
    {
      name: "Angelina",
      role: "Pet Adopter",
      img: "https://htmlbeans.com/html/petshop/images/img36.jpg",
    },
  ];

  return (
    <div className="animate-fadeIn bg-white">
      {/* Page Banner */}
      <div
        className="relative h-[45vh] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url('https://htmlbeans.com/html/petshop/images/img33.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold tracking-wide drop-shadow-sm uppercase">
          About us
        </h1>
      </div>

      {/* Welcome Section */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 items-center gap-16">
            {/* Left Content */}
            <div>
              <h2 className="text-6xl font-light text-center text-[#222] mb-6 uppercase">
                Welcome To Petty
              </h2>

              {/* Bone Divider */}
              <div className="flex justify-center mb-8">
                <span className="text-[#b7c84f] text-3xl">🦴</span>
              </div>

              <p className="text-center text-gray-500 leading-10 text-xl max-w-3xl mx-auto">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters as opposed to using content here
                its making it look like readable.
              </p>

              <div className="border-t border-gray-300 my-12"></div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-20 h-20 border-2 border-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaMoneyBillWave className="text-sky-500 text-3xl" />
                  </div>

                  <h3 className="text-2xl font-semibold text-[#222]">
                    Lowest Price
                  </h3>
                </div>

                <div>
                  <div className="w-20 h-20 border-2 border-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaAtom className="text-sky-500 text-3xl" />
                  </div>

                  <h3 className="text-2xl font-semibold text-[#222]">
                    Healthy Pets
                  </h3>
                </div>

                <div>
                  <div className="w-20 h-20 border-2 border-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaSmile className="text-sky-500 text-3xl" />
                  </div>

                  <h3 className="text-2xl font-semibold text-[#222]">
                    Happy People
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="/dog.png"
                alt="Dog"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Slider */}
      {(() => {
        const slides = [
          { quote: "lagse var pn Aavse mja yaar ", author: "- devayat khavad" },
          {
            quote: "A Sparrow can never be a falcon..",
            author: "- devayat khavad",
          },
          {
            quote:
              "Finding eco-friendly cages and real organic salmon oil used to be very difficult. Petty has the best curated items with complete safety checks.",
            author: "- Alex Mercer -",
          },
        ];
        const [current, setCurrent] = useState(0);
        return (
          <section
            className="bg-[#2d2d2d] text-white py-20 relative overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://htmlbeans.com/html/petshop/images/img22.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
            <div className="max-w-4xl mx-auto px-12 relative z-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-10 h-10 border-2 border-[#00b2ff] flex items-center justify-center rounded-xs">
                  <span className="text-[#00b2ff] text-base font-bold leading-none">
                    💬
                  </span>
                </div>
              </div>
              <div className="relative px-6 md:px-12 min-h-[120px] flex items-center justify-center">
                <button
                  onClick={() =>
                    setCurrent(current === 0 ? slides.length - 1 : current - 1)
                  }
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-white hover:text-[#8cc63f] font-light text-2xl transition cursor-pointer select-none p-2 z-20"
                >
                  &lt;
                </button>
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed italic max-w-2xl mx-auto">
                    "{slides[current].quote}"
                  </p>
                  <h4 className="text-[#8cc63f] font-bold text-sm tracking-widest uppercase">
                    {slides[current].author}
                  </h4>
                </div>
                <button
                  onClick={() =>
                    setCurrent(current === slides.length - 1 ? 0 : current + 1)
                  }
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-[#8cc63f] font-light text-2xl transition cursor-pointer select-none p-2 z-20"
                >
                  &gt;
                </button>
              </div>
              <div className="flex justify-center items-center gap-2 mt-6">
                {slides.map((_, idx) => (
                  <span
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`rounded-full inline-block cursor-pointer transition-all duration-300 ${current === idx ? "w-2.5 h-2.5 bg-white" : "w-1.5 h-1.5 bg-gray-600"}`}
                  ></span>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header Title with Bone Icon */}
          <div className="text-center space-y-2 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 tracking-wider uppercase">
              Our Team
            </h2>
            <div className="flex justify-center items-center">
              <span className="text-[#8cc63f] text-sm">🦴</span>
            </div>
          </div>

          {/* 3-Column Team Profile Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center space-y-3 flex flex-col items-center"
              >
              {/* Team Member Image */}
                <div className="relative w-full aspect-square overflow-hidden bg-gray-50 shadow-xs group cursor-pointer">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* High Fidelity Blue Color Filter Mask Overlay Like Image Right Card */}
                  <div className="absolute inset-0 bg-[#00b2ff]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white text-base">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center hover:bg-white hover:text-[#00b2ff] transition shadow-xs"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center hover:bg-white hover:text-[#00b2ff] transition shadow-xs"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center hover:bg-white hover:text-[#00b2ff] transition shadow-xs"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>

                {/* Member Specifications Names & Roles Labels */}
                <div className="space-y-0.5">
                  <h4 className="text-gray-900 font-bold text-sm tracking-wide">
                    {member.name}
                  </h4>
                  <p className="text-gray-400 text-xs font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
