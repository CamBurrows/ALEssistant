import React from "react";
import Navbar from '../components/Navbar';
import RecipePageTitle from '../components/RecipePageTitle';
import AddRecipeModal from '../components/AddRecipeModal';
import Wrapper from '../components/Wrapper';
import RecipePanel from '../components/RecipePanel';
import API from '../utils/API.js'

class Recipes extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
        
        user: props.user,
        
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
        
    }
}

    componentDidMount = () => {
        this.loadRecipes()
        this.getIngredients()
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {user: nextProps.user};
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
        const grains = res.data.filter(ingredient=>ingredient.type === "Grains")
        const hops = res.data.filter(ingredient=>ingredient.type === "Hops")
        const exotics = res.data.filter(ingredient=>ingredient.type === "Exotics")
        const yeast = res.data.filter(ingredient=>ingredient.type === "Yeast")

        this.setState({ 
            grains: grains,
            hops: hops,
            exotics: exotics,
            yeast: yeast
        })
        console.log(this.state)
      })
      .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
              [name]: value
        });
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
            .then(console.log("sent recipe: " + newRecipe))
             .then(res => this.loadRecipes())
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
                exotics = {this.state.exotics}
                
                onChange = {this.handleInputChange}
                onClick = {this.handleFormSubmit}
                recipeName = {this.state.recipeName}
                style = {this.state.style}
                
                //fields for grain inputs
                grainName1 = {this.state.grainName1}
                grainAmt1 = {this.state.grainAmt1}
                grainUnit1 = {this.state.grainUnit1}
                grainName2 = {this.state.grainName2}
                grainAmt2 = {this.state.grainAmt2}
                grainUnit2 = {this.state.grainUnit2}
                grainName3 = {this.state.grainName3}
                grainAmt3 = {this.state.grainAmt3}
                grainUnit3 = {this.state.grainUnit3}
                grainName4 = {this.state.grainName4}
                grainAmt4 = {this.state.grainAmt4}
                grainUnit4 = {this.state.grainUnit4}

                //fields for hops inputs
                hopsName1 = {this.state.hopsName1}
                hopsAmt1 = {this.state.hopsAmt1}
                hopsUnit1 = {this.state.hopsUnit1}
                hopsTime1 = {this.state.hopsTime1}
                hopsName2 = {this.state.hopsName2}
                hopsAmt2 = {this.state.hopsAmt2}
                hopsUnit2 = {this.state.hopsUnit2}
                hopsTime2 = {this.state.hopsTime2}
                hopsName3 = {this.state.hopsName3}
                hopsAmt3 = {this.state.hopsAmt3}
                hopsUnit3 = {this.state.hopsUnit3}
                hopsTime3 = {this.state.hopsTime3}
                hopsName4 = {this.state.hopsName4}
                hopsAmt4 = {this.state.hopsAmt4}
                hopsUnit4 = {this.state.hopsUnit4}
                hopsTime4 = {this.state.hopsTime4}

                yeastName = {this.state.yeastName}
                yeastAmount = {this.state.yeastAmount}
                yeastUnit = {this.state.yeastUnit}

                //fields for exotics input
                exoticsName1 = {this.state.exoticsName1}
                exoticsAmt1 = {this.state.exoticsAmt1}
                exoticsUnit1 = {this.state.exoticsUnit1}
                exoticsName2 = {this.state.exoticsName2}
                exoticsAmt2 = {this.state.exoticsAmt2}
                exoticsUnit2 = {this.state.exoticsUnit2}
                exoticsName3 = {this.state.exoticsName3}
                exoticsAmt3 = {this.state.exoticsAmt3}
                exoticsUnit3 = {this.state.exoticsUnit3}
                exoticsName4 = {this.state.exoticsName4}
                exoticsAmt4 = {this.state.exoticsAmt4}
                exoticsUnit4 = {this.state.exoticsUnit4}


                //fields for process input
                mashTemp = {this.state.mashTemp}
                mashTime = {this.state.mashTime}
                boilTime = {this.state.boilTime}
                fermTime = {this.state.fermTime}
                outputVol = {this.state.outputVol}
                />
                
                <div className="container-fluid">
                            <RecipePanel 
                                recipeName = "recipe"
                                outputVol = "vol"
                                beerStyle = "style"
                                yeast = {[{
                                    name: "yeast",
                                    amount: 20,
                                    unit: "lbs"
                                }]}
                                grains = {[{
                                    name:"grain",
                                    amount: 20
                                }]}
                                hops = {[{
                                    name: "hoptest",
                                    amount: 20,
                                    timeAdded: 90
                                }]}
                                exotics = {[{
                                    name: "exotic",
                                    amount: 10,
                                    unit: "grams"
                                }]}
                            />
                        {this.state.allRecipes.map(recipe => (

                                <RecipePanel 
                                    recipeName = {recipe.recipeName}
                                    outputVol = {recipe.batchSize}
                                    beerStyle = {recipe.style}
                                    yeast = {recipe.yeast}
                                    grains = {recipe.grains}
                                    hops = {recipe.hops}
                                    exotics = {recipe.exotics}
                                    key = {recipe.recipeName}
                                />
                            
                        ))}
                    
                </div>
            </Wrapper>
        )
    }
}

export default Recipes;