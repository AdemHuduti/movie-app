import React from 'react';
import ShowSeries from './ShowSeries';
import '../movie/movie.css';

export default class TVShow extends React.Component {
  
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
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}&language=en-US&append_to_response=credits`;
    const api_call = await fetch(url);

    const data = await api_call.json();
    console.log(data)

    this.setState({
      genres: data.genres,
      vote_count: data.vote_count,
      vote_average: data.vote_average,
      first_air_date: data.first_air_date,
      overview: data.overview,
      name: data.name,
      poster_path: data.poster_path
    });
  }

  render() {
    return (
      <div className="container">
        <ShowSeries
          genres={this.state.genres}
          vote_count={this.state.vote_count}
          vote_average={this.state.vote_average}
          first_air_date={this.state.first_air_date}
          overview={this.state.overview}
          name={this.state.name}
          poster_path={this.state.poster_path}
        />
      </div>
    );
  }
}

// https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US&append_to_response=credits
// https://api.themoviedb.org/3/tv/13579?api_key=b6ae17c5481c2abdc5c03bc07d7186e7&language=en-US&append_to_response=credits
// https://api.themoviedb.org/3/tv/42009?api_key=b6ae17c5481c2abdc5c03bc07d7186e7&language=en-US&append_to_response=credits