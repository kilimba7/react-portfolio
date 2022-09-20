import React from 'react';
import recipe from "../../assets/small/0.jpeg";
import movie from "../../assets/small/2.jpeg";



function Portfolio() {
    return(
        <section>
            
            <div className='card'>
            <h3>Recipe-Me</h3>
            <img src={recipe} className="my-2" style={{ width: "90%" }} alt="recipe" />
            <a href="https://github.com/kilimba7/recipe-me">Github</a>
            <br/>
            <a href="https://darioorbita.github.io/Movie-Finder/">Deployed site</a>
            </div>

            <div className='card'>
            <h3>Movie-Finder</h3>
            <img src={movie} className="my-2" style={{ width: "90%" }} alt="movie" />
            <a href="https://github.com/kilimba7/movie-finder">Github</a>
            <br/>
            <a href="https://community-recipe-calendar.herokuapp.com/">Deployed site</a>
            </div>



           
        </section>
    );
}


export default Portfolio;