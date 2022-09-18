import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        tabs = [],
        setCurrentTab,
        currentTab,
        tabSelected,
        setTabSelected
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
            <li className={`mx-2 ${tabSelected && 'navActive'}`} >
              <a href="#about" onClick={() => setTabSelected(false)}>
                About me
              </a>
            </li>
            <li>
            <span onClick={() => setTabSelected(true)}>Contact</span>
            </li>
            {tabs.map((tab) => (
              <li 
              className={`mx-1 ${
                currentTab.name === tab.name && !tabSelected && `navActive`
                }`}
              key={tab.name}
              >
                <span onClick={() => {
                    setCurrentTab(tab);
                    setTabSelected(false);
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
