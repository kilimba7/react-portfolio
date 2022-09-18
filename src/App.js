import React, { useState } from "react";
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [ tabs ] = useState([
    {
      name: 'Portfolio',
      description: 'find what streaming service your favorite movies are on',
    },
    {
      name: 'Resume',
      description: 'find and create recipes',
    }
  ]);

  const [ currentTab, setCurrentTab ] = useState(tabs[0]);

  return (
    <div>
      <Nav
        tabs={tabs}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
      {!contactSelected ? (
          <>
            <Portfolio currentTab={currentTab}></Portfolio>
            <About></About>
          </>
        ) : (
            <Contact></Contact>
          )}
      </main>
    </div>
  );
}

export default App;
