import React from "react";
import Navbar from '../components/Navbar';
import RecipePageTitle from '../components/RecipePageTitle';
import AddRecipeModal from '../components/AddRecipeModal';
import Wrapper from '../components/Wrapper'

class Recipes extends React.Component {
    render(){
        return (
            <Wrapper>
                <Navbar />
                <RecipePageTitle />
                <AddRecipeModal />
            </Wrapper>
        )
    }
}

export default Recipes;