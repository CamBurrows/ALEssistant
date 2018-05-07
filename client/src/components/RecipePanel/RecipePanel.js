import React from 'react';
import './RecipePanel.css';
const RecipePanel = props => (
  <div className="container-fluid" key={props.name}>
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <div className="row top-row">
              <div className="col-sm-3">
                <h3 className="card-title">{props.recipeName}</h3>
                <h6>{props.beerStyle}</h6>
              </div>
              <div className="col-sm-1">
              </div>
              <div className="col-sm-2">
                <p>
                  <button className="btn shrink-btn" type="button" data-toggle="collapse" data-target={"#" + props.recipeName} aria-expanded="false" aria-controls="collapseExample">
                    <h6>Expand/Collapse</h6>
                  </button>
                </p>
              </div>
              <div className="col-sm-1">
                <button className="btn edit-btn" onClick={props.editOnClick} data-toggle="modal" data-target="#editRecipeModal">
                  <h6>Edit Recipe</h6>
                </button>
              </div>
              <div className="col-sm-1">
                <button className="btn delete-btn" onClick={props.deleteOnClick}>
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
                <button onClick={props.brewOnClick} className="btn newbatch-btn">
                  <h6>Brew New Batch</h6>
                </button>
              </div>
            </div>
            <div className="collapse" id={props.recipeName}>
              <div className="row content">
                <div className="col-sm-9 ingredients">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <p>Grains</p>
                          <table className="table table-hover table-sm">
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
                      <div className="card">
                        <div className="card-body">
                          <p>Hops</p>
                          <table className="table table-hover table-sm">
                            <tbody>
                              {props.hops ? (
                              props.hops.map(hop => (
                                <tr key={hop.name}>
                                  <td>{hop.name}</td>
                                  <td>{hop.amount} lbs</td>
                                  <td>{hop.timeAdded}</td>
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
                      <div className="card">
                        <div className="card-body">
                          <p>Yeast</p>
                          <table className="table table-hover table-sm">
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
                      <div className="card">
                        <div className="card-body">
                          <p>Exotics</p>
                          <table className="table table-hover table-sm">
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
                      <div className="card">
                        <div className="card-body">
                          <p>Process</p>
                          <table className="table table-hover table-sm">
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
                                <td>{props.mashTemp}</td>
                                <td>{props.mashTime}</td>
                                <td>{props.boilTime}</td>
                                <td>{props.fermTime}</td>
                                <td>{props.outputVol}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
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
)
export default RecipePanel;