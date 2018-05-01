import React from "react";
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import BrewPageTitle from '../components/BrewPageTitle';

class Brewing extends React.Component {
    render(){
        return (
            <Wrapper>
                <Navbar />
                <BrewPageTitle />
            </Wrapper>
        )
    }
}

export default Brewing;