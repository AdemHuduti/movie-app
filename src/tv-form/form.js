import React from 'react';
import FormResults from './formResults';
import './form.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleClick() {
    document.getElementById('results').className = 'noDisplay';
    document.getElementById('searchInput').value = '';
  }

  handleKeyUp() {
    document.getElementById('results').className = 'formResults';
    let val = document.getElementById('searchInput').value;

    // if (val === '') {
    //   document.getElementById('results').className = 'noDisplay';
    // }
    if (val.length  < 3 || val === '') {
      document.getElementById('results').className = 'noDisplay';
      return;
    }

    const key = 'b6ae17c5481c2abdc5c03bc07d7186e7';
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=en-US&query=${val}&page=1&include_adult=false` 
    
    fetch(url)  
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }

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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="form">
          <input
            onKeyUp={this.handleKeyUp}
            id="searchInput"
            type="text"
            placeholder="Search a TV show"
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
