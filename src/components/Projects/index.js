import React, { useState } from 'react';
import Modal from "../Modal";

const Projects = ({ project }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
  

    {
      name: 'Movie-Finder',
      project: 'Portfolio',
      url1: 'https://darioorbita.github.io/Movie-Finder/',
      url2: 'https://github.com/kilimba7/Movie-Finder'
    },
    {
      name: 'Apex-Filter',
      project: 'Portfolio',
      url1: 'https://gamer-6.herokuapp.com/',
      url2: 'https://github.com/kilimba7/apex-filter'

    },
    {
      name: 'Recipe-Me',
      project: 'Portfolio',
      url1: 'https://community-recipe-calendar.herokuapp.com/',
      url2: 'https://github.com/kilimba7/Recipe-Me'
    },
   
  ]);

  const currentPhotos = photos.filter(photo => photo.project === project);
  
  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };
  
  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
        //   TODO: Ask what .default does 
            src={require(`../../assets/small/${i}.jpeg`)}
            alt={image.name}
            className="project"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
          
        ))}

        

        
      </div>
      
    </div>
  );
};

export default Projects;
