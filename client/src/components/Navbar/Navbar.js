import React from 'react';
import './Navbar.css';

const Navbar = (props) => (
  <nav className="navbar navbar-light bg-light">
      <h2>Welcome back,</h2>
      <h1>{props.username}</h1>

      <ul className="nav justify-content-end">
      <li className="nav-item">
          <div>
            <div className = "row icon">
              <img className = "nav-icon" src="/images/home.png" alt=""/>
            </div>
            <div className = "row">
              <p>Home</p>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <div>
            <div className = "row icon">
              <img className = "nav-icon" src="/images/inventory.png" alt=""/>
            </div>
            <div className = "row">
              <p>Ingredients</p>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <div>
            <div className = "row icon">
              <img className = "nav-icon" src="/images/recipes.png" alt=""/>
            </div>
            <div className = "row">
              <p>Recipes</p>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <div>
            <div className = "row icon">
              <img className = "nav-icon" src="/images/brewing.png" alt=""/>
            </div>
            <div className = "row">
              <p>Brewing</p>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <div>
            <div className = "row">
              <img className = "nav-icon" src="/images/logout.png" alt=""/>
            </div>
            <div className = "row">
              <p>Logout</p>
            </div>
          </div>
        </li>
      </ul>
      
  </nav>

)

export default Navbar;