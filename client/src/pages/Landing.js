import React from "react";
import LoginNav from '../components/LoginNav';
import "./Landing.css"
import API from '../utils/API.js'
import LoginPageTitle from "../components/LoginPageTitle";
import Wrapper from '../components/Wrapper';

class Landing extends React.Component {

    state = {
        loginEmail: "",
        loginPassword: "",
        signUpUsername: "",
        signUpEmail: "",
        signUpPassword: "",
        isAuth: false
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmitLogin = event => {
        event.preventDefault();
        const {login} = this.props;
        if (this.state.loginEmail && this.state.loginPassword) {

            API.login({
                email: this.state.loginEmail,
                password: this.state.loginPassword,
            })
            .then(function(user) {
                login(user.data);
                // console.log(user.data);
            })
            // .then(res => this.loadBooks())
            .catch(err => console.log(err));

            }
    };

    handleFormSubmitSignUp = event => {
        event.preventDefault();
        const {login} = this.props;
        if (this.state.signUpUsername && this.state.signUpEmail && this.state.signUpPassword) {

            API.signUp({
                userName: this.state.signUpUsername,
                email: this.state.signUpEmail,
                password: this.state.signUpPassword
            })
            .then(function(user) {
                login(user.data);
                console.log(user.data);
            })

            // .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
    };

    render() {
        // console.log(this.props);
        return (
            
            <Wrapper>
            <div className="landing">
                <LoginNav
                    onChange={this.handleInputChange}
                    loginEmailValue={this.state.loginEmail}
                    loginPasswordValue={this.state.loginPassword}
                    signUpUsernameValue={this.state.signUpUsername}
                    signUpEmailValue={this.state.signUpEmail}
                    signUpPasswordValue={this.state.signUpPassword}
                    handleFormSubmitLogin={this.handleFormSubmitLogin}
                    handleFormSubmitSignUp={this.handleFormSubmitSignUp}

                />
                <LoginPageTitle/>
                <div className="container">
                    <div className='row'>
                        <div id="info-box" className="col-lg-6">
                            <p>ALEssistant helps you manage your inventory, recipes, and batches in brew like never before. An invaluable assistant for a brewery of any size.</p>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-6">
                            <button className="btn btn-lg btn-block brew-btn" data-toggle="modal" data-target="#signUpModal" data-whatever="@mdo">
                                BREW BETTER!

                        </button>
                        </div>
                    </div>
                </div>
            </div>
            
            </Wrapper>
        )
    }
}

export default Landing;