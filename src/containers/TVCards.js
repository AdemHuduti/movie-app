import _ from 'lodash';
import React, { Component } from 'react';
import NavBar from './NavBar';
import Form from '../tv-form/form';
import { connect } from 'react-redux';
import { fetchTVShows } from '../actions';
import { Link } from 'react-router-dom';

class TVCards extends Component {
  componentDidMount() {
    this.props.fetchTVShows();
  }

  getTvShowsData() {
    const { tv } = this.props;
    return _.map(tv, (item, index) => {
      let img = 'https://image.tmdb.org/t/p/w300' + item.backdrop_path;
      return (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={img} alt="altimg" />
          </div>

          <div className="card-body">
            <div className="text-left">
              <h4 className="mb-3 card-title"> {item.name}</h4>
            </div>
            <span className="small movie-vote float-right">{item.vote_average}</span>
            <small className="date-text">{item.first_air_date}</small>
            <span className="small float-right movie-more mt-3">
              <Link to={`/tvshow/${item.id}`}>
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
        <div className="container">
          <div className=" text-center mt-2">
            <h2 className="display-4 mrg-top">Top rated TV shows</h2>
          </div>
            <Form />
          <div className="row justify-content-md-start ">
            {this.getTvShowsData()}
          </div>
        </div>
      </div>
    )
  }
}

function mapStatToProps(state) {
  return { tv: state.tv }
}

export default connect(mapStatToProps, { fetchTVShows })(TVCards)
