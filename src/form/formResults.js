import React from 'react';
import { Link } from 'react-router-dom';
import './formResults.css';


const FormResults = props => {
  const link = 'https://image.tmdb.org/t/p/w300';
  const { results } = props;
  return (
    <div>
    <ul id="results" >
      {
        results.map((element, index) => {
          return (
            <li key={index} onClick={props.handleClick}>
              <Link to={`/movie/${props.results[index].id}`} >
                <img src={props.results[index].poster_path === null ? 'http://via.placeholder.com/300x450' : `${link}${props.results[index].poster_path}`} alt={`${props.results[index].title} poster`} className="resultPoster" />
                <div>
                  <p>{props.results[index].title}</p>
                  <p>{props.results[index].release_date}</p>
                </div>
              </Link>
            </li>
          )
        })
      }
    </ul>
  </div>
  )
}

export default FormResults;