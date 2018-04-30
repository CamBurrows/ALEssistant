import React from 'react';
import './Navbar.css';
import Logout from "../../images/logout-icon.svg";
import Inventory from "../../images/inventory-icon.svg";
import Recipes from "../../images/recipes-icon.svg";
import Brewing from "../../images/brewing-icon.svg";

const Navbar = (props) => (
<div className="container">
  <nav className="navbar navbar-light bg-light">
      <h2>Welcome back,</h2>
      <h1>{props.username}</h1>

      <ul className="navbar-nav ml-auto">
        <li>Logout</li>
        <li>Inventory</li>
        <li>Recipes</li>
        <li>Brewing</li>
      </ul>
      
  </nav>
</div>

)

export default Navbar;