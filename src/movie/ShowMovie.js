import React from 'react';
import { Link } from 'react-router-dom';

const ShowMovie = props => (
  <div>
    <div className="moviePage">
      <div className="poster">
        <img src={props.poster_path === null ? 'http://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/w300${props.poster_path}`} alt='poster' className="posterImg" />
      </div>

      <section className="movieDetails">
        <h2 className="sectionTitle mt-4">{props.title}</h2>
        <ul className="detailsList">
          <li><span className="bold">Release date:</span> {props.release_date}</li>
          <li><span className="bold">Rating:</span> {props.vote_average}</li>
          <li><span className="bold">Vote count:</span> {props.vote_count}</li>
          <li><span className="bold">Genres: </span> {props.genres.map((element, index) => {
            if (index < props.genres.length - 1) {
              return props.genres[index].name + ', '
            } else {
              return props.genres[index].name
            }
          })}
          </li> 
        </ul>
        <p>{props.overview}</p>
        <div>
          <Link className="btn btn-outline-dark" to="/cards">Back</Link>
        </div>
      </section>
    </div>
  </div>
)

export default ShowMovie;