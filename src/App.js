import React, { useState } from "react";
import Header, { MiniNavbar } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact"
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <MiniNavbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Home />
      <Work />
      <Experience />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
