<nav className="navbar navbar-light bg-light">
<h2>Welcome back,</h2>
<h1>{props.username}</h1>

<ul className="nav justify-content-end">
  <li className="nav-item">
    <div>
      <div className = "row">
        <img className = "nav-icon" src="/images/inventory.png" alt=""/>
      </div>
      <div className = "row">
        <p>Ingredients</p>
      </div>
    </div>
  </li>
  <li className="nav-item">
    <div>
      <div className = "row">
        <img className = "nav-icon" src="/images/recipes.png" alt=""/>
      </div>
      <div className = "row">
        <p>recipes</p>
      </div>
    </div>
  </li>
  <li className="nav-item">
    <div>
      <div className = "row">
        <img className = "nav-icon" src="/images/brewing.png" alt=""/>
      </div>
      <div className = "row">
        <p>brewing</p>
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