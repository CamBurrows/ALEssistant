import React from "react";
import Navbar from '../components/Navbar';
import RecipePageTitle from '../components/RecipePageTitle';
import AddRecipeModal from '../components/AddRecipeModal';
import EditRecipeModal from '../components/EditRecipeModal';
import AddNoteModal from '../components/AddNoteModal';
import Wrapper from '../components/Wrapper';
import RecipePanel from '../components/RecipePanel';
import API from '../utils/API.js'

class Recipes extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
        
        user: null,
        
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

        currentRecipeId: "",
        commentBody: ""
        
    }
}

    componentWillMount = () => {
        this.setState({user: JSON.parse(localStorage.getItem('user'))})
    }

    componentDidMount = () => {
        // this.setState({user: JSON.parse(localStorage.getItem('user'))})
        console.log(this.state.user.user._id)
        this.loadRecipes(this.state.user.user._id)
        this.getIngredients(this.state.user.user._id)

    }

    token = (JSON.parse(localStorage.getItem('user'))).token;
    headers = {Authorization: 'Bearer ' + this.token};

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return {user: nextProps.user};
    // } 

    loadRecipes = (userId) => {
        API.getRecipes(userId, this.headers)
        .then(res =>
            this.setState({ allRecipes: res.data })
        )
        .catch(err => console.log(err));
    };

    getIngredients = (userId) => {
        API.getIngredients(userId, this.headers)
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
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
              [name]: value
        });
    };

    removeRecipe = id => {
        API.removeRecipe(id, this.headers)
        .then(res => this.loadRecipes(this.state.user.user._id))
        .catch(err => console.log(err));
    };

    editOnClick = id => {
        API.findRecipe(id, this.headers)
        // .then(res => console.log("trying to get recipe info: " + JSON.stringify(res.data[0].name)))
        // .then(res => console.log("trying to get recipe info: " + JSON.stringify(res.data[0].name)))
        .then(res => {
            console.log(res.data[0])
            console.log(res.data[0].grains[0].name)
        
            this.setState ({
            recipeName: res.data[0].name,
            style: res.data[0].style,
            mashTemp: parseInt(res.data[0].mashTemp),
            mashTime: parseInt(res.data[0].mashTime),
            boilTime: parseInt(res.data[0].boilTime),
            fermTime: parseInt(res.data[0].fermentationTime),
            outputVol: parseInt(res.data[0].batchSize),
            yeastName: res.data[0].yeast.name,
            yeastAmount: res.data[0].yeast.amount,
            yeastUnit: res.data[0].yeast.units,
            currentRecipeId: res.data[0]._id
            })
            return res})
        // .then(console.log("state after adding certain field form incoming data:" + JSON.stringify(data)))
        
        .then(res => {
            console.log ("promise chain: " + JSON.stringify(res.data))
            const data = res.data[0]
            console.log(data)

        //conditional to check which grains exist
        if (typeof data.grains[0] !== 'undefined'){
            this.setState({
            grainName1: data.grains[0].name,
            grainAmt1: data.grains[0].amount})
        }
        if (typeof data.grains[1] !== 'undefined'){
            this.setState({
            grainName2: data.grains[1].name,
            grainAmt2: data.grains[1].amount})
        }
        if (typeof data.grains[2] !== 'undefined'){
            this.setState({
            grainName3: data.grains[2].name,
            grainAmt3: data.grains[2].amount})
        }
        if (typeof data.grains[3] !== 'undefined'){
            this.setState({
            grainName4: data.grains[3].name,
            grainAmt4: data.grains[3].amount})
        }

        
        //conditions for checking hops
        if (typeof data.hops[0] !== 'undefined'){
            this.setState({
            hopsName1: data.hops[0].name,
            hopsAmt1: data.hops[0].amount,
            hopsTime1: data.hops[0].timeAdded
            })
        }
        if (typeof data.hops[1] !== 'undefined'){
            this.setState({
            hopsName2: data.hops[1].name,
            hopsAmt2: data.hops[1].amount,
            hopsTime2: data.hops[1].timeAdded
            })
        }
        if (typeof data.hops[2] !== 'undefined'){
            this.setState({
            hopsName3: data.hops[2].name,
            hopsAmt3: data.hops[2].amount,
            hopsTime3: data.hops[2].timeAdded
            })
        }
        if (typeof data.hops[3] !== 'undefined'){
            this.setState({
            hopsName4: data.hops[3].name,
            hopsAmt4: data.hops[3].amount,
            hopsTime4: data.hops[3].timeAdded
            })
        }

        //conditions for checking exotics
        if (typeof data.exotics[0] !== 'undefined'){
            this.setState({
            exoticsName1: data.exotics[0].name,
            exoticsAmt1: data.exotics[0].amount,
            exoticsUnit1: data.exotics[0].units
            })
        }
        if (typeof data.exotics[1] !== 'undefined'){
            this.setState({
            exoticsName2: data.exotics[1].name,
            exoticsAmt2: data.exotics[1].amount,
            exoticsUnit2: data.exotics[1].units
            })
        }
        if (typeof data.exotics[2] !== 'undefined'){
            this.setState({
            exoticsName3: data.exotics[2].name,
            exoticsAmt3: data.exotics[2].amount,
            exoticsUnit3: data.exotics[2].units
            })
        }
        if (typeof data.exotics[3] !== 'undefined'){
            this.setState({
            exoticsName4: data.exotics[3].name,
            exoticsAmt4: data.exotics[3].amount,
            exoticsUnit4: data.exotics[3].units
            })
        }
    
        console.log(JSON.stringify(this.state))
        })
        .catch(err => console.log(err))
    }




    
    handleNewBrew = id => {
        const newBrew = {
            brewed:true
        }
        
        API.newBrew(id, newBrew, this.headers)
        .catch(err => console.log(err));
    }

    handleFormSubmit = event => {
        event.preventDefault();
        //if (this.state.name && this.state.type && this.state.unit && this.state.cost) {
        
        const newRecipe = {
            name: this.state.recipeName,
            batchSize: this.state.outputVol,
            style: this.state.style,
            mashTemp: this.state.mashTemp,
            mashTime: this.state.mashTime,
            boilTime: this.state.boilTime,
            fermentationTime: this.state.fermTime,

            yeast: {name: this.state.yeastName,
                    amount: this.state.yeastAmount,
                    units: this.state.yeastUnit},
            _userId: this.state.user.user._id
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
            },
            this.headers)
            .then(console.log("sent recipe: " + newRecipe))
            .then(res => this.loadRecipes(this.state.user.user._id))
            .catch(err => console.log(err));
        
    };

    //incomplete
    handleEditSubmit = id => {

            const updateRecipe = {
                name: this.state.recipeName,
                batchSize: this.state.outputVol,
                style: this.state.style,
                mashTemp: this.state.mashTemp,
                mashTime: this.state.mashTime,
                boilTime: this.state.boilTime,
                fermentationTime: this.state.fermTime,
    
                yeast: {name: this.state.yeastName,
                        amount: this.state.yeastAmount,
                        units: this.state.yeastUnit},
                _userId: this.state.user.user._id
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
    
            updateRecipe.grains = grainsArray;
            updateRecipe.hops = hopsArray;
            updateRecipe.exotics = exoticsArray;
            
            API.updateRecipe(id, updateRecipe, this.headers)

            .then(console.log("updated recipe: " + updateRecipe))
            .then(res => this.loadRecipes(this.state.user.user._id))
            .catch(err => console.log(err));
            
        };
    
        
        handleNoteSubmit = id => {
            API.findRecipe(id, this.headers)
            .then(res => {
                const updateNote = res.data[0]
                updateNote.comments.push({comment: this.state.commentBody})
    
                API.updateRecipe(id, updateNote, this.headers)
                .then(res => 
                    this.loadRecipes(this.state.user.user._id,
                    this.setState({commentBody:""})
                ))
            })
            
        }

        noteOnClick = id => {
            API.findRecipe(id, this.headers)
            .then(res => {
                this.setState({
                    currentRecipeId: res.data[0]._id
                })
            })
        }
    
    
    render(){
        return (
            <Wrapper>
                <Navbar userName={this.state.user.user.userName} logout={this.props.logout}/>
                <RecipePageTitle />

                <br></br>

                <AddNoteModal 
                onChange = {this.handleInputChange}
                submitOnClick = {()=>this.handleNoteSubmit(this.state.currentRecipeId)}
                value = {this.state.commentBody}
                />

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
                
                <EditRecipeModal
                
                grains = {this.state.grains}
                hops = {this.state.hops}
                yeast = {this.state.yeast}
                exotics = {this.state.exotics}
                
                onChange = {this.handleInputChange}
                onClick = {() => this.handleEditSubmit(this.state.currentRecipeId)}
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
                    {this.state.allRecipes.length ? (    
                        this.state.allRecipes.map(recipe => (
                            
                                <RecipePanel
                                    noteOnClick = {() => this.noteOnClick(recipe._id)}
                                    brewOnClick = {()=> this.handleNewBrew(recipe._id)}
                                    editOnClick = {() => this.editOnClick(recipe._id)}
                                    deleteOnClick = {() => this.removeRecipe(recipe._id)}
                                    recipeName = {recipe.name}
                                    beerStyle = {recipe.style}
                                    yeast = {recipe.yeast}
                                    grains = {recipe.grains}
                                    hops = {recipe.hops}
                                    exotics = {recipe.exotics}

                                    mashTemp = {recipe.mashTemp}
                                    mashTime = {recipe.mashTime}
                                    boilTime = {recipe.boilTime}
                                    fermTime = {recipe.fermentationTime}
                                    outputVol = {recipe.batchSize}
                                    comments = {recipe.comments}
                                />
                            
                        ))
                    ) : (
                        <h4> No Recipes Yet </h4>
                    )}
                    
                </div>
            </Wrapper>
        )
    }
}

export default Recipes;