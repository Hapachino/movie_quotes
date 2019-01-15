import React, { Component } from 'react';
import auth from '../hoc/auth';

class MovieQuote extends Component {
  render() {
    return (
      <div className="center">
        <h1>Movie Quotes</h1>
        <h5>He is the one.</h5>
      </div>
    );
  }
}

export default auth(MovieQuote);
