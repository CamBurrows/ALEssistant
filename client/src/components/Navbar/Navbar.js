import React from 'React';
import 'Navbar.css';
import logout from "../../../public/images/logout-icon.svg";
import inventory from "../../../public/images/inventory-icon.svg";
import recipes from "../../../public/images/recipes-icon.svg";
import brewing from "../../../public/images/brewing-icon.svg";

const Navbar = (props) => (
<div className="container">
  <nav className="navbar navbar-light bg-light">
      <h2>Welcome back,</h2>
      <h1>{props.username}</h1>

      <ul className="ml-auto">
        <li><img src={inventory} /></li>
        <li><img src={recipes} /></li>
        <li><img src={brewing} /></li>
        <li><img src={logout} /></li>
      </ul>
      
  </nav>
</div>

)

export default Navbar;