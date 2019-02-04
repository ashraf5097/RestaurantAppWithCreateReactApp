
// Import react
import React from 'react';
import MenuBar from './Component/MenuBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HotelList from '../src/Component/Restaurant/HotelList';
import AddRestaurant from './Component/Restaurant/AddRestaurant';
import Home from './Component/Home';
import FoodInRest from './Component/Food/FoodInRest';
import AddFood from '../src/Component/Food/AddFood';
import Footer from '../src/Component/Bottom';
// import { hot } from "react-hot-loader";

class App extends React.Component {

    render () {
        return (
            <div className="whole-page-background-color">
                <MenuBar />
                <Route path="/home" component={Home} />
                <Route path="/hotel" component={HotelList} />
                <Route path="/foodInRest" component={FoodInRest} />
                <Route path="/addFood" component={AddFood} />
                <Route path="/addRestaurant" component={AddRestaurant} />
                <Footer />
                {/* <Route path="/contact" component={contact} /> */}
            </div>
        );
    }
}

export default (App);
