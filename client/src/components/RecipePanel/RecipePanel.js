import React from 'react';
import './RecipePanel.css';
const RecipePanel = props => (
  <div className="container-fluid" key={props.name}>
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <div className="row top-row">
              <div className="col-md-4">
                <h3 className="card-title recipe-panel-title">{props.recipeName} - </h3>
                <h4 className="recipe-panel-subtitle">{props.beerStyle}</h4>
              </div>
              
              <div className="col-md-8 recipe-card-btns">
                
                  <button className="btn editIng-btn shrink-btn" type="button" data-toggle="collapse" data-target={"#" + props.recipeName} aria-expanded="false" aria-controls="collapseExample">
                    <h6>Expand/Collapse <span className="oi oi-elevator" title="elevator"></span></h6>
                  </button>
                
              
                <button className="btn editIng-btn edit-btn" onClick={props.editOnClick} data-toggle="modal" data-target="#editRecipeModal">
                  <h6>Edit Recipe <span className="oi oi-book" title="book"></span></h6>
                </button>
              
                <button onClick={props.noteOnClick} data-toggle="modal" data-target="#addNoteModal" className="btn editIng-btn note-btn">
                  <h6>Make Note <span className="oi oi-comment-square" title="comment-square"></span></h6>
                </button>

                <button className="btn deleteIng-btn delete-btn" onClick={props.deleteOnClick}>
                  <h6>Delete <span className="oi oi-trash" title="trash"></span></h6>
                </button>
              
              
                <button onClick={props.brewOnClick} data-toggle="modal" data-target="#newBrewModal" className="btn newbatch-btn">
                  <h6>Brew New Batch <span className="oi oi-timer" title="timer"></span></h6>
                </button>
              </div>
            </div>
            <div className="collapse" id={props.recipeName}>
              <div className="row content">
                <div className="col-sm-9 ingredients">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card recipe-section">
                        <div className="card-body">
                          <p className="r-panel-card-title">Grains</p>
                          <table className="table recipe-table table-hover table-sm">
                            <tbody>
                              {props.grains ? (
                              props.grains.map(grain => (
                                <tr key={grain.name}>
                                  <td>{grain.name}</td>
                                  <td>{grain.amount} lbs</td>
                                  <td></td>
                                </tr>
                              ))) : null }
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card recipe-section">
                        <div className="card-body">
                          <p className="r-panel-card-title">Hops</p>
                          <table className="table recipe-table table-hover table-sm">
                            <tbody>
                              {props.hops ? (
                              props.hops.map(hop => (
                                <tr key={hop.name}>
                                  <td>{hop.name}</td>
                                  <td>{hop.amount} lbs</td>
                                  <td>Add {hop.timeAdded} min in</td>
                                </tr>
                              ))) : null }
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card recipe-section">
                        <div className="card-body">
                          <p className="r-panel-card-title">Yeast</p>
                          <table className="table recipe-table table-hover table-sm">
                            <tbody>
                              <tr>
                                <td>{props.yeast ? props.yeast.name  : null}</td>
                                <td>{props.yeast ? props.yeast.amount  : null}</td>
                                <td>{props.yeast ? props.yeast.units  : null}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card recipe-section">
                        <div className="card-body">
                          <p className="r-panel-card-title">Exotics</p>
                          <table className="table recipe-table table-hover table-sm">
                            <tbody>
                              {props.exotics ? (
                              props.exotics.map(exotic => (
                                <tr key={exotic.name}>
                                  <td>{exotic.name}</td>
                                  <td>{exotic.amount}</td>
                                  <td>{exotic.units}</td>
                                </tr>
                              ))) : null }
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="card recipe-section">
                        <div className="card-body">
                          <p className="r-panel-card-title">Process</p>
                          <table className="table recipe-table table-hover table-sm">
                            <thead>
                              <tr>
                                <th>Mash Temp
                                  (Farenheit)
                                </th>
                                <th>Mash Time</th>
                                <th>Boil Time</th>
                                <th>Fermentation Time</th>
                                <th>Output Volume</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{props.mashTemp}°F</td>
                                <td>{props.mashTime} min</td>
                                <td>{props.boilTime} min</td>
                                <td>{props.fermTime} days</td>
                                <td>{props.outputVol} gallons</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 notes">
                  <div className="card recipe-section">
                    <div className="card-body">
                      <p className="r-panel-card-title">Notes</p>
                          
                          {props.comments ? (
                            props.comments.map(comment=>(
                              <div key = {comment.comment} className="card">
                                <div className="card-body">
                                  {comment.comment}
                                </div>
                              </div>
                            )
                            
                            )): null }
                        <div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br></br>
  </div>
)
export default RecipePanel;