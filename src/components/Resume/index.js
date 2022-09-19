import React from 'react';

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
        </section>
    );
}


export default Resume;