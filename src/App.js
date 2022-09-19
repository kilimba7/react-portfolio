import React, { useState } from "react";
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from "./components/Footer";
import Nav from './components/Nav';

function App() {
  const [ tabs ] = useState([
    {
      name: '',
    },
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
         <About></About>
      ) :
      currentTab.name === 'Portfolio' ? (
         <Portfolio currentTab={currentTab}></Portfolio>
      ) :
      currentTab.name === 'Contact' ? (
         <Contact currentTab={currentTab}></Contact>
      ) :
      currentTab.name === 'Resume' ? (
        <Resume currentTab={currentTab}></Resume>
     ) :
      <></>
      }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;