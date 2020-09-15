import React , { Component } from 'react'
import axios from 'axios'

class Search extends Component {
    
    componentDidMount(){
        axios.get('http://www.omdbapi.com/?t=young+sheldon&apikey=cb3a98a0')
        .then(res => {
            console.log(res);
            this.setState({
                movieName: res.data.Title,
                image:res.data.Poster,
                rating: res.data.imdbRating,
                plot: res.data.Plot,
                genre: res.data.Genre
            })
        })
    }

    state = {
        movieName: "",
        image:"",
        rating: "",
        plot:"",
        genre:""
    }

    render(){
        return(
            <div>
                <form onSubmit={this.HandleSubmit}>
                    <label htmlFor="search">Search:</label>
                    <input type="text" id="searchInput" onChange={this.HandleChange} />
                    <button>Submit</button>
                </form>

                <div className="movie">
                    <h1>{this.state.movieName}</h1>
                    <img src={this.state.image} alt="image missing" />
                    <p>Rating:{this.state.rating}</p>
                    <p>Plot:{this.state.plot}</p>
                    <p>Genre:{this.state.genre}</p>
                </div>
            </div>
        )
    }
}

export default Search