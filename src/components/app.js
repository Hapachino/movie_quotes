import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import MovieList from './movie_list';
import Nav from './nav';

const App = () => (
  <div>
    <Nav />
    <div className="container">
      <Route exact path="/" component={Home} />
      <Route path="/movie-list" component={MovieList} />
    </div>
  </div>
);

export default App;
