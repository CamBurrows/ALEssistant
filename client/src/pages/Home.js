import React from "react";
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
// import API from '../utils/API.js'
import HomeCarousel from '../components/HomeCarousel';
import HomePageTitle from "../components/HomePageTitle";

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

    componentWillMount = () => {
        this.setState({user: JSON.parse(localStorage.getItem('user'))})
    }
    
    componentDidMount = () => {
        // this.setState({user: JSON.parse(localStorage.getItem('user'))})
        // console.log(this.state.user.user._id)
  
    }
    
    render(){
        // console.log(this.state.logout);
        return (
            <Wrapper>
                <Navbar userName={this.state.user.user.userName} logout={this.props.logout}/>
                <HomePageTitle/>
                <HomeCarousel/>
            </Wrapper>
        )
    }
}

export default Home;