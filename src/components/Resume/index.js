import React from 'react';
import resumeLink from "../../assets/resume/resume.pdf";

function Resume() {
    return(
        <section>
            <h1>Front End Skills</h1>
            <ul className='my-2'>
                <li>React</li>
                <li>CSS</li>
                <li>HTML</li>
            </ul>
            <h1>Back End Skills</h1>
            <ul className='my-2'>
                <li>MySql</li>
                <li>MongoDb</li>
                <li>NoSql</li>
            </ul>

            <br/>

          <a href={resumeLink} download>PDF version of Resume available to download</a>
        </section>

    );
}


export default Resume;