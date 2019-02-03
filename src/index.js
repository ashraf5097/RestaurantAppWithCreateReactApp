import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom';
import { Provider } from "react-redux";
// import store from "./store/index";


// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    // <Provider store={store}>
            <Router>
                <App />
            </Router>
        // </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();





