import React from "react";
import LoginNav from '../components/LoginNav';
import LoginModal from '../components/LoginModal';

class Home extends React.Component {
    render(){
        return (
            <div>
            <LoginNav />
            <LoginModal />
            </div>
        )
    }
}

export default Home;