import React from "react";
import Navbar from '../components/Navbar';
import Wrapper from '../components/Navbar'
// import API from '../utils/API.js'

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            logout: props.logout
        }
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        return {user: nextProps.user};
    }  
    
    render(){
        console.log(this.state.logout);
        return (
            <Wrapper>
                <Navbar logout={this.state.logout}/>
            </Wrapper>
        )
    }
}

export default Home;