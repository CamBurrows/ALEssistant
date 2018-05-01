import React from "react";
import Navbar from '../components/Navbar';
import InvPageTitle from '../components/InvPageTitle';
import Inventory from '../components/Inventory'
import Wrapper from '../components/Wrapper';

class Ingredients extends React.Component {
    render(){
        return (
            <Wrapper>
                <Navbar />
                <InvPageTitle />
                <Inventory />
            </Wrapper>
        )
    }
}

export default Ingredients;