import React, { useState } from "react";
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Nav from "./components/Nav";
import Footer from "./components/Footer";




//  We could also be following some better practices here, such as in "App.js" your state vars are being passed into another state in the same component,
//  which is just one example of how we could clean some things up a bit for a scalable solution. Don't be dismayed by this, though! 

function App() {
  const [ tabs ] = useState([
    {
      name: 'About Me',
    },
    {
      name: 'Portfolio',
    },
    {
      name: 'Contact',
    },
    {
      name: 'Resume',
    }
  ]);

  const [ currentTab, setCurrentTab ] = useState(tabs[0]);

  return (
    <div>
      <Nav
        tabs={tabs}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      ></Nav>
      <main>
      {currentTab.name === 'About Me' ? (
         <About />
      ) :
      currentTab.name === 'Portfolio' ? (
         <Portfolio currentTab={currentTab}></Portfolio>
      ) :
      currentTab.name === 'Contact' ? (
         <Contact />
      ) :
      currentTab.name === 'Resume' ? (
        <Resume />
     ) :
      <></>
      }
      </main>
      <Footer />
    </div>
  );
}

export default App;