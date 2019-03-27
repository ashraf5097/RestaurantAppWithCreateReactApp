import React, {Component} from 'react';
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import Bottom from '../Bottom';
import axios from 'axios';
// import hotelData from '../newFoodInRestData';
import FoodDisplayBox from './FoodDisplayBox';
import Button from '../Common/Button';


class FoodInRest extends Component {


        state = {
            message: [],
        };

    // displayHotelFoodList
    componentDidMount () {
        axios.get('http://localhost:8080/displayHotelFoodList' + this.props.location.search, { mode: 'no-cors'})
            .then(fetchedData => {
                let foodData = fetchedData.data;
                this.setState({message: foodData });
            })
            .catch(()=> {
                
                this.setState({
                    message: [],

                })
            })
    }

    hotelClicked (index) {
    }

    handleAddFoodButton (index, HotelID, HotelName) {
        this.props.history.push({
            pathname: '/addFood',
            search:  this.props.location.search,
            restaurant: this.props.location.restaurant,
            restaurantId: this.props.location.id
        });
    }

    hotelDisplay (hotelFoodData, index) {
        return (
            <FoodDisplayBox
                food={hotelFoodData}
                index={index}
                onClick={()=>this.hotelClicked(index)}
            />
        );
    }

    render () {
        
        const { message } = this.state;
        if (message.length) {
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
                            message && message.map((hotelData, index)=> {
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


export default FoodInRest;


