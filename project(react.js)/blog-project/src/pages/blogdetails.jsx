import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

const BlogDetails = () => {
  const [searchParams] = useSearchParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const blogId = searchParams.get('id')

  useEffect(() => {
    if (!blogId) {
      navigate('/blog')
      return
    }

    const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || []
    const foundBlog = savedBlogs.find(b => b.id === parseInt(blogId))

    if (foundBlog) {
      setBlog(foundBlog)
    } else {
      alert('Blog not found!')
      navigate('/blog')
    }
    setLoading(false)
  }, [blogId, navigate])

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || []
      const updatedBlogs = savedBlogs.filter(b => b.id !== blog.id)
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs))
      alert('Blog deleted successfully!')
      navigate('/blog')
    }
  }

  if (loading) {
    return <div className="pt-20 text-center py-12">Loading...</div>
  }

  if (!blog) {
    return <div className="pt-20 text-center py-12">Blog not found</div>
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Back Button */}
          <button
            onClick={() => navigate('/blog')}
            className="text-blue-600 hover:text-blue-800 mb-6 flex items-center gap-2"
          >
            ← Back to Blogs
          </button>

          {/* Blog Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {blog.category}
              </span>
              <span className="text-gray-500 text-sm">{blog.createdAt}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{blog.description}</p>
          </div>

          {/* Blog Content */}
          <div className="prose max-w-none mb-8">
            <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
              {blog.content}
            </div>
          </div>

          {/* Actions */}
          <div className="border-t pt-6 flex gap-4">
            <button
              onClick={() => navigate('/blog')}
              className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition"
            >
              Close
            </button>
            <button
              onClick={handleDelete}
              className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
            >
              Delete Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails