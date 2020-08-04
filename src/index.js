import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import RegisterVideo from './pages/Register/Video';
import RegisterCategory from './pages/Register/Category';
import NotFound from './pages/NotFound';
import WatchVideo from './pages/WatchVideo';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/novo-video" component={RegisterVideo} />
      <Route path="/nova-categoria" component={RegisterCategory} />
      <Route path="/assistir/:videoId" exact component={WatchVideo} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
