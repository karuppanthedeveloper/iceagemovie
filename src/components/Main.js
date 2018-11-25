import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Roster from './Roster';
import Schedule from './flim/flim';
import characters from './characters/characters';
import Login from './login/login';
import forgot from './forgot/forgot';
import register from './register/register';
const Main = () => (
  <main className="container">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/characters' component={characters}/>
      <Route path='/story' component={Schedule}/>
      <Route path='/login' component={Login}/>
      <Route path='/forgot' component={forgot}/>
      <Route path='/register' component={register}/>
    </Switch>
  </main>
)

export default Main
