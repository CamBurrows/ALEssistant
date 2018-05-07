import React from 'react'
import './IngredientLine.css'

const IngredientLine = (props) => (
    <tr key={props.name}>
        <td>{props.name}</td>
        <td>{props.type}</td>
        <td>{props.quantity}</td>
        <td>{props.unit}</td>
        <td>${props.cost}/{props.unit}</td>
        <td><button onClick={props.editOnClick} data-toggle="modal" data-target="#editInventoryModal" className="btn editIng-btn">Modify Field</button></td>
        <td><button onClick={props.deleteOnClick} className="btn deleteIng-btn">Delete</button></td>
    </tr>

)

export default IngredientLine;