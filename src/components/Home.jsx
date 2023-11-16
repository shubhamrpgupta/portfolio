import React, { useRef } from 'react';
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import imgSrc from "../assests/1.png";

const Home = () => {

  const totalClient = useRef(null);
  const totalProjects = useRef(null);

  const animationTotalClient = () => {
    animate(0, 25, {
      duration: 1.1,
      onUpdate: (value) => totalClient.current.textContent = value.toFixed()
    })
  }

  const animationTotalProjects = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (value) => totalProjects.current.textContent = value.toFixed()
    })
  }

  const animation = {
    h1: {
      initial: { x: "-100%", opacity: 0 }, whileInView: { x: 0, opacity: 1 },
    },
    button: {
      initial: { y: "-100%", opacity: 0 }, whileInView: { y: 0, opacity: 1 },
    },
  }

  return (
    <div id="home">

      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi, I Am <br /> Shubham Gupta
          </motion.h1>

          <Typewriter options={{
            strings: ["A Developer", "A Learner", "An Engineer"],
            autoStart: true,
            loop: true,
            wrapperClassName: "typewriterparagraph",
            cursor: ""
          }} />

          <div>
            <a href="mailto:shubhmsgupta@gmail.com"> Hire Me </a>
            <a href="#work"> Projects <BsArrowUpRight /> </a>
          </div>

          <article>
            <p>+
              <motion.span ref={totalClient} whileInView={animationTotalClient}></motion.span>
            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>+
                <motion.span ref={totalProjects} whileInView={animationTotalProjects} ></motion.span>
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>shubhmsgupta@gmail.com</span>
            </article>
          </aside>
        </div>
      </section >

      <section>
        <img src={imgSrc} alt="Shubham" />
      </section>
      <BsChevronDown />

    </div >
  )
}

export default Home;