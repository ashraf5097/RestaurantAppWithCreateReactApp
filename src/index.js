import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';

import { BrowserRouter as Router } from 'react-router-dom';
import hotelReducer from "./store/reducer";
import {Provider} from "react-redux";

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
import { createStore, applyMiddleware } from 'redux';
require('../src/ui-common/sass/home.scss');
require('../src/ui-common/sass/footer.scss');
require('../src/ui-common/sass/login.scss');
require('../src/ui-common/sass/filter.scss');
require('../src/ui-common/sass/App.scss');
require('../src/ui-common/sass/searchBar.scss');

const ourStore = createStore( hotelReducer, applyMiddleware(thunk) );

ReactDOM.render(
    <Provider store={ourStore}>
        <div>
        {/* <MenuBar /> */}
            <Router >
                <App />
            </Router>
        </div>
      </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();





