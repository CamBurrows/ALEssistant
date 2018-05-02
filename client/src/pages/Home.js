import React from "react";
import Navbar from '../components/Navbar';
import Wrapper from '../components/Navbar'
// import API from '../utils/API.js'

class Home extends React.Component {
    
// state:    
    
    render(){
        return (
            <Wrapper>
                <Navbar />
            </Wrapper>
        )
    }
}

export default Home;