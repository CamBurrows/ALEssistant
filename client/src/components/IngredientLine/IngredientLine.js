import React from 'react'
import './IngredientLine.css'

const IngredientLine = (props) => (
    <tr key={props.name}>
        <td className="ing-table-td">{props.name}</td>
        <td className="ing-table-td">{props.type}</td>
        <td className="ing-table-td">{props.quantity}</td>
        <td className="ing-table-td">{props.unit}</td>
        <td className="ing-table-td">${props.cost}/{props.unit}</td>
        <td className="phone-buttons"><button onClick={props.editOnClick} data-toggle="modal" data-target="#editInventoryModal" className="btn editIng-btn">Edit Ingredient <span className="oi oi-calculator" title="calculator"></span></button>
        <button onClick={props.deleteOnClick} className="btn deleteIng-btn">Delete <span className="oi oi-trash" title="trash"></span></button></td>
    </tr>

)

export default IngredientLine;