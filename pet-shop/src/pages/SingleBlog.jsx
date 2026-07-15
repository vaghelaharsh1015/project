import React from 'react';
import { Link } from 'react-router-dom';

export default function SingleBlog() {
  // Mock data for latest posts widget
  const latestPosts = [
    { id: 101, title: "Many desktop publishing web page editors", time: "2 months ago", image: "https://htmlbeans.com/html/petshop/images/img55.jpg" },
    { id: 102, title: "Various versions have evols over the years", time: "1 day ago", image: "https://htmlbeans.com/html/petshop/images/img56.jpg" },
    { id: 103, title: "Lorem Ipsum is therefore always free", time: "5 mins ago", image: "https://htmlbeans.com/html/petshop/images/img57.jpg" }
  ];

  return (
    <div className="animate-fadeIn pb-20 bg-white font-sans text-left">
      
      {/* Page Banner */}
      <div className="relative h-[35vh] bg-cover bg-center flex items-center justify-center text-center px-4 mb-16 border-b border-gray-100"
        style={{
          backgroundImage: `url('https://htmlbeans.com/html/petshop/images/img33.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold tracking-widest uppercase drop-shadow-xs">
          Blog Details
        </h1>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-4 gap-12">
        
        {/* Left Side: Blog Content & Comments */}
        <main className="lg:col-span-3 space-y-6">
          
          {/* Cover Image */}
          <div className="relative w-full aspect-[16/10] max-h-[460px] overflow-hidden bg-gray-50 shadow-xs mb-8">
            <img 
              src="https://htmlbeans.com/html/petshop/images/img50.jpg" 
              alt="Blog Cover" 
              className="w-full h-full object-cover" 
            />
            {/* Floating Date Badge */}
            <div className="absolute bottom-0 left-0 bg-[#8cc63f] text-white px-4 py-2 text-xs font-bold uppercase text-center leading-tight shadow-sm z-10 select-none">
              18<br />Mar
            </div>
          </div>

          {/* Meta Information Loops */}
          <div className="text-[11px] text-[#00b2ff] flex items-center gap-1 font-medium tracking-wide">
            <span>💬 34 Comments</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-400">by Admin</span>
          </div>

          {/* Core Blog Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight tracking-wide">
            Mistaken idea of denouncing pleasure and praise pain
          </h1>

          {/* Paragraph Paragraphs Text Area */}
          <div className="text-xs md:text-sm text-gray-400 leading-relaxed font-light space-y-6 pt-2">
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
            </p>
            <p>
              Majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
            </p>
            <p>
              If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
            </p>
            <p>
              Randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
            </p>

            {/* Quote Block */}
            <div className="relative py-8 px-10 text-center max-w-2xl mx-auto select-none">
              <span className="absolute left-2 top-0 text-5xl font-serif text-[#8cc63f] leading-none">“</span>
              <p className="text-[#8cc63f] italic text-sm md:text-base leading-relaxed font-medium inline">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
              </p>
              <span className="absolute right-2 bottom-4 text-5xl font-serif text-[#8cc63f] leading-none">”</span>
            </div>

            <p className="pt-2">
              Majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
            </p>
          </div>

          {/* Share & Tags */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-4 border-t border-b border-gray-100 my-8 text-xs font-medium">
            <div className="flex items-center gap-2 text-gray-700 font-bold">
              <span>Share</span>
              <div className="flex gap-1.5 ml-2">
                <a href="#" className="w-6 h-6 rounded-full bg-gray-100 hover:bg-[#00b2ff] hover:text-white flex items-center justify-center text-[10px] text-gray-400 transition">f</a>
                <a href="#" className="w-6 h-6 rounded-full bg-gray-100 hover:bg-[#00b2ff] hover:text-white flex items-center justify-center text-[10px] text-gray-400 transition">t</a>
                <a href="#" className="w-6 h-6 rounded-full bg-gray-100 hover:bg-[#00b2ff] hover:text-white flex items-center justify-center text-[10px] text-gray-400 transition">in</a>
              </div>
            </div>
            <div className="text-gray-400 font-light">
              <span className="text-gray-700 font-bold">Tags:</span> Grooming, Helpcare, Training
            </div>
          </div>

          {/* Related Posts */}
          <div className="space-y-6 pt-4">
            <h3 className="text-base font-bold text-gray-800 uppercase tracking-wide">
              Related Posts
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
              <div className="space-y-3">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 shadow-xs">
                  <img src="https://htmlbeans.com/html/petshop/images/img61.jpg" alt="Related 1" className="w-full h-full object-cover" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#8cc63f] text-white px-2.5 py-0.5 text-[9px] font-bold uppercase text-center leading-tight shadow-2xs">
                    Mar<br />18
                  </div>
                </div>
                <div className="text-[10px] text-[#00b2ff] font-medium pt-1">💬 34 Comments / by Admin</div>
                <h4 className="font-bold text-gray-800 text-xs md:text-sm max-w-xs mx-auto leading-snug">
                  All this mistaken idea of denouncing pleasure and praise pain
                </h4>
              </div>

              <div className="space-y-3">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 shadow-xs">
                  <img src="https://htmlbeans.com/html/petshop/images/img62.jpg" alt="Related 2" className="w-full h-full object-cover" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#8cc63f] text-white px-2.5 py-0.5 text-[9px] font-bold uppercase text-center leading-tight shadow-2xs">
                    Nov<br />26
                  </div>
                </div>
                <div className="text-[10px] text-[#00b2ff] font-medium pt-1">💬 16 Comments / by Admin</div>
                <h4 className="font-bold text-gray-800 text-xs md:text-sm max-w-xs mx-auto leading-snug">
                  But because occasionally circumstan occur in which toil and pain
                </h4>
              </div>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-6 pt-12">
            <h3 className="text-base font-bold text-gray-800 uppercase tracking-wide">
              Comments(02)
            </h3>
            <div className="space-y-6 border-b border-gray-100 pb-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gray-200 text-white font-bold flex items-center justify-center select-none shrink-0 text-xl">👤</div>
                <div className="space-y-1 w-full">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-gray-700">Peter Jose</h4>
                    <button type="button" className="text-[10px] font-bold text-[#00b2ff] uppercase tracking-wide hover:underline cursor-pointer">Reply ↩</button>
                  </div>
                  <p className="text-gray-400 text-xs font-light leading-relaxed">
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarsing hidden in the middle of text.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start pl-8 md:pl-16">
                <div className="w-12 h-12 bg-gray-200 text-white font-bold flex items-center justify-center select-none shrink-0 text-xl">👤</div>
                <div className="space-y-1 w-full">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-gray-700">Adam Joe</h4>
                    <button type="button" className="text-[10px] font-bold text-[#00b2ff] uppercase tracking-wide hover:underline cursor-pointer">Reply ↩</button>
                  </div>
                  <p className="text-gray-400 text-xs font-light leading-relaxed">
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarsing hidden in the middle of text.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comment Form */}
          <div className="space-y-6 pt-6">
            <h3 className="text-base font-bold text-gray-800 uppercase tracking-wide">
              Post a Comment
            </h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Comment Posted!'); }} className="space-y-4 text-xs italic text-gray-400">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-[#f4f4f4] rounded-full px-5 py-3 text-gray-700 focus:outline-none border border-transparent focus:border-gray-200"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-[#f4f4f4] rounded-full px-5 py-3 text-gray-700 focus:outline-none border border-transparent focus:border-gray-200"
                  required
                />
              </div>
              <div>
                <textarea 
                  rows="6" 
                  placeholder="Comments" 
                  className="w-full bg-[#f4f4f4] rounded-2xl p-5 text-gray-700 focus:outline-none border border-transparent focus:border-gray-200 not-italic font-light resize-none"
                  required
                ></textarea>
              </div>
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="bg-[#8cc63f] hover:bg-[#7db335] text-white font-bold text-[10px] px-8 py-3 rounded-full uppercase tracking-widest transition duration-300 cursor-pointer shadow-2xs"
                >
                  Post Comment
                </button>
              </div>
            </form>
          </div>

        </main>

        {/* Right Sidebar */}
        <aside className="space-y-10 border-l border-gray-100 lg:pl-8 font-sans">
          
          {/* Widget 1: Round Search Input */}
          <div className="relative flex items-center">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-[#f4f4f4] rounded-full pl-5 pr-10 py-2.5 text-xs italic text-gray-700 focus:outline-none border border-transparent focus:border-gray-200"
            />
            <span className="absolute right-4 text-gray-400 text-xs pointer-events-none">🔍</span>
          </div>

          {/* Widget 2: Categories lists with Paw Icons */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 text-sm tracking-wide uppercase">Categories</h3>
            <ul className="space-y-3 text-xs font-semibold text-gray-500">
              {['Pet Grooming', 'Pet Daycare', 'Pet Adoption', 'Dog Training', 'Pet Clinic'].map((cat, idx) => (
                <li key={idx} className="flex items-center gap-2 hover:text-[#8cc63f] transition cursor-pointer">
                  <span className="text-[#8cc63f] text-[10px]">🐾</span>
                  <span>{cat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Widget 3: Latest Posts Miniature List Widget */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 text-sm tracking-wide uppercase">Latest Posts</h3>
            <div className="space-y-4">
              {latestPosts.map((post) => (
                <div key={post.id} className="flex gap-3 bg-white group cursor-pointer">
                  <div className="w-14 h-14 border border-gray-200 flex-shrink-0 p-0.5 bg-white overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="space-y-0.5 flex flex-col justify-center">
                    <h4 className="font-bold text-gray-700 text-xs hover:text-[#8cc63f] transition line-clamp-2 leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-[10px] text-sky-400 font-medium">{post.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Widget 4: Archives lists with Paw Icons */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 text-sm tracking-wide uppercase">Archives</h3>
            <ul className="space-y-3 text-xs font-semibold text-gray-500">
              {['January 2018', 'February 2018', 'March 2018', 'April 2018'].map((archive, idx) => (
                <li key={idx} className="flex items-center gap-2 hover:text-[#8cc63f] transition cursor-pointer">
                  <span className="text-gray-400 text-[10px]">🐾</span>
                  <span>{archive}</span>
                </li>
              ))}
            </ul>
          </div>

        </aside>

      </div>
    </div>
  );
}