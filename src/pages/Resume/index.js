import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload} from "@fortawesome/free-solid-svg-icons"
import resumeLink from "../../assets/resume/resume.pdf";

function Resume() {
    return(
        <section className='card'>
            <h2> Resume </h2>
            <ul >
                <li>React</li>
                <li>CSS</li>
                <li>HTML</li>
            </ul>
            <span className='icon'> Front End Skills <a href={resumeLink} download>
            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
          </a> </span>
            <ul >
                <li>MySql</li>
                <li>MongoDb</li>
                <li>NoSql</li>
            </ul>

            <span className='icon'> Back End Skills <a href={resumeLink} download>
            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
          </a> </span>

            <br/>

          
        </section>

    );
}


export default Resume;