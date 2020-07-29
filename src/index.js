import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import RegisterVideo from './pages/Register/Video';
import RegisterCategory from './pages/Register/Category';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={RegisterVideo}/>
      <Route path="/cadastro/categoria" component={RegisterCategory}/>
      <Route component={() => (<div>Página 404</div>)}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
