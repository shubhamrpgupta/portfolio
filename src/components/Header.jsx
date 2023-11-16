import React from 'react'
import { ImMenu3 } from "react-icons/im";

const Header = ({ openMenu, setOpenMenu }) => {
  return (
    <>
      <nav>
        <NavContent setOpenMenu={setOpenMenu} />
      </nav>

      <button className="navBtn" onClick={() => setOpenMenu(!openMenu)}>
        <ImMenu3 />
      </button>
    </>
  )
}


export const MiniNavbar = ({ openMenu, setOpenMenu }) => {
  return (
    <div className={`miniNavbar ${openMenu ? "miniNavbarOpen" : ""}`}>
      <NavContent setOpenMenu={setOpenMenu} />
    </div>
  )
}



const NavContent = ({ setOpenMenu }) => (
  <>
    <h2>Shubham.</h2>
    <div>
      <a href="#home" onClick={() => setOpenMenu(false)}>Home</a>
      <a href="#work" onClick={() => setOpenMenu(false)}>Work</a>
      <a href="#experience" onClick={() => setOpenMenu(false)}>Experience</a>
      <a href="#services" onClick={() => setOpenMenu(false)}>Services</a>
      <a href="#testimonial" onClick={() => setOpenMenu(false)}>Testimonial</a>
      <a href="#contact" onClick={() => setOpenMenu(false)}>Contact</a>
    </div>
    <a href="mailto:shubhmsgupta@gmail.com">
      <button>Email</button>
    </a>
  </>
)

export default Header