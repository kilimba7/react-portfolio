import React from 'react';
import Projects from '../../components/Projects';


function Portfolio(props) {
  const { currentTab } = props;
  return (
    <section>
    <div className='card'>
      <h1>Projects</h1>
      
     <p >{currentTab.url1} </p>
   
     
      <Projects project={currentTab.name} />
    </div>   
    </section>
  );
}
export default Portfolio;