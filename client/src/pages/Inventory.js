import React from "react";
import Navbar from '../components/Navbar';
import InvPageTitle from '../components/InvPageTitle';
import Wrapper from '../components/Wrapper';

class Inventory extends React.Component {
    render(){
        return (
            <Wrapper>
                <Navbar />
                <InvPageTitle />
             
            </Wrapper>
        )
    }
}

export default Inventory;