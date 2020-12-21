import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Entrar from './pages/Entrar';
import Criar from './pages/Criar';
import Home from './pages/Home';
import Locutor from './pages/Locutor';


ReactDOM.render(
    <BrowserRouter>
      <Switch> 
        <Route exact path="/" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route path="/Login/Entrar" component={Entrar}/>
        <Route path="/Login/Criar" component={Criar}/>
        <Route path="/Locutor" component={Locutor}/>
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

