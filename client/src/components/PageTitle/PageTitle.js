import React from 'react';
import './PageTitle.css';

const PageTitle = (props) => (
    <div className="titlebar">
        <div className="container">
            <h1>{props.children}</h1>
        </div>
    </div>

)


export default PageTitle;