import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faEarthAfrica } from "@fortawesome/free-solid-svg-icons";

function Animation() {
    return(
        <article>
            <div>
            
            <span className='globe'><FontAwesomeIcon icon={faEarthAfrica}></FontAwesomeIcon> Kilimba </span>
            <h3 className='animate'>
            <FontAwesomeIcon icon={faSun} ></FontAwesomeIcon>
         </h3> 
         </div>

         </article>
        
    );
}


export default Animation;