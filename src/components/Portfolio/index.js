import React from 'react';
import recipe from "../../assets/small/project2.jpeg";
import movie from "../../assets/small/movie.jpeg";
import profile from "../../assets/small/profile.jpeg";


function Portfolio() {
    return(
        <section>
            <h1>Recipe-Me</h1>
            <img src={recipe} className="my-2" style={{ width: "40%" }} alt="recipe" />
            <div className='my-2'>
                <p> Share and create recipes
                </p>
            </div>
            <h1>Movie-Finder</h1>
            <img src={movie} className="my-2" style={{ width: "40%" }} alt="movie" />
            <div className='my-2'>
                <p> Find your favorite movies on the streaming service of your choice
                </p>
            </div>
            <h1>Profile Generator</h1>
            <img src={profile} className="my-2" style={{ width: "40%" }} alt="profile" />
            <div className='my-2'>
                <p> Generate a team profile
                </p>
            </div>
        </section>
    );
}


export default Portfolio;