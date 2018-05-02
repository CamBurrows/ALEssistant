import React from 'react';
import './InvPageTitle.css';
import AddIngredient from '../AddIngredient';

const InvPageTitle = (props) => (

    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <div className="container-fluid">
                    <h1>Inventory</h1>
                </div>
            </div>
        </div>
        <div className="col-sm-7">
        </div>
        <div className="col-sm-2">
            <AddIngredient />
        </div>
    </div>

)


export default InvPageTitle;