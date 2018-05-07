import React from "react";
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import BrewPageTitle from '../components/BrewPageTitle';
import BrewingPanel from '../components/BrewingPanel';
import API from '../utils/API.js'


class Brewing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        user: null,
        allRecipes: [],
        
        }
    }

    componentWillMount = () => {
        this.setState({user: JSON.parse(localStorage.getItem('user'))})
    }
    
    componentDidMount = () => {
        // this.setState({user: JSON.parse(localStorage.getItem('user'))})
        console.log(this.state.user.user._id)
        this.loadRecipes(this.state.user.user._id)
  
    }
    
    loadRecipes = () => {
        API.getRecipes()
          .then(res =>
            this.setState({ allRecipes: res.data })
          )
          .catch(err => console.log(err));
    };

    // handleBatchProgress = id => {
    //     event.preventDefault();
        
    //     if (this.state.brewNewBatch) {

    //     }
    // };


    render(){
        return (
            <Wrapper>
                <Navbar userName={this.state.user.user.userName} logout={this.props.logout}/>
                <BrewPageTitle/>
                <BrewingPanel/>
            
            </Wrapper>
        )
    }
}

export default Brewing;