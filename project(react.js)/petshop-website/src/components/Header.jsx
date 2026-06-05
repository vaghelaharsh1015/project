import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaShoppingCart,
} from "react-icons/fa";

import {
  FiUser,
  FiMail,
  FiPhone,
} from "react-icons/fi";

const Header = () => {
  return (
    <>
      {/* Top Header */}
      <div className="bg-[#ececec] relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-8 px-6">

          {/* Left Side */}
          <div className="flex gap-12">
            <div className="flex items-center gap-3">
              <FiMail className="text-sky-500 text-4xl" />
              <div>
                <h4 className="font-semibold text-black">Mail us:</h4>
                <p className="text-gray-500">petty@support.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FiPhone className="text-sky-500 text-4xl" />
              <div>
                <h4 className="font-semibold text-black">Call us:</h4>
                <p className="text-gray-500">(+1) 345 678 000</p>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 top-8 z-20">
            <div className="flex flex-col items-center text-center">
              <img
                src="/logo.png"
                alt="logo"
                className="w-16 mb-1"
              />
              <h1 className="text-5xl font-light text-[#222]">
                Petty
              </h1>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <div className="flex gap-3">

              <div className="w-9 h-9 rounded-full bg-gray-300 hover:bg-[#8cc63f] hover:text-white transition duration-300 flex items-center justify-center cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-9 h-9 rounded-full bg-gray-300 hover:bg-[#8cc63f] hover:text-white transition duration-300 flex items-center justify-center cursor-pointer">
                <FaTwitter />
              </div>

              <div className="w-9 h-9 rounded-full bg-gray-300 hover:bg-[#8cc63f] hover:text-white transition duration-300 flex items-center justify-center cursor-pointer">
                <FaLinkedinIn />
              </div>

            </div>

            <div className="flex items-center gap-6 ml-4">

              <div className="flex items-center gap-2 cursor-pointer">
                <FiUser className="text-sky-500" />
                <span>Account</span>
              </div>

              <div className="flex items-center gap-2 cursor-pointer">
                <FaShoppingCart className="text-sky-500" />
                <span>Cart</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-sky-500 h-[70px] relative">

        {/* White Curve */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-44 h-24 bg-white rounded-b-full z-0"></div>

        <div className="max-w-6xl mx-auto h-full flex justify-center items-center gap-20 text-white uppercase font-bold tracking-wide relative z-10">

          <Link
            to="/"
            className="hover:text-[#8cc63f] transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-[#8cc63f] transition duration-300"
          >
            About ▾
          </Link>

          <Link
            to="/shop"
            className="hover:text-[#8cc63f] transition duration-300"
          >
            Shop ▾
          </Link>

          {/* Space for Logo */}
          <div className="w-52"></div>

          <Link
            to="/blog"
            className="hover:text-[#8cc63f] transition duration-300"
          >
            Blog
          </Link>

          <Link
            to="/contact"
            className="hover:text-[#8cc63f] transition duration-300"
          >
            Contact Us
          </Link>

        </div>
      </nav>
    </>
  );
};

export default Header;