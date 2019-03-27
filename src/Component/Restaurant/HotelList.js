import React, {Component} from 'react';
// import Switch from "react-switch";

import {connect} from 'react-redux';
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import HotelDisplayBox from './HotelDisplayBox';
import SearchBar from '../Common/SearchBar';
import FilterMenu from '../Common/FilterMenu';
import * as actions from '../../store/action/actionCreator';
// import Switch from '../Common/ToggleSwitch';
import {imageConstantFile} from '../../ui-common/imageConstantFile';
import downArrow from '../../ui-common/images/down-arrow.svg'
let searchText;


const mapStateToProps = state =>{
    return {
        hotelList: state.hotelList,
        hotelLocation: state.hotelLocation,
        allHotelList: state.allHotelList,
    }
}

const mapDispatchToProps = dispatch => {
   return{
       getHotelList: () => dispatch(actions.fetchHotelList()),
       getSearchHotelList: (searchText) => dispatch(actions.fetchSearchHotelList(searchText)),
       getFilterHotelList: (searchText) => dispatch(actions.fetchedHotelSearched(searchText)),
       getHotelLocation: () => dispatch(actions.fetchHotelLoction())
   }
}

class HotelList extends Component {

    state = { locationFilter: false};

    componentDidMount () {
        this.props.getHotelList()
        this.props.getHotelLocation();
    }

    hotelClicked (index, HotelID, HotelName) {
        this.props.history.push({
            pathname: '/foodInRest',
            search: 'uuid=' + HotelID ,
            id: HotelID,
            restaurant: HotelName
        });
    }

    handleSubmit =  (hotelLocationSelected) => {
        if (hotelLocationSelected.length) {
            let hotelList = this.props.allHotelList.filter(oldHotelValue => hotelLocationSelected.indexOf(oldHotelValue.location) > -1);
            this.props.getFilterHotelList(hotelList);
        } else {
            this.props.getHotelList()
        }
    }

    filterCheckBox (locationFilter) {
            let uniqueLocationArray = [ ...new Set(this.props.hotelLocation) ];
            return (
                <FilterMenu
                    uniqueLocationArray={uniqueLocationArray}
                    onSubmit = {(name)=>this.handleSubmit(name)}
                    locationFilter = {locationFilter}
                />
            );
    }

    filterComponent () {
        let {locationFilter} = this.state;
        return(
            <aside>
                <h4>Filter based on:</h4>
                < label className = " arrow dropdown-display-flex cursor-css" onClick = { () => this.setState({ locationFilter:!locationFilter}) } > location <img className = 'downArrow' src={downArrow} /></label>
                {this.props.hotelLocation && this.filterCheckBox(locationFilter)}
            </aside>
        );
    }

    handleSearchBar = event => searchText = event.target.value;

    handleSearch = () => searchText && (searchText !== '' && searchText.trim() !== '') ? this.props.getSearchHotelList(searchText) : null;


    render () {
        let {hotelList} = this.props;
        
        return (
            <div className="container-fluid add-in-container-fluid">
                <SearchBar
                    onType={(event)=>this.handleSearchBar(event)}
                    onClick = {()=>this.handleSearch()}
                />

                <h3>{hotelList.length} Restaurant :</h3>

                <div className="row" id="main">
                    <div className="col-md-10 list-background-color">
                        {hotelList && hotelList.map((hotelData, index)=> this.hotelDisplay(hotelData, index))}
                    </div>
                    <div className="col-md-2" style={{backgroundColor:'darkgrey',borderRadius:'4px'}}>
                        { this.filterComponent()}
                    </div>
                </div>
            </div>
        );
    }

    hotelDisplay (hotelData, index) {
        return (
            <HotelDisplayBox
                key={index}
                hotel={hotelData}
                index={index}
                ImageFileConstant={imageConstantFile}
                box='box'
                hover= {true}
                ImageWidthHeight='image-widht-height'
                onClick={()=>this.hotelClicked(index, hotelData.id, hotelData.name)}
            />
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HotelList);
