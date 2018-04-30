import React from "react";

const Inventory = props => (


  <div className="row">
    <button type="button" class="btn btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
      <img className="nav-icon" src="/images/keg.png" alt="" />
      <h2>Login</h2>
    </button>
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Category
                  </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Barley</a>
                  <a className="dropdown-item" href="#">Exotics</a>
                  <a className="dropdown-item" href="#">Hops</a>
                  <a className="dropdown-item" href="#">Yeast</a>
                </div>
              </div>
              <select className="form-control">
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
              </select>
              <div className="form-group">
                <label for="exampleInputPassword1">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
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

);

export default Inventory;