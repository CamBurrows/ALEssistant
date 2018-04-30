import React, { Component } from 'react';
import Brewing from './pages/Brewing.js';
import Home from './pages/Home.js';
import Ingredients from './pages/Ingredients';
import Recipes from './pages/Recipes';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

// import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/brewing" component={Brewing} />
          <Route path="/inventory" component={Ingredients} />
          <Route path="/recipes" component={Recipes} />
        </Switch>
      </Router>
    );
  }
}

export default App;
