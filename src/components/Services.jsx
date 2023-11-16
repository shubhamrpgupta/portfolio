import React from 'react';
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";

const Services = () => {
    return (
        <div id="services">
            <h2>Services</h2>
            <section>
                <div className="serviceBox1">
                    <h3>6+</h3>
                    <p>Months Experience</p>
                </div>
                <div className="serviceBox2">
                    <AiFillIeCircle />
                    <span>Web Development</span>
                </div>
                <div className="serviceBox3">
                    <AiFillAndroid />
                    <span>App Development</span>
                </div>
                <div className="serviceBox4">
                    <AiFillWindows />
                    <span>DesktopDevelopment</span>
                </div>
            </section>
        </div>
    )
}

export default Services