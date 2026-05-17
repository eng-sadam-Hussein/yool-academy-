import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Academy from "./Pages/Academy";
import Programs from "./Pages/Programs";
import Consultancy from "./Pages/Consultancy";
import Events from "./Pages/Events";
import Blog from "./Pages/Blog";
import ApplyNow from "./Pages/ApplyNow";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/apply" element={<ApplyNow />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}