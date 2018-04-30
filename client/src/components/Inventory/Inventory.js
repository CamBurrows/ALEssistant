import React from "react";

const Inventory = props => (


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
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Category
                  </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Barley</a>
                  <a class="dropdown-item" href="#">Exotics</a>
                  <a class="dropdown-item" href="#">Hops</a>
                  <a class="dropdown-item" href="#">Yeast</a>
                </div>
              </div>
              <select class="form-control">
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
              </select>
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

);

export default Inventory;