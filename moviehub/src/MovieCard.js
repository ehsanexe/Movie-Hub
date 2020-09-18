import React , { Component } from 'react'
import axios from 'axios'

class MovieCard extends Component{
    
    state = {
        movieCard: null
      }

    componentDidMount(){
        let id = this.props.match.params.imdbID;
        console.log("imdbID:",id)
        const API_KEY = process.env.REACT_APP_OMDB_API_KEY
        axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
            .then(res => {
                console.log(res);
                this.setState({
                    movieCard: res.data
                })
              });
      }  

    render() {
        const movieCard = this.state.movieCard ? (
                <div className="container">
                    <div className="col s12 m7"></div>
                    <div className="header">
                        <h2>{this.state.movieCard.Title}</h2>
                        <p>{this.state.movieCard.Released}</p>
                    </div>
                    <div className="card horizontal">
                        
                        <img className="card-image" src={this.state.movieCard.Poster} alt=" missing" />
                        <div className="card-content">
                            <p>Rating: {this.state.movieCard.imdbRating} <i class="tiny material-icons">star</i></p>
                            <br/>
                            <p>Director: {this.state.movieCard.Director}</p>
                            <p>Actors: {this.state.movieCard.Actors}</p>
                            <p>Writer: {this.state.movieCard.Writer}</p>
                            <p>Genre: {this.state.movieCard.Genre}</p>
                            <br/>
                            <p>Plot: {this.state.movieCard.Plot}</p>
                            
                        </div>
                        
                    </div>
                    
                    
                    
                </div>
        ) : (
            <>
            <p> Loading.. </p>
            </>
        )

        return (
            <>
            {movieCard}
            </>
        )
    }
   
}
    // const {
    //     Title,
    //     Released,
    //     Genre,
    //     Plot,
    //     Poster,
    //     imdbRating
    // } = data;

    // if(!Title)
    // {
    //     return null
    // }

    // return(

        
    //     <div className="movie">
    //                 <h2>{Title}</h2>
    //                 <p>{Released}</p>
    //                 <img src={Poster} alt=" missing" />
    //                 <p>Rating:{imdbRating}</p>
    //                 <p>Plot:{Plot}</p>
    //                 <p>Genre:{Genre}</p>
                    
    //     </div>
        
    // )


export default MovieCard