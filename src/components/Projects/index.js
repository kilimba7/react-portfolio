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
    },
    {
        name: 'Tech-Blog',
        project: 'Portfolio',
        description: 'https://morning-coast-35493.herokuapp.com/'
    },
    {
        name: 'Note-Taker',
        project: 'Portfolio',
        description: 'https://github.com/kilimba7/note-taker'
    },
    {
        name: 'Text-Editor',
        project: 'Portfolio',
        description: 'https://vast-caverns-25905.herokuapp.com/'
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
            className="project"
            key={image.name}
          />
        ))}

        
      </div>
    </div>
  );
};

export default Projects;
