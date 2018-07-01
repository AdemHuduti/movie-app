import axios from 'axios';

export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_TV_SHOWS = 'FETCH_TV_SHOWS'; 

// Api key
const API_KEY = 'b6ae17c5481c2abdc5c03bc07d7186e7';
// Top rated movies
const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
// Top rated tv-shows
const URL_TV = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`

// Fetch movie function
export function fetchMovie() {
  const request = axios.get(URL);

  return {
    type: FETCH_MOVIE,
    payload: request
  };
};

// Fetch tv shows function
export function fetchTVShows() {
  const request = axios.get(URL_TV);

  return {
    type: FETCH_TV_SHOWS,
    payload: request
  };
};