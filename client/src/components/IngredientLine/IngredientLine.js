import React from 'react'
import './IngredientLine.css'

const IngredientLine = (props) => (
    <tr>
        <td>Ingredient Name</td>
        <td>Hops</td>
        <td>30</td>
        <td>lbs</td>
        <td>$25</td>
        <td><button className="btn editIng-btn">Edit</button></td>
        <td><button className="btn deleteIng-btn">Delete</button></td>
    </tr>

)

export default IngredientLine;