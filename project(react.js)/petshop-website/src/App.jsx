import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Header from '../components/Header'
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Shop from '../pages/Shop';
import ProductDetails from '../pages/ProductDetails';
import Blog from '../pages/Blog';
import BlogDetails from '../pages/BlogDetails';
import Contact from '../pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen selection:bg-brand-primary selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/product/:id" element={<ProductDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;