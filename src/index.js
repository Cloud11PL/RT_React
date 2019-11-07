import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Home from './scenes/home'; 
import About from './scenes/about';
import Contact from './scenes/contact';

ReactDOM.render( 
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
