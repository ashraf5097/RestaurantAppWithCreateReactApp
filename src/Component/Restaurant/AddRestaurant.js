import React, {Component} from 'react';
import TextBox from '../Common/TextBox';
import {connect} from 'react-redux';
import NumberTextBox from '../Common/NumberTextBox';
import Button from '../Common/Button';
import HotelDisplayBox from '../Restaurant/HotelDisplayBox';
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
            fileType: '',
            newFile: null,
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


    handleChange = (event) => {
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


    handleOnSubmit () {
        let {restaurantList} = this.state;
        if (restaurantList.length) {
            this.props.addRestaurantList(this.state.file)
        }
    }

    handleOnAdd () {
        const {restName, restLocation, restContact, restaurantList, index, file, fileType} = this.state;
        if (index !== -1) {
            this.handleOnDelete(index);
        }
        
        
        let restBox = {
            name: restName,
            location: restLocation,
            contact: restContact,
            // uploadedImageName: formData,
            uploadedImageType: fileType,
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

    handleUploadImage = (event) => {
        event.preventDefault();

        this.setState({
            file: event.target.files[0],
            fileType: event.target.files[0].type
        });
    }


    render () {

        const {restaurantList} = this.state;
        console.log(restaurantList);

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
                                handleChange={(event) => this.handleChange(event)}
                            />
                            <TextBox
                                label="Location"
                                type="text"
                                id="loc"
                                name="location"
                                value={this.state.restLocation}
                                handleChange={(event) => this.handleChange(event)}
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
                        {/* <div>
                            <form onSubmit={this.handleUploadImagea}>
                                <h1>File Upload</h1>
                                <input type="file" name="myImage" onChange= {this.onChange} />
                                <button type="submit">Upload</button>
                            </form>
                        </div> */}
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
