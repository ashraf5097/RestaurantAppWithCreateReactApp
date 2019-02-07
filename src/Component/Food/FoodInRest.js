import React, {Component} from 'react';
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import Bottom from '../Bottom';
import axios from 'axios';
// import hotelData from '../newFoodInRestData';
import FoodDisplayBox from './FoodDisplayBox';


class FoodInRest extends Component {


        state = {
            message: undefined,
        };

    // displayHotelFoodList
    componentDidMount () {
        axios.get('http://localhost:8080/displayHotelFoodList' + this.props.location.search, { mode: 'no-cors'})
            .then(fetchedData => {
                let foodData = fetchedData.data;
                this.setState({message: foodData });
            });
    }

    hotelClicked (index) {
        console.log("In rest List");
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
        return (
            <div className="container-fluid add-in-container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        {
                            message && message.map((hotelData, index)=> {
                                return this.hotelDisplay(hotelData, index);
                            })
                        }
                    </div>
                    <div className="col-md-2">
                        <aside>
                            something
                        </aside>
                    </div>
                </div>
            </div>
        );
    }
}


export default FoodInRest;


