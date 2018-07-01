import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Movie from './movie/movie';
import MovieCards from './containers/MovieCards';
import TVCards from './containers/TVCards';
import TVShow from './tv/TVShow';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact={true}/>
        <Route path="/cards" component={MovieCards} />
        <Route path="/tv" component={TVCards} />
        <Route path="/movie/:id" component={Movie} />
        <Route path="/tvshow/:id" component={TVShow} />
      </Switch>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
