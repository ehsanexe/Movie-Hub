import React, { Component } from 'react';
import Search from './Search'
import MovieCard from './MovieCard'
import axios from 'axios'

class App extends Component {

  state = {
    movieData: {},
    movieCard: {}
  }
  
  searchData = (mData) => {
    //let data = [...this.state.movieData,mData];
    this.setState({
      movieData: mData
    })

    console.log("App:",this.state.movieData)
  }

  OnClickMovie = (id) => {
    console.log("id:",id)
    
    axios.get(`http://www.omdbapi.com/?i=${id}&apikey=cb3a98a0`)
            .then(res => {
                console.log(res);
                this.setState({
                    movieCard: res.data
                })
              });
  }

  render () {
    return(
      <div className="App">
        <h1>Search</h1>
        <Search searchData={this.searchData} OnClickMovie={this.OnClickMovie}/>
        <MovieCard data={this.state.movieCard}/>
        
      </div>
    )
  }
}

export default App;
