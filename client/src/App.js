import React, { Component } from 'react';
import Navbar from './components/Navbar';
import LoginNav from "./components/LoginNav";
import Inventory from "./components/Inventory";
import Brewing from './pages/Brewing.js';
import Home from './pages/Home.js';
// import Ingredients from './pages/Ingredients';
import Recipes from './pages/Recipes';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path="/" component={LoginNav} />   
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/brewing" component={Brewing} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/recipes" component={Recipes} />
        </Switch>
      </Router>
    );
  }
}

export default App;
