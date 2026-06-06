import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { FaMoneyBillWave, FaAtom, FaSmile } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Pet Adoption",
    img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=300",
  },
  {
    title: "Pet Grooming",
    img: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=300",
  },
  {
    title: "Pet Daycare",
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=300",
  },
  {
    title: "Dog Training",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300",
  },
];

const sampleProducts = [
  {
    id: 1,
    name: "Pawbits Joint",
    price: 134.0,
    category: "Food",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300",
    sale: true,
  },
  {
    id: 2,
    name: "Vitamin K2",
    price: 28.0,
    category: "Food",
    image: "https://images.unsplash.com/photo-1615087240969-eeff2fa558f2?w=300",
    sale: true,
  },
  {
    id: 3,
    name: "Maxxiflex+",
    price: 28.0,
    category: "Food",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=300",
    sale: false,
  },
  {
    id: 4,
    name: "Premier Pet+",
    price: 42.0,
    category: "Food",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300",
    sale: false,
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />

      {/* Welcome Section */}
      <section className="py-20">
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
                src="https://htmlbeans.com/html/petshop/images/img02.jpg "
                alt="Dog"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      
      <section
        className="bg-[#8cc63f] text-white pt-16 pb-24 relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://htmlbeans.com/html/petshop/images/img03.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header with Title and Bone Icon */}
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-extrabold uppercase tracking-widest text-white">
              What We Do
            </h2>
            <div className="flex justify-center items-center">
              <span className="text-white opacity-80 text-lg">🦴</span>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 1: Pet Adoption */}
            <div className="bg-white text-gray-800 flex flex-col sm:flex-row shadow-sm overflow-hidden h-full">
              <div className="sm:w-2/5 h-48 sm:h-auto relative">
                <img
                  src="https://htmlbeans.com/html/petshop/images/img04.jpg"
                  alt="Pet Adoption"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:w-3/5 p-6 flex flex-col justify-center space-y-2 bg-white">
                <h4 className="font-bold text-lg text-gray-900">
                  Pet Adoption
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  It is a long established fact that a reader looking at its
                  layout the point
                </p>
                <div className="pt-2">
                  <button className="text-xs font-bold text-[#00b2ff] hover:text-gray-900 transition uppercase tracking-wider flex items-center gap-1">
                    Read More <span className="text-[10px]">&gt;</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Pet Grooming */}
            <div className="bg-white text-gray-800 flex flex-col sm:flex-row shadow-sm overflow-hidden h-full">
              <div className="sm:w-2/5 h-48 sm:h-auto relative">
                <img
                  src="https://htmlbeans.com/html/petshop/images/img05.jpg"
                  alt="Pet Grooming"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:w-3/5 p-6 flex flex-col justify-center space-y-2 bg-white">
                <h4 className="font-bold text-lg text-gray-900">
                  Pet Grooming
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  It is a long established fact that a reader looking at its
                  layout the point
                </p>
                <div className="pt-2">
                  <button className="text-xs font-bold text-[#00b2ff] hover:text-gray-900 transition uppercase tracking-wider flex items-center gap-1">
                    Read More <span className="text-[10px]">&gt;</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: Pet Daycare */}
            <div className="bg-white text-gray-800 flex flex-col sm:flex-row shadow-sm overflow-hidden h-full">
              <div className="sm:w-2/5 h-48 sm:h-auto relative">
                <img
                  src="https://htmlbeans.com/html/petshop/images/img06.jpg"
                  alt="Pet Daycare"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:w-3/5 p-6 flex flex-col justify-center space-y-2 bg-white">
                <h4 className="font-bold text-lg text-gray-900">Pet Daycare</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  It is a long established fact that a reader looking at its
                  layout the point
                </p>
                <div className="pt-2">
                  <button className="text-xs font-bold text-[#00b2ff] hover:text-gray-900 transition uppercase tracking-wider flex items-center gap-1">
                    Read More <span className="text-[10px]">&gt;</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4: Dog Training */}
            <div className="bg-white text-gray-800 flex flex-col sm:flex-row shadow-sm overflow-hidden h-full">
              <div className="sm:w-2/5 h-48 sm:h-auto relative">
                <img
                  src="https://htmlbeans.com/html/petshop/images/img07.jpg"
                  alt="Dog Training"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:w-3/5 p-6 flex flex-col justify-center space-y-2 bg-white">
                <h4 className="font-bold text-lg text-gray-900">
                  Dog Training
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  It is a long established fact that a reader looking at its
                  layout the point
                </p>
                <div className="pt-2">
                  <button className="text-xs font-bold text-[#00b2ff] hover:text-gray-900 transition uppercase tracking-wider flex items-center gap-1">
                    Read More <span className="text-[10px]">&gt;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Petty Shop Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-8 bg-white">
        {/* Title & Subtitle */}
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-3xl font-bold text-gray-800 tracking-wider uppercase">
            Petty Shop
          </h2>
          <div className="flex justify-center items-center">
            <span className="text-[#8cc63f] text-sm"> Bone Icon 🦴</span>
          </div>
          <p className="text-xs text-gray-400 max-w-xl mx-auto leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout the point
          </p>
        </div>

        {/* Categories Box Filters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-center gap-4 mb-14">
          {[
            { label: "Cat", icon: "🐱" },
            { label: "Dog", icon: "🐶" },
            { label: "Birds", icon: "🦜" },
            { label: "Cages", icon: "🏠" },
            { label: "Foods", icon: "🛍️" },
          ].map((cat, idx) => (
            <button
              key={idx}
              className="group flex flex-col items-center justify-center w-full md:w-32 h-24 border border-gray-200 hover:border-[#8cc63f] bg-white transition-all cursor-pointer"
            >
              <span className="text-2xl mb-1 filter grayscale group-hover:grayscale-0 transition">
                {cat.icon}
              </span>
              <span className="text-xs font-semibold text-gray-500 group-hover:text-[#8cc63f]">
                {cat.label}
              </span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mb-12">
          {[
            {
              id: 1,
              name: "Pawbits Joint",
              price: 134.0,
              oldPrice: null,
              image: "https://htmlbeans.com/html/petshop/images/img08.jpg",
              sale: true,
              soldOut: false,
            },
            {
              id: 2,
              name: "Vitamin K2",
              price: 28.0,
              oldPrice: null,
              image: "https://htmlbeans.com/html/petshop/images/img09.jpg",
              sale: false,
              soldOut: false,
            },
            {
              id: 3,
              name: "Maxxiflex+",
              price: 28.0,
              oldPrice: null,
              image: "https://htmlbeans.com/html/petshop/images/img10.jpg",
              sale: true,
              soldOut: false,
            },
            {
              id: 4,
              name: "Premier Pet+",
              price: 42.0,
              oldPrice: null,
              image: "https://htmlbeans.com/html/petshop/images/img11.jpg",
              sale: false,
              soldOut: true,
            },
            {
              id: 5,
              name: "Calcium Pills",
              price: 30.0,
              oldPrice: null,
              image: "https://htmlbeans.com/html/petshop/images/img12.jpg",
              sale: false,
              soldOut: false,
            },
            {
              id: 6,
              name: "Vitamin D3",
              price: 42.0,
              oldPrice: 45.0,
              image: "https://htmlbeans.com/html/petshop/images/img13.jpg",
              sale: true,
              soldOut: false,
            },
            {
              id: 7,
              name: "Pets Puriest",
              price: 28.0,
              oldPrice: null,
              image: "https://htmlbeans.com/html/petshop/images/img14.jpg",
              sale: false,
              soldOut: false,
            },
            {
              id: 8,
              name: "Nutri-Pooch",
              price: 58.0,
              oldPrice: 62.0,
              image: "https://htmlbeans.com/html/petshop/images/img15.jpg",
              sale: false,
              soldOut: false,
            },
          ].map((product) => (
            <div key={product.id} className="bg-white flex flex-col text-left">
              {/* Product Frame with Light Border */}
              <div className="relative aspect-[4/5] border border-gray-200 p-4 flex items-center justify-center bg-white mb-3 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />

                {/* Blue Circular Sale Badge */}
                {product.sale && (
                  <span className="absolute top-2 right-2 bg-[#00b2ff] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Sale!
                  </span>
                )}

                {/* Sold Out Text Overlay */}
                {product.soldOut && (
                  <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                    <span className="text-red-500 font-bold text-sm tracking-widest uppercase px-2 py-1 bg-white/95 border border-red-200 shadow-sm">
                      SOLD OUT!
                    </span>
                  </div>
                )}
              </div>

              {/* Product Name & Light Green Price */}
              <div className="px-1 space-y-1">
                <h3 className="font-bold text-gray-800 text-sm hover:text-[#8cc63f] transition duration-200">
                  <Link to={`/shop/product/${product.id}`}>{product.name}</Link>
                </h3>
                <div className="flex items-center gap-2 text-xs font-bold text-[#8cc63f]">
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through font-normal">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                  <span>${product.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rounded View All Button with Navigation Link */}
        <div className="text-center pt-6">
          <Link
            to="/shop"
            className="inline-block border border-[#8cc63f] text-[#8cc63f] hover:bg-[#8cc63f] hover:text-white font-bold text-xs px-10 py-3 rounded-full uppercase tracking-wider transition-all duration-300 shadow-sm"
          >
            View All
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header with Title and Bone Icon */}
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 tracking-wider uppercase">
              Our Gallery
            </h2>
            <div className="flex justify-center items-center">
              <span className="text-[#8cc63f] text-sm">🦴</span>
            </div>
          </div>

          {/* Masonry Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {/* Column 1: Left Big Vertical Image (Girl with puppy) */}
            <div className="h-[460px] overflow-hidden shadow-sm">
              <img
                src="https://htmlbeans.com/html/petshop/images/img17.jpg"
                alt="Girl with white puppy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Column 2: Middle Stack (Top and Bottom Images) */}
            <div className="flex flex-col gap-4 h-[460px]">
              {/* Top Image: Vet outdoors with dogs */}
              <div className="h-1/2 overflow-hidden shadow-sm">
                <img
                  src="https://htmlbeans.com/html/petshop/images/img18.jpg"
                  alt="Vet at animal shelter"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Bottom Image: Vet checking cat inside clinic */}
              <div className="h-1/2 overflow-hidden shadow-sm">
                <img
                  src="https://htmlbeans.com/html/petshop/images/img19.jpg"
                  alt="Doctor checking a cat"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Column 3: Right Stack (Top and Bottom Images) */}
            <div className="flex flex-col gap-4 h-[460px]">
              {/* Top Image: Cute little brown dog being checked */}
              <div className="h-1/2 overflow-hidden shadow-sm">
                <img
                  src="https://htmlbeans.com/html/petshop/images/img20.jpg"
                  alt="Little brown puppy treatment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Bottom Image: Two doctors with a white fluffy dog */}
              <div className="h-1/2 overflow-hidden shadow-sm">
                <img
                  src="https://htmlbeans.com/html/petshop/images/img21.jpg"
                  alt="Vets with white dog"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      {(() => {
        const slides = [
          {
            quote:
              "lagse var pn Aavse mja yaar ",
            author: " - devayat khavad",
          },
          {
            quote:
              "A Sparrow can never be a falcon..",
            author: "- devayat khavad",
          },
          {
            quote:
              "Finding eco-friendly cages and real organic salmon oil used to be very difficult. Petty has the best curated items with complete safety checks. Highly recommended for all loving pet owners!",
            author: "- Alex Mercer -",
          },
        ];

        const [current, setCurrent] = React.useState(0);

        const nextSlide = () => {
          setCurrent(current === slides.length - 1 ? 0 : current + 1);
        };

        const prevSlide = () => {
          setCurrent(current === 0 ? slides.length - 1 : current - 1);
        };

        return (
          <section 
            className="text-white py-20 relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('https://htmlbeans.com/html/petshop/images/img22.jpg')" }}
          >
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-12 relative z-10 text-center">
              {/* Blue Message Box Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-10 h-10 border-2 border-[#00b2ff] flex items-center justify-center rounded-xs">
                  <span className="text-[#00b2ff] text-base font-bold leading-none">
                    💬
                  </span>
                </div>
              </div>

              {/* Slider Controls Content Frame */}
              <div className="relative px-6 md:px-12 min-h-[140px] flex items-center justify-center">
                {/* Left Navigation Arrow Button */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-white hover:text-[#8cc63f] font-light text-2xl transition cursor-pointer select-none p-2 z-20"
                >
                  &lt;
                </button>

                {/* Active Review Quote Content */}
                <div className="space-y-6 transition-all duration-500 ease-in-out transform">
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed tracking-wide font-light max-w-2xl mx-auto italic">
                    "{slides[current].quote}"
                  </p>

                  {/* Author Name */}
                  <h4 className="text-[#8cc63f] font-bold text-sm tracking-widest uppercase pt-2">
                    {slides[current].author}
                  </h4>
                </div>

                {/* Right Navigation Arrow Button */}
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-[#8cc63f] font-light text-2xl transition cursor-pointer select-none p-2 z-20"
                >
                  &gt;
                </button>
              </div>

              {/* Bottom Navigation Dots Indicators */}
              <div className="flex justify-center items-center gap-2.5 mt-8">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`rounded-full inline-block cursor-pointer transition-all duration-300 ${
                      current === index
                        ? "w-3 h-3 bg-white"
                        : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </section>
          
        );
        
      })()}

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header Section */}
          <div className="text-center space-y-2 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 tracking-wider uppercase">
              Our Blog
            </h2>
            <div className="flex justify-center items-center">
              <span className="text-[#8cc63f] text-sm">🦴</span>
            </div>
          </div>

          {/* 3-Column Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Blog Card 1 */}
            <div className="flex flex-col text-center items-center group">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 shadow-xs mb-6">
                <img 
                  src="https://htmlbeans.com/html/petshop/images/img23.jpg" 
                  alt="Blog 1" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Floating Date Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#8cc63f] text-white px-3 py-1 text-[10px] font-bold uppercase text-center leading-tight shadow-sm">
                  Mar<br />18
                </div>
              </div>
              {/* Meta details */}
              <div className="text-[11px] text-[#00b2ff] flex items-center gap-1 mt-2 mb-2 font-medium">
                <span>💬 34 Comments</span>
                <span className="text-gray-300">/</span>
                <span className="text-gray-400">By Admin</span>
              </div>
              {/* Heading */}
              <h3 className="font-bold text-gray-800 text-sm md:text-base leading-snug max-w-xs hover:text-[#8cc63f] transition duration-200 cursor-pointer">
                All this mistaken idea of denouncing pleasure and praise pain
              </h3>
            </div>

            {/* Blog Card 2 */}
            <div className="flex flex-col text-center items-center group">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 shadow-xs mb-6">
                <img 
                  src="https://htmlbeans.com/html/petshop/images/img24.jpg" 
                  alt="Blog 2" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Floating Date Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#8cc63f] text-white px-3 py-1 text-[10px] font-bold uppercase text-center leading-tight shadow-sm">
                  Nov<br />26
                </div>
              </div>
              {/* Meta details */}
              <div className="text-[11px] text-[#00b2ff] flex items-center gap-1 mt-2 mb-2 font-medium">
                <span>💬 16 Comments</span>
                <span className="text-gray-300">/</span>
                <span className="text-gray-400">By Admin</span>
              </div>
              {/* Heading */}
              <h3 className="font-bold text-gray-800 text-sm md:text-base leading-snug max-w-xs hover:text-[#8cc63f] transition duration-200 cursor-pointer">
                But because occasionally circumstan occur in which toil and pain
              </h3>
            </div>

            {/* Blog Card 3 */}
            <div className="flex flex-col text-center items-center group">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 shadow-xs mb-6">
                <img 
                  src="https://htmlbeans.com/html/petshop/images/img25.jpg" 
                  alt="Blog 3" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Floating Date Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#8cc63f] text-white px-3 py-1 text-[10px] font-bold uppercase text-center leading-tight shadow-sm">
                  Dec<br />04
                </div>
              </div>
              {/* Meta details */}
              <div className="text-[11px] text-[#00b2ff] flex items-center gap-1 mt-2 mb-2 font-medium">
                <span>💬 23 Comments</span>
                <span className="text-gray-300">/</span>
                <span className="text-gray-400">By Admin</span>
              </div>
              {/* Heading */}
              <h3 className="font-bold text-gray-800 text-sm md:text-base leading-snug max-w-xs hover:text-[#8cc63f] transition duration-200 cursor-pointer">
                There anyone who loves or pursues or desires to obtain pain of itself
              </h3>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
