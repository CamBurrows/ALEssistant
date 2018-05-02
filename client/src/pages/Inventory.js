import React from "react";
import Navbar from '../components/Navbar';
import InvPageTitle from '../components/InvPageTitle';
import Wrapper from '../components/Wrapper';
import IngredientLine from '../components/IngredientLine';

class Inventory extends React.Component {
    render(){
        return (
            <Wrapper>
                <Navbar />
                <InvPageTitle />

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