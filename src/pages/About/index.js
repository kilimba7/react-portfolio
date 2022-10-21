import React from 'react';
import coverImage from "../../assets/cover/avatar.jpg";

function About() {
    return(
        <section>
      
            <div className='card'>
            <img src={coverImage} className="prof-img" style={{ width: "20%" }} alt="cover" />
            <h1 className='my-2'>Bio</h1>
                <p>
                Front-end web developer utilizing my healthcare background to create inclusive and user friendly apps, built
with best practices in mind. Recently earned a certificate in full stack development from the University of
Minnesota Coding Bootcamp. Some of my strengths include communication, troubleshooting/testing and
creativity.
                </p>
            </div>
        </section>
    );
}


export default About;