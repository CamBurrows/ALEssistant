import React from "react";
import './HomeCarousel.css';

const HomeCarousel = (props) => (

    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row textbox">
                                    <div className="col-lg-12">
                                        <h3 className="welcome">Welcome to ALEssistant. It is our goal to help make your
                                         job as a brewer or homebrew hobbyist easier and more efficient. Here you can navigate through managing
                                          all the aspects of your brew process from ingredient management all the way to your bottling and packaging stage.
                                          The following are a list of tips and walkthroughs to help you navigate through ALEssistant:
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="container">
                                <div className="row textbox">
                                    <div className="col-lg-12">
                                        <h3 className="welcome">
                                            TIP: When creating a recipe, make sure you have created a list of your intended ingredients
                                            on your inventory page first. This will populate a list of options of available ingredients
                                            on your recipe page for use in all future recipes. Ingredients not yet created
                                            will not show up as an option when you try to create recipe if you have not yet added them on your
                                            inventory page. If you do not actually have the ingredients you wish to use, but want to create a recipe anyways,
                                            feel free to expriment and just set your ingredient amount to 0.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="container">
                                <div className="row textbox">
                                    <div className="col-lg-12">
                                        <h3 className="welcome">
                                            TIP: If you wish to use portions a recipe you have already created and do not want to start from scratch,
                                            use our form recall to populate your recipe form with that recipe by doing the following: Click on the edit
                                            recipe button on the recipe you intend to recall, then hit the cancel button on the form at the bottom, and finally,
                                            click the new recipe button. This will populate a new recipe form with the ingredients from your recalled
                                            recipe so you can edit and add new ingredients without starting from scratch in order to create an entirely new recipe.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="container">
                                <div className="row textbox">
                                    <div className="col-lg-12">
                                        <h3 className="welcome">
                                            TIP: If you have completed your brewing session, and the beer is ready to be bottled and packaged, you can change the state of your brew process from "In Progress" to "Complete".
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>

                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>
            </div>

            <div className="col-lg-6">

                <div id="imageCarousel" className="image slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#imageCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#imageCarousel" data-slide-to="1"></li>
                        <li data-target="#imageCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img className="img1" src="https://www.bognor.news/wp-content/uploads/2017/04/cheers-beer-yoga-777x437.jpg" alt="first slide" />
                        </div>

                        <div className="carousel-item">
                            <img className="img2" src="https://www.cawineclub.com/blog/wp-content/uploads/2015/11/beer.jpg" alt="Second slide" />
                        </div>


                        <div className="carousel-item">
                            <img className="img3" src="http://cdn.pastemagazine.com/www/articles/trillium-brewing-taps-2.jpg" alt="Third slide" />
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

)

export default HomeCarousel;
