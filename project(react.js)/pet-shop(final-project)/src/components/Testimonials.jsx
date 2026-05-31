import React, { useState } from 'react';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const testimonials = [
    {
      id: 1,
      text: '"It is a long established fact that a reader will be distracted by the readable content of when looking at its layout the point of using Lorem Ipsum is that it has a more-or-less normal opposed to using content here its making it look like readable."',
      author: 'Christiana Doe'
    },
    {
      id: 2,
      text: '"It is a long established fact that a reader will be distracted by the readable content of when looking at its layout the point of using Lorem Ipsum is that it has a more-or-less normal opposed to using content here its making it look like readable."',
      author: 'Christiana Doe'
    },
    {
      id: 3,
      text: '"It is a long established fact that a reader will be distracted by the readable content of when looking at its layout the point of using Lorem Ipsum is that it has a more-or-less normal opposed to using content here its making it look like readable."',
      author: 'Christiana Doe'
    }
  ];

  const handlePrev = () => {
    setActiveSlide(activeSlide === 1 ? 3 : activeSlide - 1);
  };

  const handleNext = () => {
    setActiveSlide(activeSlide === 3 ? 1 : activeSlide + 1);
  };

  return (
    <section className="relative py-15 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none flex flex-wrap items-center justify-around">
        <span className="w-25 h-25 bg-cyan-primary rounded-full m-5"></span>
        <span className="w-25 h-25 bg-cyan-primary rounded-full m-5"></span>
        <span className="w-25 h-25 bg-cyan-primary rounded-full m-5"></span>
        <span className="w-25 h-25 bg-cyan-primary rounded-full m-5"></span>
        <span className="w-25 h-25 bg-cyan-primary rounded-full m-5"></span>
        <span className="w-25 h-25 bg-cyan-primary rounded-full m-5"></span>
      </div>

      <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-175 mx-auto text-center">
          <div className="text-12 text-cyan-primary mb-6">
            <i className="far fa-comment-dots"></i>
          </div>

          <div className="relative min-h-50">
            {testimonials.map((testi) => (
              <div
                key={testi.id}
                className={`absolute w-full transition-opacity duration-500 ${
                  activeSlide === testi.id ? 'opacity-100 relative' : 'opacity-0'
                } px-5`}
              >
                <blockquote className="text-4 font-medium text-text-primary leading-loose mb-4 italic">
                  {testi.text}
                </blockquote>
                <cite className="text-3.5 text-cyan-primary font-bold block not-italic">
                  - {testi.author} -
                </cite>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handlePrev(); }}
              className="w-10 h-10 border-2 border-cyan-primary rounded-full flex items-center justify-center text-cyan-primary text-4 transition-all hover:bg-cyan-primary hover:text-white"
            >
              <i className="fas fa-chevron-left"></i>
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleNext(); }}
              className="w-10 h-10 border-2 border-cyan-primary rounded-full flex items-center justify-center text-cyan-primary text-4 transition-all hover:bg-cyan-primary hover:text-white"
            >
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((testi) => (
              <a
                key={testi.id}
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveSlide(testi.id); }}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeSlide === testi.id ? 'bg-cyan-primary' : 'bg-gray-300'
                }`}
              ></a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
