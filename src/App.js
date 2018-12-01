import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component ={Home}/>
            <Route exact path='/favorites' component ={Favorites}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
