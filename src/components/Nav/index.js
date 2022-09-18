import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        tabs = [],
        setCurrentTab,
        currentTab,
        contactSelected,
        setContactSelected
      } = props;
      
      useEffect(() => {
        document.title = capitalizeFirstLetter(currentTab.name);
      }, [currentTab]);

    return(
        <header className="flex-row px-1">
        <h2>
          <a href="/">
            Kilimba Dyauli
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className={`mx-2 ${contactSelected && 'navActive'}`} >
              <a href="#about" onClick={() => setContactSelected(false)}>
                About me
              </a>
            </li>
            <li>
            <span onClick={() => setContactSelected(true)}>Contact</span>
            </li>
            {tabs.map((tab) => (
              <li 
              className={`mx-1 ${
                currentTab.name === tab.name && !contactSelected && `navActive`
                }`}
              key={tab.name}
              >
                <span onClick={() => {
                    setCurrentTab(tab);
                    setContactSelected(false);
                  }}
                >
                  {capitalizeFirstLetter(tab.name)}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
}


export default Nav;
