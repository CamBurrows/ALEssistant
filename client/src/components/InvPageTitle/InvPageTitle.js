import React from 'react';
import './InvPageTitle.css';
import AddIngredient from '../AddIngredient';

const InvPageTitle = (props) => (

    <div className="container-fluid inv-con">
        <div className="row title-row">
            <div className="col-sm-3">
                <div className="container-fluid">
                    <h2 className="h1-inv">Inventory</h2>
                </div>
            </div>
            <div className="col-sm-7">
            </div>
            <div className="col-sm-2">
            <AddIngredient />
            </div>
        </div>
    </div>

)


export default InvPageTitle;