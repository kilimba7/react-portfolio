import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Modal = ({ onClose, currentPhoto }) => {
  const { name, url1, url2, desc } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <p>{desc}</p>
        
        <a href={url1} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon= {faCloud}></FontAwesomeIcon>
      </a>
      <a href={url2} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon= {faGithub}></FontAwesomeIcon>
      </a>
    <br></br>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;