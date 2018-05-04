import React from "react";
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import BrewPageTitle from '../components/BrewPageTitle';
import BrewingPanel from '../components/BrewingPanel';




class Brewing extends React.Component {


    state = {

        brewNewBatch: ""
        
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
                <Navbar />
                <BrewPageTitle />
                <BrewingPanel/>
            
            </Wrapper>
        )
    }
}

export default Brewing;