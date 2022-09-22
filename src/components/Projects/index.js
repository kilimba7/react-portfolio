import React, { useState } from 'react';

const Projects = ({ project }) => {
  const [photos] = useState([
    {
      name: 'Movie-Finder',
      project: 'Portfolio',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'portfolio',
      project: 'Portfolio',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Profile',
      project: 'Portfolio',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
  ]);

  const currentPhotos = photos.filter(photo => photo.project === project);
  
  
  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
        //   TODO: Ask what .default does 
            src={require(`../../assets/small/${i}.jpeg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
        
      </div>
    </div>
  );
};

export default Projects;
