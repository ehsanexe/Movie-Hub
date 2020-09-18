import React, { Component } from 'react';
import Search from './Search'
import MovieCard from './MovieCard'
import Navbar from './Navbar'
import { Route, BrowserRouter } from 'react-router-dom'


class App extends Component {



  render () {
    return(
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        {/* <Search searchData={this.searchData} OnClickMovie={this.OnClickMovie}/> */}
        {/* <MovieCard data={this.state.movieCard}/> */}
        <Route exact path='/' component={Search} />
        <Route path='/:imdbID' component={MovieCard} />
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
