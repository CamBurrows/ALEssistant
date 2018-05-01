import React from 'react';
import "./AddRecipeModal.css";

const AddRecipeModal = (props) => (

<div className="modal fade" tabIndex="-1" role="dialog" id="addRecipeModal">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      
      <div className="modal-header">
        <h2 className="modal-title">Add a New Recipe</h2>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      
      <div className="modal-body">
      
        <form>
            <div className="form-group">
                <label htmlFor="recipe-name">Brew Recipe Name</label>
                <input type="name" className="form-control" id="recipe-name" placeholder="My New Brew" />
            </div>

            <div className ="row grains-1">
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="grains-select1">Select Grains</label>
                        <select className="form-control" id="grains-select1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="grains-amt1">Amount</label>
                        <input type="number" className="form-control" id="grains-amt1" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="grains-unit1">Unit</label>
                        <select className="form-control" id="grains-unit1">
                        <option>lbs</option>
                        <option>oz</option>
                        <option>g</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div className ="row grains-2">
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" id="grains-select2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number" className="form-control" id="grains-amt2" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" id="grains-unit2">
                        <option>lbs</option>
                        <option>oz</option>
                        <option>g</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className ="row grains-3">
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" id="grains-select3">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number" className="form-control" id="grains-amt3" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" id="grains-unit3">
                        <option>lbs</option>
                        <option>oz</option>
                        <option>g</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className ="row grains-2">
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" id="grains-select4">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number" className="form-control" id="grains-amt4" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" id="grains-unit4">
                        <option>lbs</option>
                        <option>oz</option>
                        <option>g</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Hops */}
            <div className ="row hops-1">
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="hops-select1">Select hops</label>
                        <select className="form-control" id="hops-select1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="hops-amt1">Amount</label>
                        <input type="number" className="form-control" id="hops-amt1" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="hops-unit1">Unit</label>
                        <select className="form-control" id="hops-unit1">
                        <option>lbs</option>
                        <option>oz</option>
                        <option>g</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div className ="row hops-2">
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" id="hops-select2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number" className="form-control" id="hops-amt2" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" id="hops-unit2">
                        <option>lbs</option>
                        <option>oz</option>
                        <option>g</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className ="row hops-3">
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" id="hops-select3">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number" className="form-control" id="hops-amt3" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" id="hops-unit3">
                        <option>lbs</option>
                        <option>oz</option>
                        <option>g</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className ="row hops-2">
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" id="hops-select4">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number" className="form-control" id="hops-amt4" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" id="hops-unit4">
                        <option>lbs</option>
                        <option>oz</option>
                        <option>g</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Exotics */}
            <div className ="row exotics-1">
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="exotics-select1">Select exotics</label>
                        <select className="form-control" id="exotics-select1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="exotics-amt1">Amount</label>
                        <input type="number" className="form-control" id="exotics-amt1" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="exotics-unit1">Unit</label>
                        <select className="form-control" id="exotics-unit1">
                        <option>lbs</option>
                        <option>oz</option>
                        <option>g</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div className ="row exotics-2">
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" id="exotics-select2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number" className="form-control" id="exotics-amt2" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" id="exotics-unit2">
                        <option>lbs</option>
                        <option>oz</option>
                        <option>g</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className ="row exotics-3">
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" id="exotics-select3">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number" className="form-control" id="exotics-amt3" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" id="exotics-unit3">
                        <option>lbs</option>
                        <option>oz</option>
                        <option>g</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className ="row exotics-2">
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" id="exotics-select4">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number" className="form-control" id="exotics-amt4" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" id="exotics-unit4">
                        <option>lbs</option>
                        <option>oz</option>
                        <option>g</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* yeast */}
            <div className ="row yeast-1">
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="yeast-select1">Select yeast</label>
                        <select className="form-control" id="yeast-select1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="yeast-amt1">Amount</label>
                        <input type="number" className="form-control" id="yeast-amt1" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="yeast-unit1">Unit</label>
                        <select className="form-control" id="yeast-unit1">
                        <option>lbs</option>
                        <option>oz</option>
                        <option>g</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Process */}
            <div className ="row process-1">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="mash-temp">Mash Temp (Farenheit)</label>
                        <input type="number" className="form-control" id="mash-temp" />
                    </div>
                </div>
                <div className ="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="mash-time">Mash Time (Minutes)</label>
                        <input type="number" className="form-control" id="mash-time" />
                    </div>
                </div>
            </div>

            <div className ="row process-2">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="boil-temp">Boil Time (Minutes)</label>
                        <input type="number" className="form-control" id="boil-temp" />
                    </div>
                </div>
                <div className ="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="ferm-time">Fermentation Time (Days)</label>
                        <input type="number" className="form-control" id="ferm-time" />
                    </div>
                </div>
            </div>

            <div className ="row process-3">
                <div className ="col-sm-12">
                    <div className="form-group">
                        <label htmlFor="output-vol">Output Volume (Gallons)</label>
                        <input type="number" className="form-control" id="output-vol" />
                    </div>
                </div>
            </div>

        </form>
    </div>
      

      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Add Recipe</button>
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
      

    </div>
  </div>
</div>

)

export default AddRecipeModal;