import React from "react";

const InventoryModal = props => (

  <div className="row">
    <div className="modal fade" id="inventoryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
              <div className="form-group">
                <label htmlFor="ingredient-name">Add Ingredients</label>
                <input type="name" className="form-control" id="ingredient-name" placeholder="Ingredient" />
              </div>
              <div className="row category-1">
                <div className="col-sm-4">
                  <div className="form-group">
                    <label htmlFor="category-select">Category</label>
                    <select className="form-control" id="category-select">
                      <option>Grains</option>
                      <option>Hops</option>
                      <option>Yeast</option>
                      <option>Exotics</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label htmlFor="ingredient-amount">Amount</label>
                    <input type="number" className="form-control" id="ingredient-amount" />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label htmlFor="unit-select">Unit</label>
                    <select className="form-control" id="unit-select">
                      <option>Lbs</option>
                      <option>Oz.</option>
                      <option>grams</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="unit-cost">Unit Cost</label>
                    <input type="name" className="form-control" id="unit-cost" placeholder="Unit Cost" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary ingredient-submit">
                    Create Ingredient
                    </button>
                </div>
              </div>
            </form>


          </div>
        </div>
      </div>
    </div>
  </div>

);

export default InventoryModal;