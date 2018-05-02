import React from "react";
import LoginNav from '../components/LoginNav';
import "./Landing.css"

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
        if (this.state.loginEmail && this.state.loginPassword) {
        //   API.saveBook({
        //     title: this.state.title,
        //     author: this.state.author,
        //     synopsis: this.state.synopsis
        //   })
        //     .then(res => this.loadBooks())
        //     .catch(err => console.log(err));
        }
      };

      handleFormSubmitSignUp = event => {
        event.preventDefault();
        if (this.state.signUpUsername && this.state.signUpEmail && this.state.signUpPassword) {
            // API.signUp({
                // title: this.state.title,
                // author: this.state.author,
                // synopsis: this.state.synopsis
        //   }
            // .then(res => this.loadBooks())
            // .catch(err => console.log(err));
        }
      };

    render(){
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
                    <div className="row">
                    <div className="col-sm-3">
                        <button class="btn btn-light btn-lg btn-block brew-btn" data-toggle="modal" data-target="#signUpModal" data-whatever="@mdo">
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