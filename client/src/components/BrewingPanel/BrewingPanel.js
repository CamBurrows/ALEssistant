import React from "react";
import "./BrewingPanel.css";

const BrewingPanel = (props) => (

    <div className="container-fluid">
        <div className="col-sm-12">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="recipeName">
                                <h2 className="recipe-header">{props.recipeName}</h2>
                            </div>
                        </div>
                        <div className="col-sm-8">
                        </div>
                        <div className="col-sm-2">
                            {/* <div className="unitCost">
                                <h2 className="unitCost">Unit Cost: $120</h2>
                            </div> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="brew">Brew Started at:</h4>
                                    <h6>{props.timestamp}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="Fermentation">Fermentation</h4>
                                    <h6>{props.fermentationComplete ? (
                                        <p>Completed</p>
                                    ): (<p>Still in fermentation</p> )}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="packaging">Packaging</h4>
                                    <h6>{props.packaged ? (
                                        <p>Ready to Drink!</p>
                                    ): (<p>Still in fermenter</p> )}</h6>
                                </div>
                            </div>
                        </div>
                       
                        {/* <div className="col-sm-3">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="current-state">Current State</h4>
                                    <h6></h6>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-sm-1">
                            <button onClick={props.onClick} type="button" className="btn right">
                                <img className="nav-icon-right" src="/images/right-arrow.png" alt="" />
                            </button>
                        </div>
                        <div className="col-sm-2">
                            <button onClick={props.deleteOnClick} type="button" className="btn">
                                <img className="nav-icon-right" src="/images/x.png" alt="" />
                            </button>
                        </div>
                    </div>
                    {/* <br></br> */}
                    {/* <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="notes-header">Notes</h4>
                                    <p>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>

);

export default BrewingPanel;