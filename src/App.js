import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import BeerDetails from './components/pages/BeerDetails'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component ={Home}/>
            <Route exact path='/beer/:id' component={BeerDetails} />
            <Route exact path='/favorites' component ={Favorites}/>
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
