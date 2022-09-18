import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Portfolio(props) {
    const { currentTab } = props;
    return(
        <section>
            <h1>{capitalizeFirstLetter(currentTab.name)}</h1>
            <p>{currentTab.description}</p>
            <PhotoList tab={currentTab.name} />
        </section>
    );
}


export default Portfolio;