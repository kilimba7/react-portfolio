import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return(
    <footer>
      <div className='card'>
      <a href="https://github.com/kilimba7" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon= {faGithub}></FontAwesomeIcon>
      </a>

      <a href="https://www.linkedin.com/in/kilimbadyauli/ " target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon= {faLinkedin}></FontAwesomeIcon>
      </a>

      </div>
  </footer>
    )
}



export default Footer;