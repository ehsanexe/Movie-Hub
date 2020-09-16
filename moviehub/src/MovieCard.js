import React from 'react'

const MovieCard = ({data}) =>{
    
    const {
        Title,
        Released,
        Genre,
        Plot,
        Poster,
        imdbRating
    } = data;

    if(!Title)
    {
        return null
    }

    return(

        
        <div className="movie">
                    <h2>{Title}</h2>
                    <p>{Released}</p>
                    <img src={Poster} alt=" missing" />
                    <p>Rating:{imdbRating}</p>
                    <p>Plot:{Plot}</p>
                    <p>Genre:{Genre}</p>
                    
        </div>
        
    )
}

export default MovieCard