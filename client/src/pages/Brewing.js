import React from "react";
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import BrewPageTitle from '../components/BrewPageTitle';
import BrewingPanel from '../components/BrewingPanel';




class Brewing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        user: props.user,
        }
    }


    handleFormSubmitNewBatch = event => {
        event.preventDefault();
        if (this.state.brewNewBatch) {
        //   API.saveBook({
        //     title: this.state.title,
        //     author: this.state.author,
        //     synopsis: this.state.synopsis
        //   })
        //     .then(res => this.loadBooks())
        //     .catch(err => console.log(err));
        }
      };




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