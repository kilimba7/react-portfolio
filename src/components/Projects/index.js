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
      url2: 'https://github.com/kilimba7/Movie-Finder',
      desc: 'Allows users to find their favorite movies and what platform they are available on'
    },
    {
      name: 'Apex-Filter',
      project: 'Portfolio',
      url1: 'https://gamer-6.herokuapp.com/',
      url2: 'https://github.com/kilimba7/apex-filter',
      desc: 'Connects users looking for a teammate to a filterable player pool'

    },
    {
      name: 'Recipe-Me',
      project: 'Portfolio',
      url1: 'https://community-recipe-calendar.herokuapp.com/',
      url2: 'https://github.com/kilimba7/Recipe-Me',
      desc: 'Users can share their favorite recipes, find a random one, and even create their own!'
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
