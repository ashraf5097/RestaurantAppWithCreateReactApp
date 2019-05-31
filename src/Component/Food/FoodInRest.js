import React, {Component} from 'react';
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import Bottom from '../Bottom';
import axios from 'axios';
// import hotelData from '../newFoodInRestData';
import FoodDisplayBox from './FoodDisplayBox';
import Button from '../Common/Button';
import {connect} from 'react-redux';

const mapStateToProps = state =>{
    return {
        restaurantIdSelectedForFood : state.restaurantIdSelectedForFood
    }
}
class FoodInRest extends Component {


        state = {
            foodList: [],
        };

    // displayHotelFoodList
    componentDidMount () {
        axios.get('http://localhost:3010/displayHotelFoodList?' +'hotelId='+ this.props.restaurantIdSelectedForFood, { mode: 'no-cors'})
            .then(fetchedData => {
                let foodData = fetchedData.data;
                this.setState({foodList: foodData });
            })
            .catch(()=> {
                this.setState({
                    foodList: [],

                })
            })
    }

    foodClicked (index) {
    }

    handleAddFoodButton (index, HotelID, HotelName) {
        this.props.history.push({
            pathname: '/addFood',
            search:  this.props.location.search,
            restaurant: this.props.location.restaurant,
            id: this.props.location.hotelId
        });
    }

    hotelDisplay (hotelFoodData, index) {
        return (
            <FoodDisplayBox
                food={hotelFoodData}
                index={index}
                onClick={()=>this.foodClicked(index)}
            />
        );
    }

    render () {
        console.log("this.props = ", this.props);
        
        const { foodList } = this.state;
        if (foodList.length) {
            return (
            <span>
                <div className="container-fluid add-in-container-fluid">
                        <Button
                            text="Add Food"
                            id="add"
                            type="button"
                            class="btn btn-primary floatRight "
                            handleOnClick={()=>this.handleAddFoodButton()}
                        />
                    <div>
                        {
                            foodList && foodList.map((hotelData, index)=> {
                                return this.hotelDisplay(hotelData, index);
                            })
                        }
                    </div>
                            
                </div>
                </span>
            );
        } else {
            return (
                <div className="container-fluid add-in-container-fluid">
                    No data available for this restaurant  :(
                </div>
            )
        }
        
    }
}

export default connect(mapStateToProps, {})(FoodInRest);


