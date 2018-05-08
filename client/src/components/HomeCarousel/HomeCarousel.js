import React from "react";
import './HomeCarousel.css';

const HomeCarousel = (props) => (

    // <div className="container">
    <div id="info-slider" className="carousel slide h-100" data-interval="8000" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#info-slider" data-slide-to="0" className="active"></li>
            <li data-target="#info-slider" data-slide-to="1"></li>
            <li data-target="#info-slider" data-slide-to="2"></li>
            <li data-target="#info-slider" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src="https://www.bognor.news/wp-content/uploads/2017/04/cheers-beer-yoga-777x437.jpg" alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="slider-caption-heading">Welcome to ALEssistant</h5>
                    <p>Manage your ingredients, store your recipes, and track your brewing sessions easier than ever! Click the slider arrow to view useful instructions.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="https://www.cawineclub.com/blog/wp-content/uploads/2015/11/beer.jpg" alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="slider-caption-heading">Starting Off</h5>
                    <p>Adding ingredients into your inventory allows you to create recipes with these ingredients. If you want to experiment with an
                        ingredient in recipes but don't possess any right now, add it to your inventory with a starting amount of 0.
                </p>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="http://cdn.pastemagazine.com/www/articles/trillium-brewing-taps-2.jpg" alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="slider-caption-heading">Duplicating Recipes</h5>
                    <p>To clone a recipe thats already been created: Click edit on the recipe you wish to copy, cancel the edit, then click new recipe
                        and the form will be populated with the recipe you wish to duplicate.
                </p>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="http://www.stiagroup.it/images/sampledata/minibirre/02_Schlafly-bottling-line_640x390.jpg" alt="Fourth slide" />
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="slider-caption-heading">Progressing Brew State</h5>
                    <p>Once you've started a brew from a recipe you've saved, you can progress the state of your brew-in-progress by hitting the arrow on the right.
                        The X will remove the brew session altogether.
                </p>
                </div>
            </div>

            <a className="carousel-control-prev" href="#info-slider" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#info-slider" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>

)

export default HomeCarousel;
