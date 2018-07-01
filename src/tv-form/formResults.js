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
              <Link to={`/tvshow/${props.results[index].id}`} >
                <img src={props.results[index].poster_path === null ? 'http://via.placeholder.com/300x450' : `${link}${props.results[index].poster_path}`} alt={`${props.results[index].title} poster`} className="resultPoster" />
                <div>
                  <p>{props.results[index].name}</p>
                  <p>{props.results[index].first_air_date}</p>
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


// export class FormResults extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   render() {
//     const link = 'https://image.tmdb.org/t/p/w300';
//     return (
//       <ul id="results" >
//         {
//           this.props.results.map((element, index) => {
//             return (
//               <li key={index} onClick={this.handleClick}>
//                 <Link to={`/tvshow/${this.props.results[index].id}`} >
//                   <img src={this.props.results[index].poster_path === null ? 'http://via.placeholder.com/300x450' : `${link}${this.props.results[index].poster_path}`} alt={`${this.props.results[index].title} poster`} className="resultPoster" />
//                   <div>
//                     <p>{this.props.results[index].name}</p>
//                     <p>{this.props.results[index].first_air_date}</p>
//                   </div>
//                 </Link>
//               </li>
//             )
//           })
//         }
//       </ul>
//     );
//   }
// }
