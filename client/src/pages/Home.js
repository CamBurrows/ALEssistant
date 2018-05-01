import React from "react";

//import Footer from "Footer";
import Navbar from '../components/Navbar';
import Wrapper from '../components/Navbar'

class Home extends React.Component {
    render(){
        return (
            <Wrapper>
                <Navbar />
            </Wrapper>
        )
    }
}

export default Home;