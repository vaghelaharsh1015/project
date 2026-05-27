import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">📝 BlogHub</h3>
            <p className="text-sm">Share your knowledge and learn from others.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition">
                  All Blogs
                </Link>
              </li>
              <li>
                <Link to="/addblog" className="hover:text-white transition">
                  Create Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">About</h4>
            <p className="text-sm">
              BlogHub is a platform for sharing and discovering amazing content about web development and technology.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">
            © 2024 BlogHub. All Rights Reserved. | Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
