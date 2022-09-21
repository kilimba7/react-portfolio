import React from 'react';
import coverImage from "../../assets/cover/avatar.jpg";

function About() {
    return(
        <section>
            <div className='card'>
            <h1 id='about'>Junior Dev</h1>
            <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
                <p>
                Welcome to my portfolio! I'm a junior dev, with a skill set in fullstack development. Some of my skills include 
                  Test Driven Development and Object Oriented Programming. I've attached two of my projects below. Thank you!
                </p>
            </div>
        </section>
    );
}


export default About;