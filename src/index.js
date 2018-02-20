import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'reset-css/reset.css';

import './index.css';
import App from './App';
import RouteDetail from './RouteDetail';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/route/:id" component={RouteDetail} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
