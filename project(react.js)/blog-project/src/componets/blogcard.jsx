import { useNavigate } from 'react-router-dom'

const BlogCard = ({ blog }) => {
  const navigate = useNavigate()

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 flex flex-col">
      {/* Category Badge */}
      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mb-3 w-fit">
        {blog.category}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{blog.title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 flex-grow">
        {truncateText(blog.description, 100)}
      </p>

      {/* Date */}
      <p className="text-gray-400 text-xs mb-4">{blog.createdAt}</p>

      {/* Read More Button */}
      <button
        onClick={() => navigate(`/blogdetails?id=${blog.id}`)}
        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition font-medium"
      >
        Read More
      </button>
    </div>
  )
}

export default BlogCard