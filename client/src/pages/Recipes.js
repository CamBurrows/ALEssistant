import React from "react";
import Navbar from '../components/Navbar';
import RecipePageTitle from '../components/RecipePageTitle'
import Wrapper from '../components/Wrapper'

class Recipes extends React.Component {
    render(){
        return (
            <Wrapper>
                <Navbar />
                <RecipePageTitle />
            </Wrapper>
        )
    }
}

export default Recipes;