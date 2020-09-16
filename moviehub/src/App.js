import React, { Component } from 'react';
import Search from './Search'
import MovieCard from './MovieCard'

class App extends Component {

  state = {
    movieData: {}
  }
  
  movieCard = (mData) => {
    //let data = [...this.state.movieData,mData];
    this.setState({
      movieData: mData
    })

    console.log("App:",this.state.movieData)
  }

  render () {
    return(
      <div className="App">
        <h1>Search</h1>
        <Search movieCard={this.movieCard}/>
        <MovieCard data={this.state.movieData}/>
        
      </div>
    )
  }
}

export default App;
