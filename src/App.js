import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginNav from "./components/LoginNav";
import Brewing from "./pages/Brewing";
import Home from "./pages/Home";
import Ingredients from "./pages/Ingredients";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
