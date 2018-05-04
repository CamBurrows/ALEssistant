import React from "react";
import LoginNav from '../components/LoginNav';
import "./Landing.css"
import API from '../utils/API.js'

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
        const {storeAuth} = this.props;
        if (this.state.loginEmail && this.state.loginPassword) {

            API.login({
                email: this.state.loginEmail,
                password: this.state.loginPassword,
            })
            .then(function(user) {
                storeAuth(user.data);
                console.log(user.data);
            })
            // .then(res => this.loadBooks())
            .catch(err => console.log(err));

            }
    };

    handleFormSubmitSignUp = event => {
        event.preventDefault();
        const {storeAuth} = this.props;
        if (this.state.signUpUsername && this.state.signUpEmail && this.state.signUpPassword) {

            API.signUp({
                userName: this.state.signUpUsername,
                email: this.state.signUpEmail,
                password: this.state.signUpPassword
            })
            .then(function(user) {
                storeAuth(user.data);
                console.log(user.data);
            })

            // .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div>
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
                <div className="container">
                    <div className='row'>
                        <div id="info-box" className="col-sm-6">
                            <p>ALEssistant helps you manage your inventory, recipes, and batches in brew like never before. An invaluable assistant for a brewery of any size.</p>
                        </div>
                    </div>

                    <br></br>
                    <br></br>
                    <div className="row">

                        <div className="col-sm-3">
                            <button class="btn btn-lg btn-block brew-btn" data-toggle="modal" data-target="#signUpModal" data-whatever="@mdo">
                                BREW BETTER!

                        </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;