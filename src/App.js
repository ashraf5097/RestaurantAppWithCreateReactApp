
// Import react
import React from 'react';
import MenuBar from './Component/MenuBar';
import { Route } from 'react-router-dom';
import HotelList from '../src/Component/Restaurant/HotelList';
import AddRestaurant from './Component/Restaurant/AddRestaurant';
import Home from './Component/Home';
import Login from './Component/Common/Login';
import FoodInRest from './Component/Food/FoodInRest';
import AddFood from '../src/Component/Food/AddFood';
import Footer from '../src/Component/Bottom';
// import { hot } from "react-hot-loader";

class App extends React.Component {
    render () {
        
        return (
            <div className="whole-page-background-color">
                {/* <MenuBar /> */}
                {/* <Switch> */}
                <Route path="/" component={MenuBar} />
                <Route path="/home" component={Home} />
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/hotel" component={HotelList} />
                <Route path="/foodInRest" component={FoodInRest} />
                <Route path="/addFood" component={AddFood} />
                <Route path="/addRestaurant" component={AddRestaurant} />
                {/* </Switch> */}
                <Footer />
            </div>
        );
    }
}

export default (App);
