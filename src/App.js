import React from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Realisations from "./pages/Realisations";
import Service from "./pages/Service";
import Mentions from "./pages/Mentions";
import GitHubProfile from "./components/GitHubProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Realisations" element={<Realisations />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/mentions" element={<Mentions />} />
        <Route path="/GitHubProfile" element={<GitHubProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
