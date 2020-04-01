import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import { withRouter } from '../src';

ReactDom.render(
    withRouter(<App />),
    document.getElementById('root')
);
