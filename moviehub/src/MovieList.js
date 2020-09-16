import React from 'react'

const MovieList = ({data}) =>{
    const {
        Title,
        Year,
        imdbID,
        Poster
        
    } = data;

    return(
        <>
        {console.log("MovieList:",data) }



        {/* <div className="movieList" key={data.imdbID}>
                                <h1>{data.Title}</h1>
                                <p>{data.Year}</p>
                                <img src={data.Poster} alt=" missing" />
                            
                            </div> */}
                
        </>
    )

    

    // return(
    //     <>
    //         {
    //             movieList.length > 0 ? (movieList.map(movie => {
    //                 <div className="movieList" key={movie.imdbID}>
    //                     <h1>{movie.Title}</h1>
    //                     <p>{movie.Year}</p>
    //                     <img src={movie.Poster} alt=" missing" />
                    
    //                 </div>
    //             })) :
    //             ( <p>Movie not found</p>)

    //         }
    //     </>
        
        
    // )

}

export default MovieList