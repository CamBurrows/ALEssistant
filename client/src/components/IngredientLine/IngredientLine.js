import React from 'react'

const IngredientLine = (props) => (
    <tr>
        <td>Ingredient Name</td>
        <td>Hops</td>
        <td>30</td>
        <td>lbs</td>
        <td>$25</td>
        <td><button className="btn">Modify Field</button></td>
        <td><button className="btn">Delete</button></td>
    </tr>

)

export default IngredientLine;