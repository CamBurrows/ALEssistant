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
                          <input type="email" className="form-control" name="loginEmail" onChange={props.onChange} value={props.loginEmailValue} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                          <small id="emailHelp" className="form-text text-muted">Please input your full email to login.</small>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" name="loginPassword" onChange={props.onChange} value={props.loginPasswordValue} id="exampleInputPassword1" placeholder="Password" />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" onClick={props.handleFormSubmitLogin} className="btn btn-primary">Login</button>
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
                          <label>Display name</label>
                          <input type="email" className="form-control" name="signUpUsername" onChange={props.onChange} value={props.signUpUsernameValue} id="display-name" aria-describedby="emailHelp" placeholder="Display Name" />
                          <small id="emailHelp" className="form-text text-muted">The name that will display when you log in.</small>
                        </div>
                        <div className="form-group">
                          <label>Email address</label>
                          <input type="email" className="form-control" name="signUpEmail" onChange={props.onChange} value={props.signUpEmailValue} id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                          <small id="emailHelp" className="form-text text-muted">Please input your full email to sign up.</small>
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input type="password" className="form-control" name="signUpPassword" onChange={props.onChange} value={props.signUpPasswordValue} id="exampleInputPassword" placeholder="Password" />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" onClick={props.handleFormSubmitSignUp} className="btn btn-primary">Sign Up</button>
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
