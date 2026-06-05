import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';

const fullBlogSet = [
  { id: 1, title: 'Understanding Your Pet’s Nutrition Matrix', excerpt: 'Choosing alternative organic clean raw proteins safely over generic industrial heavy grain options.', date: 'May 12, 2026', author: 'Admin', image: 'https://htmlbeans.com/html/petshop/images/img23.jpg' },
  { id: 2, title: 'Crucial Signs of Summer Dehydration', excerpt: 'How to monitor dynamic breathing loops, standard hydration checkpoints, and fresh water setups.', date: 'Apr 28, 2026', author: 'Admin', image: 'https://htmlbeans.com/html/petshop/images/img24.jpg' },
  { id: 3, title: 'Dental Hygiene For Senior Canines', excerpt: 'Preventive scaling alternatives, organic bone chewing metrics, and plaque buildup diagnostics.', date: 'Mar 15, 2026', author: 'Admin', image: 'https://htmlbeans.com/html/petshop/images/img25.jpg' }
];

export default function BlogStandard() {
  return (
    <div className="animate-fadeIn bg-white pb-20">
      {/* Page Banner */}
         <div className="relative h-[45vh] bg-cover bg-center flex items-center justify-center text-center px-4 mb-16"
        style={{
          backgroundImage: `url('https://htmlbeans.com/html/petshop/images/img33.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold tracking-wide drop-shadow-sm">
          blog starder
        </h1>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fullBlogSet.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}