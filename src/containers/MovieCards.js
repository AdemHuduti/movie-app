import _ from 'lodash';
import React from 'react';
import From from '../form/form';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions';
import { Link } from 'react-router-dom';

class MovieCards extends React.Component {
  
  // Call method from actions
  componentDidMount() {
    this.props.fetchMovie();
  }

  // Create method for displaying movie and call it in render function
  movieData() {
    const { movies } = this.props;
    return _.map(movies, (item, index) => {
      let img = 'https://image.tmdb.org/t/p/w300' + item.backdrop_path;
      return (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={img} alt="altimg" />
          </div>

          <div className="card-body">
            <div className="text-left">
              <h4 className="mb-4"> {item.title}</h4>
            </div>
            
            <span className="small movie-vote float-right">{item.vote_average}</span>
            <small className="text-muted date-text">{item.first_air_date}</small>
              <span className="small float-right movie-more mt-3">
                <Link to={`/movie/${item.id}`}>
                  More
                </Link>
              </span>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div> 
        <NavBar /> 
        <div className="container ">
          <div className=" text-center mt-2">
            <h2 className="display-4 mrg-top ">Top rated movies</h2>
            <From />
          </div>
          <div className="row justify-content-md-start">
            {this.movieData()}
          </div>
        </div>
      </div>
    );
  };
};

// Get data here from reducer
function mapStateToProps(state) {
  return { movies: state.movies }
}

export default connect(mapStateToProps, { fetchMovie })(MovieCards);