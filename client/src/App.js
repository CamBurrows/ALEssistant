import React, { Component } from 'react';
import Navbar from './components/Navbar';
import LoginNav from "./components/LoginNav";
import Inventory from "./components/Inventory";
// import Home from "./pages/Home";
// import Brewing from "./pages/Brewing";
// import Ingredients from "./pages/Ingredients";
// import Recipes from "./pages/Recipes";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";


// import Brewing from "./pages/Brewing";
// import Home from "./pages/Home";
// import Ingredients from "./pages/Ingredients";
// import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path="/" component={Home} />
    
        <Route path="/Ingredients" component={Inventory} />
        </Switch>
      </Router>
    );

  }
}

export default App;
