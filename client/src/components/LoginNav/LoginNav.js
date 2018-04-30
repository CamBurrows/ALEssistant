import React from "react";
import "./LoginNav.css";

const LoginNav = props => (

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">

      <h1 className="main-header">ALEssistant</h1>

      <ul className="nav justify-content-end">
        <li className="nav-item">
          <div>
            <div className="row">
              <button type="button" class="btn btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                <img className="nav-icon" src="/images/keg.png" alt="" />
                <h2>Login</h2>
              </button>
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">ALEssistant Login</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                          <small id="emailHelp" class="form-text text-muted">Please input your full email to login.</small>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Confirm Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary">Login</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        
        {/* <li className="nav-item">
          <img className="nav-icon" src="/images/signin.png" alt="" />
        </li>
        <li className="nav-item">
        </li>
        <li className="nav-item">
        </li> */}
      </ul>

    </div>
  </nav>
);

export default LoginNav;



