import React from "react";
import Navbar from '../components/Navbar';
import RecipePageTitle from '../components/RecipePageTitle';
import AddRecipeModal from '../components/AddRecipeModal';
import Wrapper from '../components/Wrapper';
import RecipePanel from '../components/RecipePanel';
import API from '../utils/API.js'

class Recipes extends React.Component {
    
    state = {
        allRecipes: [],
        grains: [],
        hops: [],
        yeast: [],
        exotics:[],
        
        recipeName: "",
        
        //fields for grain inputs
        grainName1: "",
        grainAmt1: 0,
        grainUnit1: "",
        grainName2: "",
        grainAmt2: 0,
        grainUnit2: "",
        grainName3: "",
        grainAmt3: 0,
        grainUnit3: "",
        grainName4: "",
        grainAmt4: 0,
        grainUnit4: "",

        //fields for hops inputs
        hopsName1: "",
        hopsAmt1: 0,
        hopsUnit1: "",
        hopsTime1: 0,
        hopsName2: "",
        hopsAmt2: 0,
        hopsUnit2: "",
        hopsTime2: 0,
        hopsName3: "",
        hopsAmt3: 0,
        hopsUnit3: "",
        hopsTime3: 0,
        hopsName4: "",
        hopsAmt4: 0,
        hopsUnit4: "",
        hopsTime4: 0,

        //fields for exotics input
        exoticsName1: "",
        exoticsAmt1: 0,
        exoticsUnit1: "",
        exoticsName2: "",
        exoticsAmt2: 0,
        exoticsUnit2: "",
        exoticsName3: "",
        exoticsAmt3: 0,
        exoticsUnit3: "",
        exoticsName4: "",
        exoticsAmt4: 0,
        exoticsUnit4: "",


        //fields for process input
        mashTemp: 0,
        mashTime: 0,
        boilTime: 0,
        fermTime: 0,
        outputVol: 0,

        userId: "",
        
    }

    componentDidMount = () => {
        this.loadRecipes()
    }

    loadRecipes = () => {
    API.getRecipes()
      .then(res =>
        this.setState({ allRecipes: res.data })
      )
      .catch(err => console.log(err));
  };

  //method for getting grain ingredients
  //method for getting exotic ingredients
  //method for getting yeast ingredients
  //method for getting hops ingredients

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
              [name]: value
        });
        console.log(this.state)
    };

    handleFormSubmit = event => {
        event.preventDefault();
        //if (this.state.name && this.state.type && this.state.unit && this.state.cost) {
           API.addRecipe({
               name: this.state.recipeName
             
           })
            .then(console.log("sent recipe"))
            //  .then(res => this.loadBooks())
             .catch(err => console.log(err));
        
    };
    
    
    render(){
        return (
            <Wrapper>
                <Navbar />
                <RecipePageTitle />
                <AddRecipeModal />
                <RecipePanel />
            </Wrapper>
        )
    }
}

export default Recipes;