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

    componentDidMount(){
        this.setState({user: JSON.parse(localStorage.getItem('user'))});
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
                <Navbar logout={this.props.logout}/>
                <BrewPageTitle />
                <BrewingPanel/>
            
            </Wrapper>
        )
    }
}

export default Brewing;