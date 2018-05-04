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
        style: "",
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

        yeastName: "",
        yeastAmount: 0,
        yeastUnit: "",

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
        this.getIngredients()
    }

    loadRecipes = () => {
    API.getRecipes()
      .then(res =>
        this.setState({ allRecipes: res.data })
      )
      .catch(err => console.log(err));
  };

    getIngredients = () => {
        API.getIngredients()
      .then(res => {
        const grains = res.filter(ingredient=>ingredient.type === "Grains")
        const hops = res.filter(ingredient=>ingredient.type === "Hops")
        const exotics = res.filter(ingredient=>ingredient.type === "Exotics")
        const yeast = res.filter(ingredient=>ingredient.type === "Yeast")

        this.setState({ 
            grains: grains,
            hops: hops,
            exotics: exotics,
            yeast: yeast
        })
      })
      .catch(err => console.log(err));
    }

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
        
        const newRecipe = {
            name: this.state.recipeName,
            batchSize: this.state.outputVol,
            style: this.state.style,
            yeast: {name: this.state.yeastName,
                    amount: this.state.yeastAmount,
                    units: this.state.yeastUnit}
        }

        let grain1 = {};
        let grain2 = {};
        let grain3 = {};
        let grain4 = {};

        let hops1 = {};
        let hops2 = {};
        let hops3 = {};
        let hops4 = {};

        let exotics1 = {};
        let exotics2 = {};
        let exotics3 = {};
        let exotics4 = {};

        let grainsArray = [];
        let hopsArray = [];
        let exoticsArray =[];

        if (this.state.grainName1){
            grain1.name = this.state.grainName1
            grain1.amount = this.state.grainAmt1
            grainsArray.push(grain1)
        }

        if (this.state.grainName2){
            grain2.name = this.state.grainName2
            grain2.amount = this.state.grainAmt2
            grainsArray.push(grain2)
        }

        if (this.state.grainName3){
            grain3.name = this.state.grainName3
            grain3.amount = this.state.grainAmt3
            grainsArray.push(grain3)
        }

        if (this.state.hopsName4){
            hops4.name = this.state.grainName4
            grain4.amount = this.state.grainAmt4
            grainsArray.push(grain4)
        }

        
        if (this.state.hopsName1){
            hops1.name = this.state.hopsName1
            hops1.amount = this.state.hopsAmt1
            hops1.timeAdded = this.state.hopsTime1
            hopsArray.push(hops1)
        }

        if (this.state.hopsName2){
            hops2.name = this.state.hopsName2
            hops2.amount = this.state.hopsAmt2
            hops2.timeAdded = this.state.hopsTime2
            hopsArray.push(hops2)
        }

        if (this.state.hopsName3){
            hops3.name = this.state.hopsName3
            hops3.amount = this.state.hopsAmt3
            hops3.timeAdded = this.state.hopsTime3
            hopsArray.push(hops3)
        }

        if (this.state.hopsName4){
            hops4.name = this.state.hopsName4
            hops4.amount = this.state.hopsAmt4
            hops4.units = this.state.hopsTime4
            hopsArray.push(hops4)
        }


        if (this.state.exoticsName1){
            exotics1.name = this.state.exoticsName1
            exotics1.amount = this.state.exoticsAmt1
            exotics1.units = this.state.exoticsUnit1
            exoticsArray.push(exotics1)
        }

        if (this.state.exoticsName2){
            exotics2.name = this.state.exoticsName2
            exotics2.amount = this.state.exoticsAmt2
            exotics2.units = this.state.exoticsUnit2
            exoticsArray.push(exotics2)
        }

        if (this.state.exoticsName3){
            exotics3.name = this.state.exoticsName3
            exotics3.amount = this.state.exoticsAmt3
            exotics3.units = this.state.exoticsUnit3
            exoticsArray.push(exotics3)
        }

        if (this.state.exoticsName4){
            exotics4.name = this.state.exoticsName4
            exotics4.amount = this.state.exoticsAmt4
            exotics4.units = this.state.exoticsUnit4
            exoticsArray.push(exotics4)
        }

        newRecipe.grains = grainsArray;
        newRecipe.hops = hopsArray;
        newRecipe.exotics = exoticsArray;
        
            API.addRecipe({
             newRecipe
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
                <AddRecipeModal
                grains = {this.state.grains}
                hops = {this.state.hops}
                yeast = {this.state.yeast}
                exotics = {this.state.yeast}
                onChange = {this.handleInputChange}
                onClick = {this.handleFormSubmit}
                />
                
                <div className="container-fluid">
                
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                    {this.state.allRecipes.map(recipe => (
                            
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#{recipe.name}" role="tab">{recipe.name}</a>
                        </li>

                    ))}
                    </ul>

                    <div className="tab-content" id="myTabContent">
                        {this.state.allRecipes.map(recipe => (
                            <div className="tab-pane fade" id="{recipe.name}" role="tabpanel">
                                <RecipePanel 
                                    recipeName = {recipe.recipeName}
                                    outputVol = {recipe.batchSize}
                                    style = {recipe.style}
                                    yeast = {recipe.yeast}
                                    grains = {recipe.grains}
                                    hops = {recipe.hops}
                                    exotics = {recipe.exotics}

                                />
                            </div>
                        ))}
                    </div>
                </div>
                
                <RecipePanel />
            </Wrapper>
        )
    }
}

export default Recipes;