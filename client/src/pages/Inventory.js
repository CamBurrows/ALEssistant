import React from "react";
import Navbar from '../components/Navbar';
import InvPageTitle from '../components/InvPageTitle';
import InventoryModal from '../components/InventoryModal';
import Wrapper from '../components/Wrapper';
import IngredientLine from '../components/IngredientLine';
import API from '../utils/API.js'

class Inventory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            allIngredients: [],
            name: "",
            type: "",
            quantity: 0,
            unit: "",
            cost: 0,
        }
    }
    
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return {user: nextProps.user};
    // }  

    componentWillMount = () => {
        this.setState({user: JSON.parse(localStorage.getItem('user'))})
    }
    
    componentDidMount = () => {
        // this.setState({user: JSON.parse(localStorage.getItem('user'))})
        console.log(this.state.user.user._id)
        this.loadInventory(this.state.user.user._id)
  
    }

    loadInventory = (userId) => {
    API.getIngredients(userId)
      .then(res =>
        this.setState({ allIngredients: res.data, name: "", type: "", quantity: 0 , unit: "", cost: 0})
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
             cost: this.state.cost,
             _userId: this.state.user.user._id
           })
            .then(console.log("sent recipe" + this.state))
             .then(res => this.loadInventory(this.state.user.user._id))
             .catch(err => console.log(err));
        }
    };

    // handleModifyClick = event => {

    // }

    removeIngredient = id => {
        API.removeIngredient(id)
        .then(res => this.loadInventory(this.state.user.user._id))
        .catch(err => console.log(err));
    }


    render() {
        console.log(this.props)
        return (
            <Wrapper>
                <Navbar logout={this.props.logout}/>
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
                    
                    {this.state.allIngredients.length ? (
                    this.state.allIngredients.map(ingredient => (

                        <IngredientLine
                            //handleModifyClick
                            deleteOnClick = {() => this.removeIngredient(ingredient._id)}
                            name={ingredient.name}
                            type={ingredient.type}
                            quantity={ingredient.quantity}
                            unit={ingredient.units}
                            cost={ingredient.cost}
                        />
                        ))
                    ) : (
                        <tr>
                            <td>
                                <h4>No ingredients yet. Add some to get started!</h4>
                            </td>
                        </tr>
                    )}
                    </tbody>
                    </table>
                </div>
            </Wrapper>
        )
    }
}

export default Inventory;