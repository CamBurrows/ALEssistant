import React from "react";
import Navbar from '../components/Navbar';
import InvPageTitle from '../components/InvPageTitle';
import InventoryModal from '../components/InventoryModal';
import Wrapper from '../components/Wrapper';
import IngredientLine from '../components/IngredientLine';
import API from '../utils/API.js'

class Inventory extends React.Component {

    state = {
        allIngredients: [],
        name: "",
        type: "",
        quantity: 0,
        unit: "",
        cost: 0,
        userId: "",
        
    }

    componentDidMount = () => {
        this.loadInventory()
    }

    loadInventory = () => {
    API.getIngredients()
      .then(res =>
        this.setState({ allIngredients: res, name: "", type: "", quantity:0 , unit: "", cost: 0 })
      )
      .catch(err => console.log(err));
  };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
              [name]: value
        });
        console.log(this.state)
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.type && this.state.unit && this.state.cost) {
           API.addIngredient({
             name: this.state.name,
             type: this.state.type,
             quantity: this.state.quantity,
             units: this.state.unit,
             cost: this.state.cost
           })
            .then(console.log("sent recipe"))
             .then(res => this.loadInventory())
             .catch(err => console.log(err));
        }
    };

    // handleModifyClick = event => {

    // }

    // handleDeleteClick = event => {

    // }


    render() {
        return (
            <Wrapper>
                <Navbar />
                <InvPageTitle />
                <InventoryModal 
                    onChange={this.handleInputChange}
                    onClick={this.handleFormSubmit}
                    newNameValue={this.state.name}
                    newTypeValue={this.state.type}
                    newQuantityValue={this.state.quantity}
                    newUnitValue={this.state.unit}
                    newCostValue={this.state.cost}
                />

                <div className="container-fluid">
                    <table className="table table-hover table-light ing-table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Unit</th>
                            <th scope="col">Cost/Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.allIngredients.map(ingredient => (
                        <IngredientLine
                            //handleModifyClick
                            //handleDeleteClick
                            name={ingredient.name}
                            type={ingredient.type}
                            quantity={ingredient.quantity}
                            unit={ingredient.unit}
                            cost={ingredient.cost}
                        />
                        ))}
                    </tbody>
                    </table>
                </div>
            </Wrapper>
        )
    }
}

export default Inventory;