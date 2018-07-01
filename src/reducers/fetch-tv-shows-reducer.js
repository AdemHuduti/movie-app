import { FETCH_TV_SHOWS } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_TV_SHOWS:
      return [...state, ...action.payload.data.results.slice(0, 10)];

    default:
      return state;
  }
}