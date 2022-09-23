import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {
   const {
      tabs = [],
      setCurrentTab,
      currentTab,
      contactSelected,
   } = props;

   useEffect(() => {
      document.title = capitalizeFirstLetter(currentTab.name);
   }, [currentTab]);

   return (
      <header className="flex-row px-1">

         <h1>
         Kilimba Dyauli
            <a href="http://kilimba7.github.io/react-portfolio" className="">
            </a>
         </h1> 
        
         <nav>
            <ul className="flex-row">
               {tabs.map((tab) => (
                  <li
                     className={`mx-1 ${currentTab.name === tab.name && !contactSelected && `navActive`
                        }`}
                     key={tab.name}
                  >
                     <span onClick={() => {
                        setCurrentTab(tab);
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

