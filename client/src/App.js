import React, { Component } from 'react';
import Navbar from './components/Navbar';
import LoginNav from "./components/LoginNav";
import InventoryModal from "./components/InventoryModal";
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
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />   
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
