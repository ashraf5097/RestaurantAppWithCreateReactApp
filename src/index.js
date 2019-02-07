import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom';
// import store from "./store/index";


// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
require('../src/ui-common/sass/home.scss');
require('../src/ui-common/sass/footer.scss');
require('../src/ui-common/sass/login.scss');
require('../src/ui-common/sass/filter.scss');
require('../src/ui-common/sass/App.scss');

ReactDOM.render(
    // <Provider store={store}>
            <Router>
                <App />
            </Router>
        // </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();





