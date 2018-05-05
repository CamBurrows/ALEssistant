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
                <input type="name" name="recipeName" value={props.recipeName} onChange={props.onChange} className="form-control" id="recipe-name" placeholder="My New Brew" />
            </div>

            <div className="form-group">
                <label htmlFor="recipe-name">Beer Style</label>
                <input type="name" name="style" value={props.style} onChange={props.onChange} className="form-control" id="style-name" placeholder="Belgian Ale" />
            </div>

            <div className ="row grains-1">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="grains-select1">Select Grains</label>
                        <select className="form-control" value={props.grainsName1} name="grainsName1" onChange={props.onChange} id="grains-select1">
                            <option></option>
                            {/* Takes the grain array which should contain the list of grains contained in inventory and creates an option for each */}
                            {props.grains.map(grain => (
                                <option key={grain.name}>{grain.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="grains-amt1">Amount</label>
                        <input type="number" name="grainsAmt1" value={props.grainsAmt1} onChange={props.onChange} className="form-control" id="grains-amt1" />
                    </div>
                </div>
                
            </div>
            
            <div className ="row grains-2">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <select className="form-control" name="grainsName2" value={props.grainsName2} onChange={props.onChange} id="grains-select2">
                        <option></option>
                        {/* Takes the grain array which should contain the list of grains contained in inventory and creates an option for each */}
                        {props.grains.map(grain => (
                                <option key={grain.name}>{grain.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-6">
                    <div className="form-group">
                        <input type="number" name="grainsAmt2" value={props.grainsAmt2} onChange={props.onChange} className="form-control" id="grains-amt2" />
                    </div>
                </div>
            </div>

            <div className ="row grains-3">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <select className="form-control" value={props.grainsName3} name="grainsName3" onChange={props.onChange} id="grains-select3">
                        <option></option>
                       {/* Takes the grain array which should contain the list of grains contained in inventory and creates an option for each */}
                        {props.grains.map(grain => (
                                <option key={grain.name}>{grain.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-6">
                    <div className="form-group">
                        <input type="number" name="grainsAmt3" value={props.grainsAmt3} onChange={props.onChange} className="form-control" id="grains-amt3" />
                    </div>
                </div>
            </div>

            <div className ="row grains-2">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <select className="form-control" name="grainsName4" value={props.grainsName4} onChange={props.onChange} id="grains-select4">
                        <option></option>
                        {/* Takes the grain array which should contain the list of grains contained in inventory and creates an option for each */}
                        {props.grains.map(grain => (
                                <option key={grain.name}>{grain.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-6">
                    <div className="form-group">
                        <input type="number" name="grainsAmt4" value={props.grainsAmt4} onChange={props.onChange} className="form-control" id="grains-amt4" />
                    </div>
                </div>
            </div>

            {/* Hops */}
            <div className ="row hops-1">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="hops-select1">Select Hops</label>
                        <select className="form-control" name="hopsName1" value={props.hopsName1} onChange={props.onChange} id="hops-select1">
                        <option></option>
                        {/* Takes the grain array which should contain the list of grains contained in inventory and creates an option for each */}
                        {props.hops.map(hop => (
                                <option key={hop.name}>{hop.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-2">
                    <div className="form-group">
                        <label htmlFor="hops-amt1">Amount</label>
                        <input type="number" name="hopsAmt1" value={props.hopsAmt1} onChange={props.onChange} className="form-control" id="hops-amt1" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="hops-time1">Time Added</label>
                        <input type="number" name="hopsTime1" value={props.hopsTime1} onChange={props.onChange} className="form-control" id="hops-time1" />
                    </div>
                </div>
            </div>
            
            <div className ="row hops-2">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <option></option>
                        <select className="form-control" name="hopsName2" value={props.hopsName2} onChange={props.onChange}  id="hops-select2">
                        {props.hops.map(hop => (
                                <option key={hop.name}>{hop.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-2">
                    <div className="form-group">
                        <input type="number"  name="hopsAmt2" value={props.hopsAmt2} onChange={props.onChange} className="form-control" id="hops-amt2" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number"  name="hopsTime2" value={props.hopsTime2} onChange={props.onChange} className="form-control" id="hops-time2" />
                    </div>
                </div>
            </div>

            <div className ="row hops-3">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <option></option>
                        <select className="form-control" name="hopsName3" value={props.hopsName3} onChange={props.onChange} id="hops-select3">
                        {props.hops.map(hop => (
                                <option key={hop.name}>{hop.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-2">
                    <div className="form-group">
                        <input type="number"  name="hopsAmt3" value={props.hopsAmt3} onChange={props.onChange} className="form-control" id="hops-amt3" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number" name="hopsTime3" value={props.hopsTime3} onChange={props.onChange}  className="form-control" id="hops-time3" />
                    </div>
                </div>
            </div>

            <div className ="row hops-2">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <select className="form-control" name="hopsName4" value={props.hopsName4} onChange={props.onChange} id="hops-select4">
                        <option></option>
                        {props.hops.map(hop => (
                                <option key={hop.name}>{hop.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-2">
                    <div className="form-group">
                        <input type="number" name="hopsAmt4" value={props.hopsAmt4} onChange={props.onChange} className="form-control" id="hops-amt4" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number" name="hopsTime4" value={props.hopsTime4} onChange={props.onChange} className="form-control" id="hops-time4" />
                    </div>
                </div>
            </div>

            {/* Exotics */}
            <div className ="row exotics-1">
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="exotics-select1">Select Exotics</label>
                        <select className="form-control" value={props.exoticsName1} name="exoticsName1" onChange={props.onChange} id="exotics-select1">
                        <option></option>
                        {props.exotics.map(exotic => (
                                <option key={exotic.name}>{exotic.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="exotics-amt1">Amount</label>
                        <input type="number" name="exoticsAmt1" value={props.exoticsAmt1} onChange={props.onChange} className="form-control" id="exotics-amt1" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="exotics-unit1">Unit</label>
                        <select className="form-control" name="exoticsUnit1" value={props.exoticsUnit1} onChange={props.onChange} id="exotics-unit1">
                        <option></option>
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
                        <select className="form-control" name="exoticsName2" value={props.exoticsName2} onChange={props.onChange} id="exotics-select2">
                        <option></option>
                        {props.exotics.map(exotic => (
                                <option key={exotic.name}>{exotic.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number" name="exoticsAmt2" value={props.exoticsAmt2} onChange={props.onChange} className="form-control" id="exotics-amt2" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" name="exoticsUnit2" value={props.exoticsUnit2} onChange={props.onChange} id="exotics-unit2">
                        <option></option>
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
                        <select className="form-control" name="exoticsName3" value={props.exoticsName3} onChange={props.onChange}  id="exotics-select3">
                        <option></option>
                        {props.exotics.map(exotic => (
                                <option key={exotic.name}>{exotic.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number" name="exoticsAmt3" value={props.exoticsAmt3} onChange={props.onChange} className="form-control" id="exotics-amt3" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" name="exoticsUnit3" value={props.exoticsUnit3} onChange={props.onChange}  id="exotics-unit3">
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
                        <select className="form-control" name="exoticsName4" value={props.exoticsName4} onChange={props.onChange} id="exotics-select4">
                        <option></option>
                        {props.exotics.map(exotic => (
                                <option key={exotic.name}>{exotic.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <input type="number" name="exoticsAmt4" value={props.exoticsAmt4} onChange={props.onChange} className="form-control" id="exotics-amt4" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <select className="form-control" name="exoticsUnit4" value={props.exoticsUnit4}  onChange={props.onChange} id="exotics-unit4">
                        <option></option>
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
                        <select className="form-control" name="yeastName" value={props.yeastName} onChange={props.onChange} id="yeast-select1">
                        <option></option>
                        {props.yeast.map(yeat => (
                                <option key={yeat.name}>{yeat.name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="yeast-amt1">Amount</label>
                        <input type="number" name="yeastAmount" onChange={props.onChange} value={props.yeastAmount} className="form-control" id="yeast-amt1" />
                    </div>
                </div>
                <div className ="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="yeast-unit1">Unit</label>
                        <select className="form-control" name="yeastUnit" value={props.yeastUnit} onChange={props.onChange} id="yeast-unit1">
                        <option></option>
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
                        <input type="number" name="mashTemp" value={props.mashTemp} onChange={props.onChange} className="form-control" id="mash-temp" />
                    </div>
                </div>
                <div className ="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="mash-time">Mash Time (Minutes)</label>
                        <input type="number" name="mashTime" value={props.mashTime} onChange={props.onChange} className="form-control" id="mash-time" />
                    </div>
                </div>
            </div>

            <div className ="row process-2">
                <div className ="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="boil-temp">Boil Time (Minutes)</label>
                        <input type="number" name="boilTime" value={props.boilTime} onChange={props.onChange} className="form-control" id="boil-temp" />
                    </div>
                </div>
                <div className ="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="ferm-time">Fermentation Time (Days)</label>
                        <input type="number" name="fermTime" value={props.fermTime} onChange={props.onChange} className="form-control" id="ferm-time" />
                    </div>
                </div>
            </div>

            <div className ="row process-3">
                <div className ="col-sm-12">
                    <div className="form-group">
                        <label htmlFor="output-vol">Output Volume (Gallons)</label>
                        <input type="number" name="outputVol" value={props.outputVol} onChange={props.onChange} className="form-control" id="output-vol" />
                    </div>
                </div>
            </div>

        </form>
    </div>
      

      <div className="modal-footer">
        <button type="button" onClick={props.onClick} data-dismiss="modal" className="btn btn-primary addRecipe-btn">Add Recipe</button>
        <button type="button" className="btn btn-secondary closeRecipe-btn" data-dismiss="modal">Close</button>
      </div>
      

    </div>
  </div>
</div>

)

export default AddRecipeModal;