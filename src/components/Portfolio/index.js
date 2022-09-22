import React from 'react';
import Projects from '../Projects';


function Portfolio(props) {
  const { currentTab } = props;
  return (
    <section>
      <h1>Projects</h1>
      <p>{currentTab.description}</p>
      {currentTab.description}
      <Projects project={currentTab.name} />
      <a href="https://github.com/kilimba7/recipe-me">Github</a>
    </section>
  );
}
export default Portfolio;