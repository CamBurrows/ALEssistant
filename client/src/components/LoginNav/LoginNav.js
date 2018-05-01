import React from "react";
import "./LoginNav.css";

const LoginNav = props => (

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">

      <div className="main-header">
        <img src="images/logo.png" />
      </div>

      <ul className="nav justify-content-end">

        <button type="button" class="btn login" data-toggle="modal" data-target="#loginModal" data-whatever="@mdo">
          <img className="nav-icon-login" src="/images/keg3.png" alt="" />
          <h2>Login</h2>
        </button>

        <button type="button" className="btn signup" data-toggle="modal" data-target="#signUpModal" data-whatever="@mdo">
          <img className="nav-icon-login" src="/images/keg4.png" alt="" />
          <h2>Sign Up</h2>
        </button>
        
        <li className="nav-item">
          <div>
            <div className="row">
              <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">ALEssistant Login</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                          <small id="emailHelp" className="form-text text-muted">Please input your full email to login.</small>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Confirm Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary">Login</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <div>
            <div className="row">
              <div className="modal fade" id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">ALEssistant Sign up</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                          <small id="emailHelp" className="form-text text-muted">Please input your full email to sign up.</small>
                        </div>
                        <div className="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputPassword1">Confirm Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary">Sign Up</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

    </div>
  </nav>
);

export default LoginNav;
