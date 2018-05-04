import React from 'react';
import './Navbar.css';
import {
  Link,
  Redirect
} from "react-router-dom";

const Navbar = (props) => (
  <nav className="navbar">
      <h2>Welcome back,</h2>
      <h1>{props.username}</h1>

      <ul className="nav justify-content-end">
        <Link to='/home'>
          <li className="nav-item">
              <div className="item">
                <div className = "icon">
                  <img className = "nav-icon" src="/images/home.png" alt=""/>
                </div>
                <div className = "text">
                  <p>Home</p>
                </div>
              </div>
          </li>
        </Link>
        
        <Link to='/inventory'>
          <li className="nav-item">
            <div className="item">
              <div className = "icon">
                <img className = "nav-icon" src="/images/inventory.png" alt=""/>
              </div>
              <div className = "text">
                <p>Inventory</p>
              </div>
            </div>
          </li>
        </Link>
        
        <Link to='/recipes'>
          <li className="nav-item">
            <div className="item">
              <div className = "icon">
                <img className = "nav-icon" src="/images/recipes.png" alt=""/>
              </div>
              <div className = "text">
                <p>Recipes</p>
              </div>
            </div>
          </li>
        </Link>
        
        <Link to='/brewing'>
          <li className="nav-item">
            <div className="item">
              <div className = "icon">
                <img className = "nav-icon" src="/images/brewing.png" alt=""/>
              </div>
              <div className = "text">
                <p>Brewing</p>
              </div>
            </div>
          </li>
        </Link>

        <Link to='/'>
          <li className="nav-item">
            <div className="item">
              <div className = "row">
                <img className = "nav-icon logout" src="/images/logout.png" alt=""/>
              </div>
              <div className = "row text">
                <p>Logout</p>
              </div>
            </div>
          </li>
      </Link>
      </ul>
  </nav>

)

export default Navbar;