import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload} from "@fortawesome/free-solid-svg-icons"
import resumeLink from "../../assets/resume/resume.pdf";

function Resume() {
    return(
        <section>
            <h1>
            <a href={resumeLink} download>
            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
          </a>
                  Front End Skills</h1>
           
            <ul className='my-2'>
                <li>React</li>
                <li>CSS</li>
                <li>HTML</li>
            </ul>
            <h1>
            <a href={resumeLink} download>
            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
          </a>
                  Back End Skills</h1>
            <ul className='my-2'>
                <li>MySql</li>
                <li>MongoDb</li>
                <li>NoSql</li>
            </ul>

            <br/>

          
        </section>

    );
}


export default Resume;