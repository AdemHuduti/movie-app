import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Pick extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="test">
            <h1 className="display-4 mb-4 res_h1">REACT<span className="under">MOVIE</span>APP</h1>
            <h3 className="mb-5 res_h3">Find out the most popular movies and TV shows</h3>
            <Link to="/cards" className="btn btn-outline-dark mr-4 btn-lg">Movies</Link>
            <Link to="/tv" className="btn btn-outline-dark btn-lg">TV Shows</Link>
          </div>
        </div>
      </div>
    )
  }
}
