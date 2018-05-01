import React from 'react';
import './RecipePageTitle.css';
import AddRecipeButton from '../AddRecipeButton';

const RecipePageTitle = (props) => (
    <div className="row title-row">
        <div className="col-sm-3">
            <div className="container-fluid">
                <h1>Recipes</h1>
            </div>
        </div>
        <div className="col-sm-7">
        </div>
        <div className="col-sm-2">
        <AddRecipeButton />
        </div>
    </div>
)


export default RecipePageTitle;