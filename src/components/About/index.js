import React from 'react';
import coverImage from "../../assets/cover/avatar.jpg";

function About() {
    return(
        <section>
            
            <div className='parent'>
            <img src={coverImage} className="child" style={{ width: "20%" }} alt="cover" />
            </div>

            <div className='card'>
            <h1 className='my-2'>Bio</h1>
            
                <p>
                Welcome to my portfolio! I'm a junior dev, with a skill set in fullstack development. Some of my skills include 
                  Test Driven Development and Object Oriented Programming. I've attached two of my projects below. Thank you!
                </p>
            </div>
        </section>
    );
}


export default About;