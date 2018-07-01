import { combineReducers } from 'redux';
import FetchMovieReducer from './fetch_movie-reducer';
import FetchTVShowsReducer from './fetch-tv-shows-reducer';

const rootReducer = combineReducers({
  movies: FetchMovieReducer,
  tv: FetchTVShowsReducer
  // state: (state = {}) => state
});

export default rootReducer;