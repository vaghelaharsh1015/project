import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" w-full z-50 top-0 start-0 border-b bg-white border-gray-200 shadow-sm">
      <div className="max-w-6xl flex flex-wrap  justify-between mx-auto p-4">
        {/* Navigation Links */}

        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-row p-2  rounded-lg bg-gray-50  md:space-x-8 md:mt-0 ">
            <li>
              {/* Logo */}
              <Link to="/" className="space-x-3">
                <span className="self-center text-2xl font-bold text-blue-600 me-160">
                  📝 BlogHub
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-600 rounded md:bg-transparent md:text-blue-600 md:p-0 hover:text-blue-800"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/addblog"
                className="block py-2 px-3 text-white bg-green-600 rounded md:bg-transparent md:text-green-600 md:p-0 hover:bg-green-100 md:hover:bg-transparent"
              >
                Add Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
