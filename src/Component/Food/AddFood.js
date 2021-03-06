import React, {Component} from 'react';
import TextBox from '../Common/TextBox';
import Button from '../Common/Button';
import axios from 'axios';
import FoodDisplayBox from './FoodDisplayBox';
import HotelDisplayBox from '../Restaurant/HotelDisplayBox';
import {imageConstantFile} from '../../ui-common/imageConstantFile';
import * as actions from '../../store/action/actionCreator';
import {connect} from 'react-redux';

const mapStateToProps = state =>{
    return {
        isSaved: state.isSaved,
    }
}

const mapDispatchToProps = dispatch => {
   return{
    addFoodList : (foodList,id) => dispatch(actions.addFoodList(foodList,id)),
    resetIsSaved : (isSavedValue) => dispatch(actions.savedSuccessFully(isSavedValue))
   }
}

class AddFood extends Component {
    constructor (props) {
        super(props);
        this.state = {
            foodname:'',
            type: '',
            price: '',
            restaurantList: [],
            foodList: [],
            restaurantId:'',
            restaurantName:'',
            index: -1,
        };
    }

    // displayHotelFoodList
    componentDidMount () {
        this.setState({
            restaurantName: this.props.location.restaurant,
            restaurantId: this.props.location.id
        })
        axios.get('http://localhost:3010/displayHotelListWithoutFood', { mode: 'no-cors'})
            .then(fetchedData => {
                this.setState({restaurantList: fetchedData.data });
            });
    }

    handleChange = (event) => {
        if (event.target.id === 'food') {
            this.setState({
                foodname: event.target.value,
            });
        }
        if (event.target.id === 'type') {
            this.setState({
                type: event.target.value,
            });
        }
        if (event.target.id === 'price') {
            this.setState({
                price: event.target.value,
            });
        }
    }

    handleOnAdd () {
        const {foodname, price, type, foodList, index} = this.state;
        if (index !== -1) {
            this.handleOnDelete(index);
        }
        let foodBox = {
            foodname: foodname,
            type: type,
            price: price,
            hotelId: this.state.restaurantId
        };

        let newfoodBox = [ ...foodList, ...[ foodBox ] ];
        if (foodname !== '' && type !== '' && price !== '') {
            this.setState({
                foodList: newfoodBox,
                index: -1,
            });
        }
        this.handleOnclear()
    }

    handleOnclear () {
        this.setState({
            foodname: '',
            price: '',
            type: '',
        });
    }

    handleOnDelete (index) {
        const {foodList} = this.state;
        foodList.splice(index, 1);
        this.setState({foodList});
    }

    handleOnEdit (index) {
        const {foodList} = this.state;
        this.setState({
            foodname: foodList[index].foodname,
            type: foodList[index].type,
            price: foodList[index].price,
            index: index,
        });
    }

    hotelClicked (index, HotelName,HotelID) {
        console.log("HotelID = ", HotelID)
        this.setState({
            restaurantId: HotelID,
            restaurantName: HotelName
        })
    }

    hotelDisplay (hotelData, index) {
        return (
            <div key={hotelData.id}>
                <HotelDisplayBox
                    hotel={hotelData}
                    index={index}
                    ImageFileConstant={imageConstantFile}
                    ImageWidthHeight='image-widht-height-for-addRestaurant'
                    box='box-for-addRestaurant'
                    onClick={()=>this.hotelClicked(index, hotelData.name,hotelData._id)}
                />
            </div>
        );
    }

    foodDisplay (hotelData, index) {
        return (
            <div>
                <FoodDisplayBox
                    food={hotelData}
                    index={index}
                    ImageFileConstant={imageConstantFile}
                />
                <Button
                    text="Delete"
                    id="delete"
                    index={index}
                    type="button"
                    class="btn btn-secondary"
                    handleOnClick={()=>this.handleOnDelete(index)}
                />
                <Button
                    text="Edit"
                    id="edit"
                    index={index}
                    type="button"
                    class="btn btn-primary"
                    spanStyleButton="spanStyleButton"
                    handleOnClick={()=>this.handleOnEdit(index)}
                />
            </div>
        );
    }

    handleOnSubmit () {
        if (this.state.foodList.length) {
            this.props.addFoodList(this.state.foodList, this.state.restaurantId)
        }
    }

    render () {
        const {restaurantList,foodList,restaurantName} = this.state;
 
        return (
            <div className="form-group container-fluid add-in-container-fluid">
                {restaurantName ? <h3>Update {restaurantName}'s Food : </h3>:<h3>Select Restaurant to add food</h3>}
                <div className="row">
                    <div className="col-md-3">
                        <div>
                            <TextBox
                                label="Food Name"
                                type="text"
                                id="food"
                                name="foodname"
                                value={this.state.foodname}
                                handleChange={(event) => this.handleChange(event)}
                            />
                        </div>
                        <div >
                            <TextBox
                                label="Food Type"
                                type="text"
                                id="type"
                                name="type"
                                value={this.state.type}
                                handleChange={(event) => this.handleChange(event)}
                            />
                        </div>
                        <div >
                            <TextBox
                                label="Price"
                                type="number"
                                id="price"
                                name="price"
                                value={this.state.price}
                                handleChange={(event) => this.handleChange(event)}
                            />
                        </div>
                        <div className="button-space">
                            <Button
                                text="Clear"
                                id="clear"
                                type="button"
                                class="btn btn-secondary"
                                handleOnClick={()=>this.handleOnclear()}
                            />
                            <Button
                                text="Add"
                                id="add"
                                type="button"
                                class="btn btn-primary"
                                handleOnClick={()=>this.handleOnAdd()}
                            />
                        </div>
                        <div className="submit-btn-in-AddRest">
                            <Button
                                text="Submit"
                                id="add"
                                type="button"
                                class="btn btn-primary"
                                handleOnClick={()=>this.handleOnSubmit()}
                            />
                        </div>
                    </div>
                    <div className = "col-md-4">
                        <div>
                            List of food :
                        </div>
                        <div className='addScrollBar'>
                        { foodList && foodList.map((hotelData, index)=> this.foodDisplay(hotelData, index))}
                        </div>
                    </div>
                    <div className = "col-md-4">
                        List of Restaurant with no food :
                        <div className='addScrollBar'>
                        { restaurantList && restaurantList.map((hotelData, index)=>  this.hotelDisplay(hotelData, index))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFood);
