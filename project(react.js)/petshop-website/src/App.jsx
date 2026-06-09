import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Services from "../src/pages/Services";
import Gallery from "../src/pages/Gallery";
import Shop from "../src/pages/Shop";
import ProductDetails from "../src/pages/ProductDetails";
import Cart from "../src/pages/Cart";
import Checkout from "../src/pages/Checkout";
import BlogDetails from "../src/pages/BlogDetails";
import Contact from "../src/pages/Contact";
import BlogStandard from "../src/pages/BlogStandard";
import SingleBlog from "../src/pages/SingleBlog";
import { CartProvider } from "./CartContext";
import { AuthProvider } from "./AuthContext";
import Login from "../src/pages/Login";
import Profile from "../src/pages/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen selection:bg-brand-primary selection:text-white">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
                <Route path="/blog-standard" element={<BlogStandard />} />
                <Route path="/single-blog" element={<SingleBlog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
            <Footer />
            <ToastContainer position="bottom-right" autoClose={3000} />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
