import React, {Component} from 'react';
import TextBox from '../Common/TextBox';
import {connect} from 'react-redux';
import NumberTextBox from '../Common/NumberTextBox';
import Button from '../Common/Button';
import HotelDisplayBox from '../Restaurant/HotelDisplayBox';
import axios from 'axios';
import {imageConstantFile} from '../../ui-common/imageConstantFile';
import * as actions from '../../store/action/actionCreator';


const mapStateToProps = state =>{
    return {
        isSaved: state.isSaved,
    }
}

const mapDispatchToProps = dispatch => {
   return{
    addRestaurantList : (restaurantList) => dispatch(actions.addRestaurantList(restaurantList)),
    resetIsSaved : (isSavedValue) => dispatch(actions.savedSuccessFully(isSavedValue))
   }
}

class AddRestaurant extends Component {
    constructor (props) {
        super(props);
        this.state = {
            restName: '',
            restLocation: '',
            restContact: '',
            restaurantList: [],
            index: -1,
            fileName:'',
            files:'',
            isSaved: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if (nextProps.isSaved !== prevState.isSaved) {
            return { isSaved : nextProps.isSaved}
        } else return null;
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.isSaved !== this.state.isSaved) {
                this.handleOnclear();
                this.setState({
                    restaurantList: [],
                    isSaved: false
                });
                this.props.resetIsSaved(false);
        }
    }

    handleOnSubmit () {
        const {restaurantList} = this.state;
        if (restaurantList.length) {
            this.props.addRestaurantList(restaurantList)
        }
    }

    handleChange (event) {
        if (event.target.id === 'usr') {
            this.setState({restName: event.target.value});
        }
        if (event.target.id === 'loc') {
            this.setState({restLocation: event.target.value});
        }
        if (event.target.id === 'con') { this.setStateForContactNumber(event); }
    }

    setStateForContactNumber(event) {
        let { restContact } = this.state;
        let eventTargetValue = event.target.value;
        let regex = /^[0-9\s]*$/;
        let isValid  = regex.test(eventTargetValue);

        if(isValid ) {
            if (restContact.length < 10 || ( eventTargetValue.length < restContact.length))
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
        this.handleOnclear();
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
                    ImageFileConstant={imageConstantFile}
                    ImageWidthHeight='image-widht-height-for-addRestaurant'
                    box='box-for-addRestaurant'
                    hover= {false}
                    // onClick={()=>this.hotelClicked(index, hotelData.id)}
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

//     handleUploadImage = (event) => {
//         let files = event.target.files[0];
//             const formData = new FormData()

//         //     files[0].forEach((file, i) => {
//         //         formData.append(i, file)
//         //       })


//         // if(files.length){
//         //     let filename = files[0].name;
            
//         //     this.setState({
//         //         fileName : filename,
//         //         files
//         //     });
//         // }
//     }

    render () {
        
        const {restaurantList} = this.state;
        return (
            <div className="form-group container-fluid add-in-container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <TextBox
                                label="Restaurant Name"
                                type="text"
                                id="usr"
                                name="restaurantName"
                                value={this.state.restName}
                                handleChange={this.handleChange}
                            />
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
                            <NumberTextBox
                                label="Contact"
                                type="text"
                                id="con"
                                name="contact"
                                value={this.state.restContact}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <div>
                             <label className="label-for-upload">Upload</label>
                            <div>
                                <span className= "control-fileupload">
                                    <label for="fileInput" className = "text-inside-uploadBox">Select an image</label>
                                    <input type="file" id="fileInput" onChange={this.handleUploadImage} />
                                </span>
                            </div>
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
                    <div className = "col-md-8">
                        <div>
                            List of Restaurant :
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

export default connect(mapStateToProps, mapDispatchToProps)(AddRestaurant);
