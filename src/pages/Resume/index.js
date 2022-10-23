import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload} from "@fortawesome/free-solid-svg-icons"
import resumeLink from "../../assets/resume/resume.pdf";

function Resume() {
    return(
        <section className='card'>
            <h2 > Resume </h2>
           <div className='flex'>
            <ul >
                <h4> Front End Skills </h4>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>React</li>
                <li>HTML</li>
            </ul>
            
            <ul >
                <h4> Back End Skills</h4>
                <li>MongoDB</li>
                <li>GraphQL</li>
                <li>MySQL</li>
                <li>Node</li>
                <li>Express</li>
            </ul>
            </div>

            <span className='icon'> Download Resume <a href={resumeLink} download>
            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></a></span>
        

          
        </section>

    );
}


export default Resume;