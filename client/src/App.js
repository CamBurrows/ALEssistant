import React, { Component } from 'react';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import LoginNav from "./components/LoginNav";
import Brewing from "./pages/Brewing";
import Home from "./pages/Home";
import Ingredients from "./pages/Ingredients";
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Navbar} />
      </Router>
    );
  }
}

export default App;
