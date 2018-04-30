import React from "react";
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';
import Wrapper from '../components/Wrapper';

class Ingredients extends React.Component {
    render(){
        return (
            <Wrapper>
                <Navbar />
                <PageTitle>Inventory</PageTitle>
            </Wrapper>
        )
    }
}

export default Ingredients;