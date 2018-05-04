import React from 'react'
import './IngredientLine.css'

const IngredientLine = (props) => (
    <tr>
        <td>{props.name}</td>
        <td>{props.type}</td>
        <td>{props.quantity}</td>
        <td>{props.unit}</td>
        <td>${props.cost}/{props.unit}</td>
        <td><button className="btn editIng-btn">Modify Field</button></td>
        <td><button className="btn deleteIng-btn">Delete</button></td>
    </tr>

)

export default IngredientLine;