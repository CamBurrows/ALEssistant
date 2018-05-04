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
                <input type="name" name="recipeName" onChange={props.onChange} className="form-control" id="recipe-name" placeholder="My New Brew" />
            </div>

            <div className="form-group">
                <label htmlFor="recipe-name">Beer Style</label>
                <input type="name" name="style" onChange={props.onChange} className="form-control" id="recipe-name" placeholder="My New Brew" />
            </div>

            <div className ="row grains-1">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="grains-select1">Select Grains</label>
                        <select className="form-control" name="grainsName1" onChange={props.onChange} id="grains-select1">
                            {/* Takes the grain array which should contain the list of grains contained in inventory and creates an option for each */}
                            {props.grains.map(grain => (
                                <option>{grain.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="grains-amt1">Amount</label>
                        <input type="number" name="grainsAmt1" onChange={props.onChange} className="form-control" id="grains-amt1" />
                    </div>
                </div>
                
            </div>
            
            <div className ="row grains-2">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <select className="form-control" name="grainsName2" onChange={props.onChange} id="grains-select2">
                        {/* Takes the grain array which should contain the list of grains contained in inventory and creates an option for each */}
                        {props.grains.map(grain => (
                                <option>{grain.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-6">
                    <div className="form-group">
                        <input type="number" name="grainsAmt2" onChange={props.onChange} className="form-control" id="grains-amt2" />
                    </div>
                </div>
            </div>

            <div className ="row grains-3">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <select className="form-control" name="grainsName3" onChange={props.onChange} id="grains-select3">
                       {/* Takes the grain array which should contain the list of grains contained in inventory and creates an option for each */}
                        {props.grains.map(grain => (
                                <option>{grain.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-6">
                    <div className="form-group">
                        <input type="number" name="grainsAmt1" onChange={props.onChange} className="form-control" id="grains-amt3" />
                    </div>
                </div>
            </div>

            <div className ="row grains-2">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <select className="form-control" name="grainsName4" onChange={props.onChange} id="grains-select4">
                        {/* Takes the grain array which should contain the list of grains contained in inventory and creates an option for each */}
                        {props.grains.map(grain => (
                                <option>{grain.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-6">
                    <div className="form-group">
                        <input type="number" name="grainsAmt4" onChange={props.onChange} className="form-control" id="grains-amt4" />
                    </div>
                </div>
            </div>

            {/* Hops */}
            <div className ="row hops-1">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="hops-select1">Select Hops</label>
                        <select className="form-control" name="hopsName1" onChange={props.onChange} id="hops-select1">
                        {/* Takes the grain array which should contain the list of grains contained in inventory and creates an option for each */}
                        {props.hops.map(hop => (
                                <option>{hop.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-2">
                    <div className="form-group">
                        <label htmlFor="hops-amt1">Amount</label>
                        <input type="number" name="hopsAmt1" onChange={props.onChange} className="form-control" id="hops-amt1" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="hops-time1">Time Added</label>
                        <input type="number" name="hopsTime1" onChange={props.onChange} className="form-control" id="hops-time1" />
                    </div>
                </div>
            </div>
            
            <div className ="row hops-2">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <select className="form-control" name="hopsName2" onChange={props.onChange}  id="hops-select2">
                        {props.hops.map(hop => (
                                <option>{hop.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-2">
                    <div className="form-group">
                        <input type="number"  name="hopsAmt2" onChange={props.onChange} className="form-control" id="hops-amt2" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number"  name="hopsTime2" onChange={props.onChange} className="form-control" id="hops-time2" />
                    </div>
                </div>
            </div>

            <div className ="row hops-3">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <select className="form-control" name="hopsName3" onChange={props.onChange} id="hops-select3">
                        {props.hops.map(hop => (
                                <option>{hop.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-2">
                    <div className="form-group">
                        <input type="number"  name="hopsAmt3" onChange={props.onChange} className="form-control" id="hops-amt3" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number" name="hopsTime3" onChange={props.onChange}  className="form-control" id="hops-time3" />
                    </div>
                </div>
            </div>

            <div className ="row hops-2">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <select className="form-control" name="hopsName4" onChange={props.onChange} id="hops-select4">
                        {props.hops.map(hop => (
                                <option>{hop.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-2">
                    <div className="form-group">
                        <input type="number" name="hopsAmt4" onChange={props.onChange} className="form-control" id="hops-amt4" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number" name="hopsTime4" onChange={props.onChange} className="form-control" id="hops-time4" />
                    </div>
                </div>
            </div>

            {/* Exotics */}
            <div className ="row exotics-1">
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="exotics-select1">Select Exotics</label>
                        <select className="form-control" name="exoticsName1" onChange={props.onChange} id="exotics-select1">
                        {props.exotics.map(exotic => (
                                <option>{exotic.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="exotics-amt1">Amount</label>
                        <input type="number" name="exoticsAmt1" onChange={props.onChange} className="form-control" id="exotics-amt1" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="exotics-unit1">Unit</label>
                        <select className="form-control" name="exoticsUnit1" onChange={props.onChange} id="exotics-unit1">
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
                        <select className="form-control" name="exoticsName2" onChange={props.onChange} id="exotics-select2">
                        {props.exotics.map(exotic => (
                                <option>{exotic.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number" name="exoticsAmt2" onChange={props.onChange} className="form-control" id="exotics-amt2" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" name="exoticsUnit2" onChange={props.onChange} id="exotics-unit2">
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
                        <select className="form-control" name="exoticsName3" onChange={props.onChange}  id="exotics-select3">
                        {props.exotics.map(exotic => (
                                <option>{exotic.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number" name="exoticsAmt3" onChange={props.onChange} className="form-control" id="exotics-amt3" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" name="exoticsUnit3" onChange={props.onChange}  id="exotics-unit3">
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
                        <select className="form-control" name="exoticsName4" onChange={props.onChange} id="exotics-select4">
                        {props.exotics.map(exotic => (
                                <option>{exotic.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number" name="exoticsAmt4" onChange={props.onChange} className="form-control" id="exotics-amt4" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" name="exoticsUnit4" onChange={props.onChange} id="exotics-unit4">
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
                        <label htmlFor="yeast-select1">Select Yeast</label>
                        <select className="form-control" name="yeastName" onChange={props.onChange} id="yeast-select1">
                        {props.yeast.map(yeasty => (
                                <option>{yeasty.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="yeast-amt1">Amount</label>
                        <input type="number" name="yeastAmount" onChange={props.onChange} className="form-control" id="yeast-amt1" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="yeast-unit1">Unit</label>
                        <select className="form-control" name="yeastUnit" onChange={props.onChange} id="yeast-unit1">
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
                        <input type="number" name="mashTemp" onChange={props.onChange} className="form-control" id="mash-temp" />
                    </div>
                </div>
                <div className ="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="mash-time">Mash Time (Minutes)</label>
                        <input type="number" name="mashTime" onChange={props.onChange} className="form-control" id="mash-time" />
                    </div>
                </div>
            </div>

            <div className ="row process-2">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="boil-temp">Boil Time (Minutes)</label>
                        <input type="number" name="boilTime" onChange={props.onChange} className="form-control" id="boil-temp" />
                    </div>
                </div>
                <div className ="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="ferm-time">Fermentation Time (Days)</label>
                        <input type="number" name="fermTime" onChange={props.onChange} className="form-control" id="ferm-time" />
                    </div>
                </div>
            </div>

            <div className ="row process-3">
                <div className ="col-sm-12">
                    <div className="form-group">
                        <label htmlFor="output-vol">Output Volume (Gallons)</label>
                        <input type="number" name="outputVol" onChange={props.onChange} className="form-control" id="output-vol" />
                    </div>
                </div>
            </div>

        </form>
    </div>
      

      <div className="modal-footer">
        <button type="button" onClick={props.onClick} data-dismiss="modal" className="btn btn-primary">Add Recipe</button>
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
      

    </div>
  </div>
</div>

)

export default AddRecipeModal;