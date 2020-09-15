import React , { Component } from 'react'
import axios from 'axios'

class Search extends Component {

    state = {
        search:"",
        movieName: "",
        image:"",
        rating: "",
        plot:"",
        genre:""
    }

    HandleChange = (e) => {
        this.setState({
                search: e.target.value 
            })
        
        console.log(this.state.search)
        
    }

    HandleSubmit = (e) => {
        e.preventDefault();
        const input = this.state.search;
        axios.get(`http://www.omdbapi.com/?t=${this.state.search}&apikey=cb3a98a0`)
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

    render(){
        return(
            <div>
                <form onSubmit={this.HandleSubmit}>
                    <label htmlFor="search">Search:</label>
                    <input type="text" onChange={this.HandleChange} />
                    <button type="submit">Submit</button>
                </form>

                <div className="movie">
                    <h1>{this.state.movieName}</h1>
                    <img src={this.state.image} alt=" missing" />
                    <p>Rating:{this.state.rating}</p>
                    <p>Plot:{this.state.plot}</p>
                    <p>Genre:{this.state.genre}</p>
                </div>
            </div>
        )
    }
}

export default Search