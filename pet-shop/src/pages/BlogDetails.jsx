import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function BlogDetails() {
  const { id } = useParams();

  const activePost = {
    id: id || 1,
    title: 'Understanding Your Pet’s Nutrition Matrix deeply',
    author: 'Dr. Jane Collins',
    date: 'May 12, 2026',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1000',
    content: 'An intensive look down at standard processed commercial meat derivatives shows significant synthetic processing protocols that deplete original enzyme strains. Transitioning towards organic pathways requires a conscious scaling methodology to balance stomach biome conditions accurately.'
  };

  return (
    <div className="animate-fadeIn max-w-4xl mx-auto px-4 py-12">
      <div className="text-xs text-brand-muted mb-4">
        <Link to="/" className="hover:text-brand-primary">Home</Link> &gt; <Link to="/blog" className="hover:text-brand-primary">Blog</Link>  Details
      </div>

      <header className="mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-secondary leading-tight mb-3">
          {activePost.title}
        </h1>
        <div className="text-xs text-brand-muted flex gap-4">
          <span>By <strong>{activePost.author}</strong></span>
          <span>•</span>
          <span>{activePost.date}</span>
        </div>
      </header>

      <div className="border border-brand-border mb-8 bg-gray-100">
        <img src={activePost.image} alt={activePost.title} className="w-full object-cover max-h-[450px]" />
      </div>

      <div className="prose max-w-none text-brand-muted text-sm leading-relaxed space-y-6">
        <p>{activePost.content}</p>
        <p className="border-l-4 border-brand-primary p-4 bg-brand-accent italic">
          "Ensuring clean ingredient disclosure strings is vital when evaluating your animal’s structural wellness index."
        </p>
      </div>
    </div>
  );
}