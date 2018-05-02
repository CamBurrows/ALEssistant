import React from "react";
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import BrewPageTitle from '../components/BrewPageTitle';
import BrewingPanel from '../components/BrewingPanel';

class Brewing extends React.Component {
    render(){
        return (
            <Wrapper>
                <Navbar />
                <BrewPageTitle />
                <BrewingPanel/>
            
            </Wrapper>
        )
    }
}

export default Brewing;