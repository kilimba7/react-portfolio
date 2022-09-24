import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faGlobe } from "@fortawesome/free-solid-svg-icons";

function Animation() {
    return(
        <article>
            <div>
            
            <span className='globe'><FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon> Kilimba </span>
            <h3 className='animate'>
            <FontAwesomeIcon icon={faCircleNotch} ></FontAwesomeIcon>
         </h3> 
         </div>

         </article>
        
    );
}


export default Animation;