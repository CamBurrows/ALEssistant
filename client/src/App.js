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
  
  state = {
    user:null
  }
  
  storeAuth = (data) => {
    this.setState({user:data});
    console.log("App stored user data: " + this.state.user)
  }
  

  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" render={(props) => (
            this.state.user ? (
              <Redirect to="/home"/>
            ) : (
              <Landing storeAuth={this.storeAuth}/>
            )
          )}/>
          <Route path="/home" render={(props)=> <Home user={this.state.user} />} />
          <Route path="/brewing" render={(props)=> <Brewing user={this.state.user} />} />
          <Route path="/inventory" render={(props)=> <Inventory user={this.state.user} />} />
          {/* <Route path="/recipes" render={(props)=> <Recipes user={this.state.user} />} /> */}

        </Switch>
      </Router>
    );
  }
}

export default App;
