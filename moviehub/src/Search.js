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
        
        axios.get(`http://www.omdbapi.com/?t=${this.state.search}&apikey=cb3a98a0`)
            .then(res => {
                console.log(res);
                this.setState({
                    movieData: res.data
                })

                console.log("Search:",this.state.movieData)
                this.props.movieCard(this.state.movieData)
            });
   
    }

    render(){

        

        return(
            <div>
                <form onSubmit={this.HandleSubmit}>
                    <label htmlFor="search">Search:</label>
                    <input type="text" onChange={this.HandleChange} />
                    <button type="submit">Submit</button>
                </form>

                
            </div>
        )
    }
}

export default Search