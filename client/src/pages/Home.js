import React from "react";
import Navbar from '../components/Navbar';
import Wrapper from '../components/Navbar'
// import API from '../utils/API.js'

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        return {user: nextProps.user};
    }  
    
    render(){
        console.log(this.state.user);
        return (
            <Wrapper>
                <Navbar />
            </Wrapper>
        )
    }
}

export default Home;