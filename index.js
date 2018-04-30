import React from 'react';
import Express from 'express';
import ReactDOM from 'react-dom';
import Validator from 'validator';
import MaterialUi from 'material-ui';
import Webpack from 'webpack';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const express = require('express');

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
