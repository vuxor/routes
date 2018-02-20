import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'reset-css/reset.css';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
