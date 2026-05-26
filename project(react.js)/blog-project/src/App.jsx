import { useState } from "react";
import home from "./pages/home";
import addblog from "./pages/addblog";
import blog from "./pages/blog";
import blogdetails from "./pages/blogdetails";
import navbar from "./componets/navbar";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar>
          <ROUTES>
            <Route path="/" element={<Home />} />
            <Route path="/addblog" element={<addblog />} />
            <Route path="/blog" element={<blog />} />
            <Route path="/blogdetails" element={<blogdetails />} />
          </ROUTES>
        </Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;
