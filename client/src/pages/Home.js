import React from "react";
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
// import API from '../utils/API.js'
import HomeCarousel from '../components/HomeCarousel';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return { user: nextProps.user };
    }

    render() {
        return (
            <Wrapper>
                <Navbar />
                <HomeCarousel />
            </Wrapper>
        )
    }
}

export default Home;