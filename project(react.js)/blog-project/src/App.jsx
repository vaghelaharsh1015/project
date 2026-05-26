import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componets/navbar";
import Footer from "./componets/footer";
import Home from "./pages/home";
import Blog from "./pages/blog";
import AddBlog from "./pages/addblog";
import BlogDetails from "./pages/blogdetails";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/addblog" element={<AddBlog />} />
            <Route path="/blogdetails" element={<BlogDetails />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
