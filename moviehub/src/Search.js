import React , { Component } from 'react'
import axios from 'axios'

class Search extends Component {

    state = {
        movieData: {}
    }

    HandleChange = (e) => {
        this.setState({
                search: e.target.value 
            })
        
        console.log(this.state.search)
        
    }

    HandleSubmit = (e) => {
        e.preventDefault();
        
        axios.get(`http://www.omdbapi.com/?t=${this.state.search}&apikey=cb3a98a0`)
            .then(res => {
                console.log(res);
                this.setState({
                    movieData: res.data
                })
            })
    }

    render(){

        const {
            Title,
            Released,
            Genre,
            Plot,
            Poster,
            imdbRating
        } = this.state.movieData;

        return(
            <div>
                <form onSubmit={this.HandleSubmit}>
                    <label htmlFor="search">Search:</label>
                    <input type="text" onChange={this.HandleChange} />
                    <button type="submit">Submit</button>
                </form>

                <div className="movie">
                    <h2>{Title}</h2>
                    <img src={Poster} alt=" missing" />
                    <p>Rating:{imdbRating}</p>
                    <p>Plot:{Plot}</p>
                    <p>Genre:{Genre}</p>
                    
                </div>
            </div>
        )
    }
}

export default Search