import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
  return (
    <article className="group overflow-hidden bg-white border border-brand-border transition duration-300 hover:shadow-md">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 bg-brand-secondary text-white text-[11px] font-bold px-2 py-1 uppercase">
          {post.date}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-brand-secondary text-lg leading-snug group-hover:text-brand-primary transition duration-300 line-clamp-2">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="text-brand-muted text-xs mt-2 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="mt-4 pt-3 border-t border-brand-border flex justify-between items-center text-xs">
          <span className="text-brand-muted">By {post.author}</span>
          <Link to={`/blog/${post.id}`} className="text-brand-primary font-bold hover:text-brand-secondary transition uppercase tracking-wider">
            Read More &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}