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
        this.setState({ user: JSON.parse(localStorage.getItem('user')) })
    }

    componentDidMount = () => {
        // this.setState({user: JSON.parse(localStorage.getItem('user'))})
        console.log(this.state.user.user._id)
        this.loadRecipes(this.state.user.user._id)

    }

    token = (JSON.parse(localStorage.getItem('user'))).token;
    headers = {Authorization: 'Bearer ' + this.token};

    loadRecipes = (userId) => {
        API.getRecipes(userId, this.headers)
            .then(res =>
                this.setState({ allRecipes: res.data })
            )
            .catch(err => console.log(err));
    };

    handleBatchProgress = (id, index) => {
        API.findRecipe(id, this.headers)
            .then(res => {

                if (!res.data[0].sessions[index].fermentationComplete) {

                    const updatedSession = res.data[0]
                    updatedSession.sessions[index].fermentationComplete = true

                    API.updateRecipe(id, updatedSession, this.headers)
                        .then(res => this.loadRecipes(this.state.user.user._id))

                }
                else if (!res.data[0].sessions[index].packaged) {

                    const updatedSession2 = res.data[0]
                    updatedSession2.sessions[index].packaged = true

                    API.updateRecipe(id, updatedSession2, this.headers)
                        .then(res => this.loadRecipes(this.state.user.user._id))
                }
            })


    };

    handleBatchRemove = (id, index) => {
        API.findRecipe(id, this.headers)
        .then(res => {
            const deleteSession = res.data[0]
            deleteSession.sessions.splice(index,1)

            API.updateRecipe(id, deleteSession, this.headers)
            .then(res => this.loadRecipes(this.state.user.user._id))
        })
    }


    render() {
        return (
            <Wrapper>
                <Navbar userName={this.state.user.user.userName} logout={this.props.logout} />
                <BrewPageTitle />
                <br></br>
                {this.state.allRecipes.length ? (
                    this.state.allRecipes.map(recipe => (

                        recipe.sessions.map((session, index) => (
                            <BrewingPanel
                                timestamp={session.dateBrewed}
                                onClick={() => this.handleBatchProgress(recipe._id, index)}
                                deleteOnClick = {() => this.handleBatchRemove(recipe._id, index)}
                                brewed={session.brewed}
                                fermentationComplete={session.fermentationComplete}
                                packaged={session.packaged}
                                recipeName={recipe.name}
                            />

                        ))
                        
                    ))
                ) : (

                        <h4>No sessions yet. Head to recipes tab to start brewing!</h4>

                    )}

            </Wrapper>
        )

    }
}

export default Brewing;