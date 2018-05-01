import React from "react";

const Brewing = props => (

    <div className="container-fluid">
        <div className="row">
            <div className="col-md-2">
            <h1 className="brew">Brew</h1>

            </div>

             <div className="col-md-4">
             <h1 className="Fermentation">Fermentation</h1>

            </div>

             <div className="col-md-3">
             <h1 className="packaging">Packaging</h1>

            </div>

             <div className="col-md-3">
             <h1 className="current-state">Current State</h1>

            </div>
        </div>
    </div>
);

export default Brewing;