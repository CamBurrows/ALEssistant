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
                <button className="btn shrink-btn">
                  <h6>Shrink</h6>
                </button>
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
            
            <div className="row content">
              
              <div className="col-sm-9 ingredients">
                <div className="row">
                  <div className="col-sm-6">
                    <div className= "card">
                      <div className ="card-body">
                        <p>Grains</p>
                        <table class="table table-hover table-sm">
                          <tbody>
                            <tr>
                              <td>Grain 1</td>
                              <td>10 lbs</td>
                            </tr>
                            <tr>
                              <td>Grain 2</td>
                              <td>20 lbs</td>
                            </tr>
                            <tr>
                              <td>Grain 3</td>
                              <td>30 lbs</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className= "card">
                      <div className ="card-body">
                        <p>Hops</p>
                        <table class="table table-hover table-sm">
                          <tbody>
                            <tr>
                              <td>Hops 1</td>
                              <td>10 lbs</td>
                              <td>90 min</td>
                            </tr>
                            <tr>
                              <td>Hops 2</td>
                              <td>20 lbs</td>
                              <td>120 min</td>
                            </tr>
                            <tr>
                              <td>Hops 3</td>
                              <td>30 lbs</td>
                              <td>120 min</td>
                            </tr>
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
                        <table class="table table-hover table-sm">
                          <tbody>
                            <tr>
                              <td>Yeast Name</td>
                              <td>10 lbs</td>
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
                            <tr>
                              <td>Exotics 1</td>
                              <td>10 lbs</td>
                            </tr>
                            <tr>
                              <td>Exotics 2</td>
                              <td>20 lbs</td>
                            </tr>
                            <tr>
                              <td>Exotics 3</td>
                              <td>30 lbs</td>
                            </tr>
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
                              <td>350</td>
                              <td>90</td>
                              <td>90</td>
                              <td>3 days</td>
                              <td>20 gallons</td>
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

)

export default RecipePanel;