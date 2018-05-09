import React from 'react';
import './RecipePageTitle.css';
import AddRecipeButton from '../AddRecipeButton';

const RecipePageTitle = (props) => (
    <div className="container-fluid">
        <div className="row title-row">
            <div className="col-sm-3">
                <div className="container-fluid">
                    <h2 className="h2-recipe">Recipes</h2>
                </div>
            </div>
            <div className="col-sm-5">
            </div>
            <div className="col-sm-4 inv-page-bar">
            <AddRecipeButton />
            </div>
        </div>
    </div>
)


export default RecipePageTitle;