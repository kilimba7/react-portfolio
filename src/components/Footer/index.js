import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return(
    <footer>
      <div className='card'>
      <a href="https://github.com/kilimba7" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon= {faGithub}></FontAwesomeIcon>
      </a>

      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon= {faLinkedin}></FontAwesomeIcon>
      </a>

      </div>
  </footer>
    )
}



export default Footer;