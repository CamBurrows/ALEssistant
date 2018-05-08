import React from 'react';
import './AddIngredient.css'

const AddIngredient = props => (

<button type="button" className="btn ingredient-btn pull-right" data-toggle="modal" data-target="#inventoryModal">
<h4>Add Ingredient   <span className="oi oi-plus oi-icon-large" title="plus" aria-hidden="true"></span></h4>
</button>

)

export default AddIngredient;