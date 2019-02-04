import React, {Component} from 'react';
import TextBox from '../Common/TextBox';
import Button from '../Common/Button';
import { throws } from 'assert';
import axios from 'axios';
import FoodDisplayBox from '../Food/FoodDisplayBox';
import HotelDisplayBox from '../Restaurant/HotelDisplayBox';

class AddFood extends Component {
    constructor (props) {
        super(props);
        this.state = {
            restName: '',
            restLocation: '',
            restContact: '',
            restaurantList: [],
            index: -1,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    // displayHotelFoodList
    componentDidMount () {
        axios.get('http://localhost:8080/displayHotelListWithoutFood', { mode: 'no-cors'})
            .then(fetchedData => {
                console.log("fetchedData = ", fetchedData);
                let hotelData = fetchedData.data;
                this.setState({restaurantList: hotelData });
            });
    }

    handleChange (event) {
        if (event.target.id === 'usr') {
            this.setState({
                restName: event.target.value,
            });
        }
        if (event.target.id === 'loc') {
            this.setState({
                restLocation: event.target.value,
            });
        }
        if (event.target.id === 'con') {
            this.setState({
                restContact: event.target.value,
            });
        }
    }

    handleOnAdd () {
        const {restName, restLocation, restContact, restaurantList, index} = this.state;
        if (index !== -1) {
            this.handleOnDelete(index);
        }
        let restBox = {
            name: restName,
            location: restLocation,
            contact: restContact,
        };

        let newRestBox = [ ...restaurantList, ...[ restBox ] ];
        if (restName !== '' && restLocation !== '' && restContact !== '') {
            this.setState({
                restaurantList: newRestBox,
                index: -1,
            });
        }
    }

    handleOnclear () {
        this.setState({
            restName: '',
            restContact: '',
            restLocation: '',
        });
    }

    handleOnDelete (index) {
        const {restaurantList} = this.state;
        restaurantList.splice(index, 1);
        this.setState({restaurantList});
    }

    handleOnEdit (index) {
        const {restaurantList} = this.state;
        this.setState({
            restName: restaurantList[index].name,
            restLocation: restaurantList[index].location,
            restContact: restaurantList[index].contact,
            index: index,
        });
    }

    hotelDisplay (hotelData, index) {
        return (
            <div>
                <HotelDisplayBox
                    hotel={hotelData}
                    index={index}
                    onClick={()=>this.hotelClicked(index, hotelData.id)}
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

    render () {
        const {restaurantList} = this.state;
        return (
            <div className="form-group container-fluid add-in-container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <TextBox
                                label="Food Name"
                                type="text"
                                id="usr"
                                name="restaurantName"
                                value={this.state.restName}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <div >
                            <TextBox
                                label="Location"
                                type="text"
                                id="loc"
                                name="location"
                                value={this.state.restLocation}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <div >
                            <TextBox
                                label="Contact"
                                type="number"
                                id="con"
                                name="contact"
                                value={this.state.restContact}
                                handleChange={this.handleChange}
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
                    </div>
                    <div className = "col-md-8">
                        <div>
                            List of Restaurant to add food :
                        </div>
                        {
                            restaurantList && restaurantList.map((hotelData, index)=> {
                                return this.hotelDisplay(hotelData, index);
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default AddFood;
