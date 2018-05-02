import React from "react";
import Navbar from '../components/Navbar';
import InvPageTitle from '../components/InvPageTitle';
import InventoryModal from '../components/InventoryModal';
import Wrapper from '../components/Wrapper';
import IngredientLine from '../components/IngredientLine';

class Inventory extends React.Component {

    state = {
        allIngredients: [],
        newIngredient: {
            name: "",
            type: "",
            quantity: 0,
            unit: "",
            cost: 0,
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
        //   newIngredient.[name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.newIngredient.name && this.state.newIngredient.type && this.state.newIngredient.quantity && this.state.newIngredient.unit && this.state.newIngredient.cost) {
        //   API.saveBook({
        //     title: this.state.title,
        //     author: this.state.author,
        //     synopsis: this.state.synopsis
        //   })
        //     .then(res => this.loadBooks())
        //     .catch(err => console.log(err));
        }
    };


    render() {
        return (
            <Wrapper>
                <Navbar />
                <InvPageTitle />
                <InventoryModal 
                    onChange={this.handleInputChange}
                    onClick={this.handleFormSubmit}
                    newNameValue={this.state.newIngredient.name}
                    newTypeValue={this.state.newIngredient.type}
                    newQuantityValue={this.state.newIngredient.quantity}
                    newUnitValue={this.state.newIngredient.unit}
                    newCostValue={this.state.newIngredient.cost}
                />

                <div className="container-fluid">
                    <table class="table table-hover table-light ing-table">
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
                        <IngredientLine/>

                    </tbody>
                    </table>
                </div>
            </Wrapper>
        )
    }
}

export default Inventory;