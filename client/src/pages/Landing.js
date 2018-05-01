import React from "react";
import LoginNav from '../components/LoginNav';
import LoginModal from '../components/LoginModal';
import "./Landing.css"

class Landing extends React.Component {
    render(){
        return (
            <div>
            <LoginNav />
                <div className="container">
                    <div className='row'>
                        <div id="info-box" className="col-sm-6">
                        <p>ALEssistant helps you manage your inventory, recipes, and batches in brew like never before. An invaluable assistant for a brewery of any size.</p>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-3">
                        <button class="btn btn-light btn-lg btn-block brew-btn">
                            BREW BETTER!
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

// var bg = {
//      backgroundImage: 'url("https://www.awesomemitten.com/wp-content/uploads/2016/11/brewing.jpg")',
//      width: "100%",
//      height: "400px"
// }

export default Landing;