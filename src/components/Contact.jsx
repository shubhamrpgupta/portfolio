import React, { useState } from 'react';
import helloImg from "../assests/2.jpg";
import toast from "react-hot-toast";

const Contact = () => {
    const [input, setInput] = useState({ name: "", email: "", message: "" });

    const changeHandler = (evt) => {
        setInput({ ...input, [evt.target.name]: evt.target.value })
    }

    const submitHandler = (evt) => {
        evt.preventDefault();
        toast.success("Message Sent");
        setInput({ name: "", email: "", message: "" })
    }

    return (
        <div id="contact">
            <section>
                <form onSubmit={submitHandler}>
                    <h2>Contact Me</h2>
                    <input type="text" placeholder="Your Name" name="name"
                        value={input.name} onChange={changeHandler} />
                    <input type="email" placeholder="Your Email" name="email"
                        value={input.email} onChange={changeHandler} />
                    <input type="text" placeholder="Your Message" name="message"
                        value={input.message} onChange={changeHandler} />

                    <button type="submit">Send</button>
                </form>
            </section>
            <aside>
                <img src={helloImg} alt="Graphics" />
            </aside>
        </div>
    )
}

export default Contact