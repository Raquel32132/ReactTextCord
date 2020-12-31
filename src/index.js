import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Entrar from './pages/Entrar';
import Home from './pages/Home';
import Locutor from './pages/Locutor';
import Leitor from './pages/Leitor';


ReactDOM.render(
    <BrowserRouter>
      <Switch> 
        <Route exact path="/" component={Home}/>
        <Route path="/Entrar" component={Entrar}/>
        <Route path="/Locutor" component={Locutor}/>
        <Route path="/Leitor" component={Leitor}/>
        <Route exact path="/:roomId" component={Locutor}/>
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

