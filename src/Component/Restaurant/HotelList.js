import React, {Component} from 'react';
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import hotelData from '../newHotelDataConstant';
import HotelDisplayBox from './HotelDisplayBox';
import FilterCheckBox from '../Common/FilterCheckBox';
import SearchBar from '../Common/SearchBar';
import FilterMenu from '../Common/FilterMenu';
let searchText;

class HotelList extends Component {

    constructor () {
        super();
        this.state = {
            locationFilter: false,
            data: true,
            message: undefined,
            hotelDataFromApi: undefined,
            searchText: '',
            newWaala: undefined,
        };
    }

    componentDidMount () {
        axios.get('http://localhost:8080/displayHotelList', { mode: 'no-cors'})
            .then(fetchedData => {
                let hotelData = fetchedData.data;
                this.setState({
                    message: hotelData,
                    hotelDataFromApi: hotelData,
                });
            });
    }

    hotelClicked (index, HotelID) {
        this.props.history.push({
            pathname: '/foodInRest',
            search: 'uuid=' + HotelID,
        });
        // <NavLink exact to={'/home'} ></NavLink>;
    }

    hotelDisplay (hotelData, index) {
        return (
            <HotelDisplayBox
                hotel={hotelData}
                index={index}
                onClick={()=>this.hotelClicked(index, hotelData.id)}
            />
        );
    }

    hotelFilterDisplay (hotelData, index) {
        return (
            <FilterCheckBox
                hotel={hotelData}
                index={index}
                // onClick={()=>this.hotelClicked(index, hotelData.id)}
            />
        );
    }

    handleLocationFilter () {
        let {locationFilter} = this.state;
        this.setState({
            locationFilter: !locationFilter,
        });
    }

    handleTypeFilter () {
        console.log("Filter with type");
    }

    handleChange (name) {
        this.setState({
            data: true,
        });
    }

    handleSubmit (name) {
        let hotelLocationSelected = name;
        let oldHotelData = [ ...this.state.hotelDataFromApi ];
        let newHotelData = [];

        if (hotelLocationSelected.length) {
            oldHotelData.map(hotelData => {
                if (hotelLocationSelected.indexOf(hotelData.location) > -1) {
                    newHotelData.push(hotelData);
                }
            });
            this.setState({
                message: newHotelData,
            });
        }
    }

    filterCheckBox (hotel) {
        let locationArray = [];
        let uniqueLocationArray = [];
        let {locationFilter} = this.state;
        if (hotel) {
            hotel && hotel.map((hotelData)=>{
                locationArray.push(hotelData.location);
            });
            uniqueLocationArray = [ ...new Set(locationArray) ];
        }
        return (
            <FilterMenu
                uniqueLocationArray={uniqueLocationArray}
                locationFilter={locationFilter}
                onSubmit = {(name)=>this.handleSubmit(name)}
            />
        );
    }

    handleSearchBar (event) {
        searchText = event.target.value;
    }

    handleSearch () {
        // const {message} = this.state;
        if (searchText === '' || searchText.trim() === '') {
            console.log("Error in serach bar");
        } else {
            axios.get('http://localhost:8080/searchHotelByName?name=' + searchText, { mode: 'no-cors'})
                .then(fetchedData => {
                    let hotelData = fetchedData.data;
                    this.setState({
                        message: hotelData,
                    });
                });
        }
    }

    render () {
        const { message, hotelDataFromApi } = this.state;
        let restaurantLength = 0;

        if (message) {
            restaurantLength = message.length;
        }
        return (
            <div className="container-fluid add-in-container-fluid">
                <SearchBar
                    onType={(event)=>this.handleSearchBar(event)}
                    onClick = {()=>this.handleSearch()}
                />
                <h3>{restaurantLength} Restaurant :</h3>

                <div className="row" id="main">
                    <div className="col-md-10 list-background-color">
                        {
                            message && message.map((hotelData, index)=> {
                                return this.hotelDisplay(hotelData, index);
                            })
                        }
                    </div>
                    <div className="col-md-2">
                        <aside>
                            Filter based on:
                            < label className = "dropdown-display-flex cursor-css"
                            onClick = {
                                () => this.handleLocationFilter()
                            } >
                            location
                            </label>
                            {hotelDataFromApi && this.filterCheckBox(hotelDataFromApi)}
                            < label className = "dropdown-display-flex cursor-css"
                            onClick = {
                                () => this.handleTypeFilter()
                            } >
                            type
                            </label>
                        </aside>
                    </div>
                </div>
            </div>
        );
    }
}


export default (HotelList);
