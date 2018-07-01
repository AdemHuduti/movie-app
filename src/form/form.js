import React from 'react';
import FormResults from './formResults';
import './form.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleClick() {
    document.getElementById('results').className = 'noDisplay';
    document.getElementById('searchInput').value = '';
  }


  // Method for search movies
  handleKeyUp() {
    document.getElementById('results').className = 'formResults';
    let val = document.getElementById('searchInput').value;

    if (val.length  < 3 || val === '') {
      document.getElementById('results').className = 'noDisplay';
      return;
    }

    const key = 'b6ae17c5481c2abdc5c03bc07d7186e7';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${val}&page=1&include_adult=false`

    fetch(url)
      .then(response => {
        // if (response.status !== 200) {
        //   console.log('Error: ' + response.status);
        //   return;
        // }
        

        response.json()
        .then(data => {
          const results = data.results;
          this.setState({ results });
        });
      })

      .catch(err => {
        console.log('Erro ', err);
      })
  }

  // state = {
  //   results: []
  // }

  // handleKeyUp = async () => {
  //   document.getElementById('results').className = 'formResults';
  //   let val = document.getElementById('searchInput').value;

  //   if (val === '' || !val) {
  //     document.getElementById('results').className = 'noDisplay';
  //   }

  //   const key = 'b6ae17c5481c2abdc5c03bc07d7186e7';
  //   const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${val}&page=1&include_adult=false`
  //   const api_call = await fetch(url);

  //   const data = await api_call.json();
  //   console.log(data)

  //   this.setState({
  //     results: data.results
  //   })


  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} id="form">
          <input
            // onKeyUp={this.handleKeyUp}
            onChange={this.handleKeyUp.bind(this)}
            id="searchInput"
            type="text"
            placeholder="Search a movie"
            required />
          <button className="myBtn">
            <i className="fa fa-search"></i>
          </button>
          <FormResults
            results={this.state.results}
            handleClick={this.handleClick.bind(this)}
          />
        </form>
      </div>

    );
  }
}
