import React from 'react';

function Nav(props) {
    const {
        aboutSelected,
        setAboutSelected
      } = props;
      


    return(
        <header className="flex-row px-1">
        <h2>
          <a href="/">
            Kilimba Dyauli
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className={`mx-2 ${aboutSelected && 'navActive'}`} >
              <a href="#about" onClick={() => setAboutSelected(true)}>
                About me
              </a>
            </li>
            <li>
            <span onClick={() => setAboutSelected(false)}>Contact</span>
            </li>
          </ul>
        </nav>
      </header>
    );
}


export default Nav;
