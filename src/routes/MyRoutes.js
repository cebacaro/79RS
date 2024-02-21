import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "../components/Home.js";
import Header from "../components/Header.js";
import Carousel from "../components/Carousel.js";
import About from "../components/About.js";
import Contact from "../components/Contact.js";
import Press from "../components/Press.js";
import Shows from "../components/Shows.js";

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
