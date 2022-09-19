import React from 'react';
import projImage from "../../assets/small/project2.jpeg";

function Portfolio() {
    return(
        <section>
            <h1 id='about'>Junior Dev</h1>
            <img src={projImage} className="my-2" style={{ width: "40%" }} alt="cover" />
            <div className='my-2'>
                <p> yesssss
                </p>
            </div>
        </section>
    );
}


export default Portfolio;