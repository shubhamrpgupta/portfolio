import React from 'react';

const Testimonial = () => {
    return (
        <div id="testimonial">
            <h2>Testimonial</h2>
            <section>
                <TestimonialCard name={"Munis H. Khan"} designation={"Sr. Software Engineer at GlobalLogic"} feedback={"I mentored Shubham during his course from Udemy. He can learn totally new concepts and catch upto speed very quickly. He has a solid understanding of Back-End Development and is really passionate about applying Engineering Fundamentals to solve real world problems "} />

                <TestimonialCard name={"Vijay K. Tiwari"} designation={"Associate Partner at Blackrock"} feedback={"Shubham is a very smart and dedicated professional.As a full stack developer,he is also very savvy and goes above and beyond to crack the problems on the way.He will be a great addition to any team"} />

                <TestimonialCard name={"Shruti Negi"} designation={"Analyst at American Express"} feedback={"Shubham is a Software Developer by profession and a Problem Solver by nature. He has a knack of coming up with great ideas and executing them with diligently. His approach of exploring the bare basics of any new concept makes him very capable to master the field he is trying to get in. Apart from his tech capabilities,I observed him being extremly humble,greateful, and passionate about hid fields of interest"} />
            </section>
        </div>
    )
}

const TestimonialCard = ({ name, feedback, designation }) => (
    <article>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="User" />
        <h4>{name}</h4>
        <h6>{designation}</h6>
        <p>{feedback}</p>
    </article>
)

export default Testimonial