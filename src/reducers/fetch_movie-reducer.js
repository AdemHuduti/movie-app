import { FETCH_MOVIE } from '../actions';

export default function(state = {}, action) {  
  switch(action.type) {
    case FETCH_MOVIE:
      return [...state, ...action.payload.data.results.slice(0, 10)];

      default:
        return state;
  }
}