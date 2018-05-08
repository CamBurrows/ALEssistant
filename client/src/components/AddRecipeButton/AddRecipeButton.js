import React from 'react';
import './AddRecipeButton.css'

const AddRecipeButton = (props) => (

<button className="btn recipe-btn pull-right" data-toggle="modal" data-target="#addRecipeModal">
<h4>Add Recipe <span className="oi oi-pencil" title="pencil"></span></h4>
</button>

)

export default AddRecipeButton;