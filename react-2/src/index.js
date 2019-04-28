import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App';
import { BrowserRouter as Router } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

library.add(faTrash, faUserCircle)

ReactDOM.render(
    <Router>
        <App />
    </Router>
, document.getElementById('root'));
