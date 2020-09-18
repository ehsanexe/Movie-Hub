import React , { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Search extends Component {

    state = {
        movieData: {},
        invalidSearch:null
    }

    HandleChange = (e) => {
        this.setState({
                search: e.target.value 
            })
        
    }

    HandleSubmit = (e) => {
        e.preventDefault();
        const API_KEY = process.env.REACT_APP_OMDB_API_KEY
        axios.get(`https://www.omdbapi.com/?s=${this.state.search}&apikey=${API_KEY}`)
            .then(res => {
                console.log(res);
                this.setState({
                    movieData: res.data.Search,
                    invalidSearch: "Try different keywords"
                })

                console.log("Search:",this.state.movieData)
                //this.props.searchData(this.state.movieData)
                
            });
   
    }

    render(){

        const movieList = this.state.movieData;

        return(
            <div className="container">
                <form  onSubmit={this.HandleSubmit}>
                    <br></br>
                    <label htmlFor="search">Search Movies/TV Shows:</label>
                    <input type="text" onChange={this.HandleChange} />
                    <button className="btn waves-effect waves-light" type="submit">
                    <i className="material-icons right">search</i>Search</button>
                </form>

                <div className="row">    
                {   movieList.length > 0 ? (
                    movieList.map(movie => ( 
                        
                        <div className="col s6 m3 " key={movie.imdbID}>
                            <div className="card medium" >
                                <div className="card-image">
                                    <img src={movie.Poster} alt="n/a" />
                                </div>
                                <div className="card-content">
                                    <Link to={'/' + movie.imdbID}>
                                    <p>{movie.Title}</p>
                                    <p >{movie.Year}</p>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        
                        )
                    ) ): (<p>{this.state.invalidSearch}</p>)
                    
                }
                </div>
            </div>
        )
    }
}

export default Search