import React from 'react';
import BlogCard from '../components/BlogCard';

const fullBlogSet = [
  { id: 1, title: 'Understanding Your Pet’s Nutrition Matrix', excerpt: 'Choosing alternative organic clean raw proteins safely over generic industrial heavy grain options.', date: 'May 12, 2026', author: 'Dr. Jane Collins', image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500' },
  { id: 2, title: 'Crucial Signs of Summer Dehydration', excerpt: 'How to monitor dynamic breathing loops, standard hydration checkpoints, and fresh water setups.', date: 'Apr 28, 2026', author: 'Markus Vance', image: 'https://images.unsplash.com/photo-1535268647977-a403b69fc756?w=500' },
  { id: 3, title: 'Dental Hygiene For Senior Canines', excerpt: 'Preventive scaling alternatives, organic bone chewing metrics, and plaque buildup diagnostics.', date: 'Mar 15, 2026', author: 'Dr. Jane Collins', image: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=500' }
];

export default function Blog() {
  return (
    <div className="animate-fadeIn">
      <div className="bg-brand-accent py-12 border-b border-brand-border text-center">
        <h1 className="text-3xl font-black text-brand-secondary uppercase tracking-wider">Journal & Advice</h1>
        <p className="text-xs text-brand-muted mt-2">Home &gt; Blog</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fullBlogSet.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}