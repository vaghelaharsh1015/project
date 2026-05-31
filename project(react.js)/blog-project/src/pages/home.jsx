import { useMemo } from 'react'
// import Hero from '../componets/hero'
import BlogCard from '../componets/blogcard'

const Home = () => {
  const blogs = useMemo(() => {
    return JSON.parse(localStorage.getItem('blogs')) || []
  }, []).slice(0, 3)

  return (
    <div className="pt-20">
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-lg text-gray-600">Explore our latest blog posts and documentation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600">No blogs yet. <a href="/addblog" className="text-blue-600 hover:text-blue-800">Create one!</a></p>
              </div>
            )}
          </div>
          {blogs.length > 0 && (
            <div className="text-center mt-12">
              <a href="/blog" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                View All Articles
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home