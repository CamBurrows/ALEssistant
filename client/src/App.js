import React, { Component } from 'react';
import Navbar from './components/Navbar'
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
        <Route path="/" component={Navbar} />
      </Router>
    );
  }
}

export default App;
