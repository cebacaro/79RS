import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "../components/Home";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Contact from "../components/Contact";
import Press from "../components/Press";
import Shows from "../components/Shows";

const MyRoutes = () => {
  return (
    <HashRouter>
      <div className="h-screen m-0 ">
        <div className="h-[100vh] flex flex-col ">
          <Header />
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Carousel />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/press" element={<Press />} />
              <Route path="/shows" element={<Shows />} />
            </Routes>
          </section>
          {/* <Footer /> */}
        </div>
      </div>
    </HashRouter>
  );
};

export default MyRoutes;
