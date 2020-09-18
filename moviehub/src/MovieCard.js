import React , { Component } from 'react'
import axios from 'axios'

class MovieCard extends Component{
    
    state = {
        movieCard: null
      }

    componentDidMount(){
        let id = this.props.match.params.imdbID;
        console.log("iimdbID:",id)
        axios.get(`http://www.omdbapi.com/?i=${id}&apikey=cb3a98a0`)
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
                    <h2>{this.state.movieCard.Title}</h2>
                    <p>{this.state.movieCard.Released}</p>
                    <img src={this.state.movieCard.Poster} alt=" missing" />
                    <p>Rating:{this.state.movieCard.imdbRating}</p>
                    <p>Plot:{this.state.movieCard.Plot}</p>
                    <p>Genre:{this.state.movieCard.Genre}</p>
                    
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