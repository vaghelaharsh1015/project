import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: 'https://htmlbeans.com/html/petshop/images/img23.jpg',
      date: { day: 18, month: 'MAR' },
      title: 'All this mistaken idea of denouncing pleasure and praise pain',
      comments: 34,
      author: 'Admin'
    },
    {
      id: 2,
      image: 'https://htmlbeans.com/html/petshop/images/img24.jpg',
      date: { day: 26, month: 'NOV' },
      title: 'But because occasionally circumstan occur in which toil and pain',
      comments: 16,
      author: 'Admin'
    },
    {
      id: 3,
      image: 'https://htmlbeans.com/html/petshop/images/img25.jpg',
      date: { day: 4, month: 'DEC' },
      title: 'There anyone who loves or pursues or desires to obtain pain of itself',
      comments: 23,
      author: 'Admin'
    }
  ];

  return (
    <section className="py-15 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-9 font-black text-text-dark uppercase tracking-widest text-center mb-3">Our Blog</h2>
        <div className="text-center mb-12.5">
          <svg width="46" height="22" viewBox="0 0 46 22" fill="none" className="inline-block">
            <circle cx="6" cy="6" r="5" stroke="#c8b96e" strokeWidth="1.8" />
            <circle cx="6" cy="16" r="5" stroke="#c8b96e" strokeWidth="1.8" />
            <circle cx="40" cy="6" r="5" stroke="#c8b96e" strokeWidth="1.8" />
            <circle cx="40" cy="16" r="5" stroke="#c8b96e" strokeWidth="1.8" />
            <rect x="10" y="8" width="26" height="6" rx="3" fill="#c8b96e" />
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-span-1">
              <div className="bg-white border border-border-light rounded-lg overflow-hidden transition-all hover:shadow-lg hover:border-cyan-primary">
                <div className="relative w-full h-62.5 bg-border-light overflow-hidden">
                  <img src={post.image} alt="blog" className="w-full h-full object-cover transition-transform hover:scale-108" />
                  <div className="absolute top-4 right-4 bg-green-primary text-white p-2 rounded text-center text-3">
                    <strong className="block text-4.5 leading-none">{post.date.day}</strong>
                    <span className="text-2.5">{post.date.month}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col">
                  <div className="text-3 text-text-tertiary mb-3 leading-relaxed">
                    <i className="far fa-comment"></i>
                    {post.comments} Comments / by <a href="#" className="text-cyan-primary">
                      {post.author}
                    </a>
                  </div>
                  <h5 className="text-4 font-bold text-text-dark leading-snug flex-grow">
                    <a href="#" className="hover:text-cyan-primary transition-colors">
                      {post.title}
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
