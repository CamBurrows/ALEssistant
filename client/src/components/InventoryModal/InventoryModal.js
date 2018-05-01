import React from "react";

const InventoryModal = props => (

  <div className="row">
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add Ingredients</h5>
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
                  <a className="dropdown-item">Grain</a>
                  <a className="dropdown-item">Exotics</a>
                  <a className="dropdown-item">Hops</a>
                  <a className="dropdown-item">Yeast</a>
                </div>
              </div>
              <select className="form-control">
                <option>Default select</option>
                <option>Default select</option>
                <option>Default select</option>
              </select>
            
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Create</button>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default InventoryModal;