import React from "react";
import Navbar from '../components/Navbar';
import Wrapper from '../components/Navbar'
// import API from '../utils/API.js'

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }
    
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return {user: nextProps.user};
    // }

    componentDidMount(){
        this.setState({user: JSON.parse(localStorage.getItem('user'))});
    }
    
    render(){
        // console.log(this.state.logout);
        return (
            <Wrapper>
                <Navbar logout={this.props.logout}/>
            </Wrapper>
        )
    }
}

export default Home;