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
        
    }

    HandleSubmit = (e) => {
        e.preventDefault();
        
        axios.get(`http://www.omdbapi.com/?s=${this.state.search}&apikey=cb3a98a0`)
            .then(res => {
                console.log(res);
                this.setState({
                    movieData: res.data.Search
                })

                console.log("Search:",this.state.movieData)
                this.props.searchData(this.state.movieData)
            });
   
    }

    render(){

        const movieList = this.state.movieData;

        return(
            <div>
                <form onSubmit={this.HandleSubmit}>
                    <label htmlFor="search">Search:</label>
                    <input type="text" onChange={this.HandleChange} />
                    <button type="submit">Submit</button>
                </form>

                {   movieList.length > 0 ? (
                    movieList.map(movie => ( 
                    <div className="movieList" key={movie.imdbID}>
                        <h4>{movie.Title}</h4>
                        <p>{movie.Year}</p>
                        <img src={movie.Poster} alt=" missing" />
                    
                    </div>)) ): (<p>invalid search</p>)
                    
                }
            </div>
        )
    }
}

export default Search