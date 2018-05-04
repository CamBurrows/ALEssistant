import React from "react";
import './HomeCarousel.css';

const HomeCarousel = (props) => (

<div id="myCarousel" className="carousel slide" data-ride="carousel">

    <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div className="carousel-inner">
        <div className="item active">
            <img src="/images/brewing.jpg" alt="" />
            <div className="carousel-caption">
                <h3>Los Angeles</h3>
                <p>LA is always so much fun!</p>
            </div>
        </div>

        <div className="item">
            <img src="" alt="" />
            <div className="carousel-caption">
                <h3>Chicago</h3>
                <p>Thank you, Chicago!</p>
            </div>
        </div>

        <div className="item">
            <img src="" alt="" />
            <div className="carousel-caption">
                <h3>New York</h3>
                <p>We love the Big Apple!</p>
            </div>
        </div>
    </div>

    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
    </a>
</div>

)

export default HomeCarousel;
