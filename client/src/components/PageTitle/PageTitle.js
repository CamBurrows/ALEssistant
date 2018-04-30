import React from 'react';
import './PageTitle.css';

const PageTitle = (props) => (
    <div className="row">
        <div className="col">
            <div className="container-fluid">
                <h1>{props.children}</h1>
            </div>
        </div>
    </div>
)


export default PageTitle;