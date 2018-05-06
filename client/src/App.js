import React, { Component } from 'react';
import Brewing from './pages/Brewing.js';
import Home from './pages/Home.js';
import Inventory from './pages/Inventory.js';
import Recipes from './pages/Recipes.js';
import Landing from './pages/Landing.js'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  
  state = {
    user:null,
    loggedIn: false
  }

  storage = window.localStorage; 
  
  login = (data) => {
    this.setState({user:data});
    this.storage.setItem('user', JSON.stringify(data));
    this.setState({
      loggedIn: false,
    })
  }

  logout = () => {
    this.setState = {
      user: null
    }
    this.storage.removeItem('user');
  }
  

  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" render={(props) => (
            this.storage.getItem('user') ? (
              <Redirect to="/home"/>
            ) : (
              <Landing login={this.login}/>
            )
          )}/>

          <Route path="/home" render={(props) => (
            !this.storage.getItem('user') ? (
              <Redirect to="/"/>
            ) : (
              <Home logout={this.logout} />
            )
          )}/>

          <Route path="/brewing" render={(props) => (
            !this.storage.getItem('user') ? (
              <Redirect to="/"/>
            ) : (
              <Brewing logout={this.logout}/>
            )
          )}/>

          <Route path="/inventory" render={(props) => (
            !this.storage.getItem('user') ? (
              <Redirect to="/"/>
            ) : (
              <Inventory logout={this.logout}/>
            )
          )}/>

          <Route path="/recipes" render={(props) => (
            !this.storage.getItem('user') ? (
              <Redirect to="/"/>
            ) : (
              <Recipes logout={this.logout}/>
            )
          )}/>
          
        </Switch>
      </Router>
    );
  }
}

export default App;
