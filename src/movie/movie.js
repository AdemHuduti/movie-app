import React from 'react';
import ShowMovie from './ShowMovie';
import './movie.css';

export default class Movie extends React.Component {
  
  componentDidMount() {
    this.getData();
  }

  state = {
    genres: [],
    vote_count: undefined,
    vote_average: undefined,
    release_date: undefined,
    overview: undefined,
    title: undefined,
    poster_path: undefined,
    credits: {
      crew: []
    }
  }

  getData = async () => {
    const { id } = this.props.match.params;
    const api_key = 'b6ae17c5481c2abdc5c03bc07d7186e7';
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US&append_to_response=credits`;
    const api_call = await fetch(url);

    const data = await api_call.json();
    this.setState({
      genres: data.genres,
      vote_count: data.vote_count,
      vote_average: data.vote_average,
      release_date: data.release_date,
      overview: data.overview,
      title: data.title,
      poster_path: data.poster_path
    });
  }

  render() {
    return (
      <div className="container">
        <ShowMovie
          genres={this.state.genres}
          vote_count={this.state.vote_count}
          vote_average={this.state.vote_average}
          release_date={this.state.release_date}
          overview={this.state.overview}
          title={this.state.title}
          poster_path={this.state.poster_path}
        />
      </div>
    );
  }
}
