import React from 'react';
import './InvPageTitle.css';
import AddIngredient from '../AddIngredient';

const InvPageTitle = (props) => (

    <div className="container-fluid">
        <div className="row title-row">
            <div className="col-sm-3">
                <div className="container-fluid">
                    <h1>Recipes</h1>
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