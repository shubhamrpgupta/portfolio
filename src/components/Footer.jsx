import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Creater" />
                <h2>Shubham Gupta</h2>
                <p>VICTORY LOVES PREPARATION</p>
            </div>

            <aside>
                <h2>Follow me</h2>
                <article>
                    <a href="http://linkedin.com/in/shubham-gupta-a2b35a166" target={"blank"}>
                        <AiFillLinkedin />
                    </a>
                    <a href="https://instagram.com" target={"blank"}>
                        <AiFillInstagram />
                    </a>
                    <a href="https://github.com/shubhamrpgupta" target={"blank"}>
                        <AiFillGithub />
                    </a>
                </article>

            </aside>
            <a href="#home">
                <AiOutlineArrowUp />
            </a>
        </footer>
    )
}

export default Footer