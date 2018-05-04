import React from 'react';
import './RecipePanel.css';

const RecipePanel = (props) => (


  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <div className="row top-row">
              <div className="col-sm-3">
                <h3 className="card-title">Recipe Name</h3>
                <h6>Beer Style</h6>
              </div>
              <div className="col-sm-2">
              </div>
              <div className="col-sm-1">
                <p>
                  <button className="btn shrink-btn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <h6>Shrink</h6>
                  </button>
                </p>
              </div>
              <div className="col-sm-1">
                <button className="btn edit-btn">
                  <h6>Edit Recipe</h6>
                </button>
              </div>
              <div className="col-sm-1">
                <button className="btn delete-btn">
                  <h6>Delete</h6>
                </button>
              </div>
              <div className="col-sm-1">
                <button className="btn note-btn">
                  <h6>Make Note</h6>
                </button>
              </div>
              <div className="col-sm-1">
              </div>
              <div className="col-sm-2">
                <button className="btn newbatch-btn">
                  <h6>Brew New Batch</h6>
                </button>
              </div>
            </div>

            <div className="collapse" id="collapseExample">
              <div className="row content">

                <div className="col-sm-9 ingredients">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <p>Grains</p>
                          <table className="table table-hover table-sm">
                            <tbody>
                              {props.grains.map(grain => (
                                <tr>
                                  <td>{grain.name}</td>
                                  <td>{grain.amount} lbs</td>
                                  <td></td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <p>Hops</p>
                          <table class="table table-hover table-sm">
                            <tbody>
                              {props.hops.map(hop => (
                                <tr>
                                  <td>{hop.name}</td>
                                  <td>{hop.amount} lbs</td>
                                  <td>{hop.timeAdded}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>

                        </div>
                      </div>
                    </div>



                    <div className="row">
                      <div className="col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <p>Yeast</p>
                            <table class="table table-hover table-sm">
                              <tbody>
                                <tr>
                                  <td>{props.yeast.name}</td>
                                  <td>{props.yeast.amount}</td>
                                  <td>{props.yeast.units}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <p>Exotics</p>
                            <table class="table table-hover table-sm">
                              <tbody>
                                {props.exotics.map(exotic => (
                                  <tr>
                                    <td>{exotic.name}</td>
                                    <td>{exotic.amount} lbs</td>
                                    <td>{exotic.units}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>


                      <div className="row">
                        <div className="col-sm-12">
                          <div className="card">
                            <div className="card-body">
                              <p>Process</p>
                              <table class="table table-hover table-sm">
                                <thead>
                                  <tr>
                                    <th>Mash Temp</th>
                                    <th>Mash Time</th>
                                    <th>Boil Time</th>
                                    <th>Fermentation time</th>
                                    <th>Output Volume</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>{props.outputVol}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 notes">
                          <div className="card">
                            <div className="card-body">
                              <p>Notes</p>
                              <div className="card">
                                <div className="card-body">
                                  This is a note about this Recipe
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


)

export default RecipePanel;