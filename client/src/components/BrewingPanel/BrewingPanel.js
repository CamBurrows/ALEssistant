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
                        <div className="col-md-4">
                            <div className="card brew-card">
                                <div className="card-body brewbox">
                                    <div className="row">
                                    <div className = "col-lg-8">
                                    <h4 className="brew">Brew Started at:</h4>
                                    <h6>{props.timestamp}</h6>
                                    </div>
                                    <div className="col-lg-4">
                                    <img className="status-icon" src="/images/brewing.png" alt="brewing"/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body ferm">
                                    <div className="row">
                                    <div className = "col-lg-8">
                                    <h4 className="Fermentation">Fermentation</h4>
                                    <h6>{props.fermentationComplete ? (
                                        <p>Completed</p>
                                    ): (<p>Still in fermentation</p> )}</h6>
                                    </div>
                                    <div className="col-lg-4">
                                        {props.fermentationComplete ? (
                                        <img className="status-icon" src="/images/keg3.png" alt="distill"/>
                                        ):null}
                                  </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body pack">
                                    <div className="row">
                                    <div className = "col-lg-8">
                                    
                                    <h4 className="packaging">Packaging</h4>
                                    <h6>{props.packaged ? (
                                        <div>
                                        <p>Completed!</p>
                                        </div>
                                    ): (<p>Still in fermenter</p> )}</h6>
                                    </div>
                                    <div className="col-lg-4">
                                    {props.packaged ? (
                                    <img className="status-icon" src="/images/bottled-icon.png" alt="bottled"/>
                                    ):null}
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="col-sm-1">
                            <button onClick={props.onClick} type="button" className="btn right">
                                <img className="nav-icon-right" src="/images/right-arrow.png" alt="" />
                            </button>
                        </div>
                        <div className="col-sm-1">
                            <button onClick={props.deleteOnClick} type="button" className="btn x">
                                <img className="nav-icon-delete" src="/images/x.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br></br> 
    </div>
   

);

export default BrewingPanel;