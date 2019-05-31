import React, {Component} from 'react';
import FilterCheckBox from './FilterCheckBox';
import Button from './Button';

class FilterMenu extends Component {

    constructor (props) {
        super(props);
        this.state = {
            locationFilter: false,
            selectedLocation: [],
            message: undefined,
            enableFilter: false
        };
    }

    handleCheckBoxOption (name) {
        let oldLocation = [ ...this.state.selectedLocation ];
        oldLocation.indexOf(name) > -1 ? oldLocation.splice(oldLocation.indexOf(name), 1):oldLocation.push(name);
        this.setState({
            selectedLocation: oldLocation,
            enableFilter: true,
        });
    }

    displayFilterCheckBox = (location, index) => {
        return (
            <FilterCheckBox
                key={index}
                filterdata = {location}
                onChange = {(name)=>this.handleCheckBoxOption(name)}
            />
        );
    }

    render () {

        let {locationFilter , uniqueLocationArray,} = this.props;
        return (
            <div >
                <div style={{backgroundColor:'whitesmoke'}}className={locationFilter ? "filter-box" : ""}>
                    {locationFilter && uniqueLocationArray && uniqueLocationArray.map((location, index)  => this.displayFilterCheckBox(location, index))}
                </div>
                <div className="filter-button">
                   { locationFilter && (<Button
                        text="Filter"
                        id="filter"
                        type="button"
                        class={this.state.enableFilter ?"filter-button-active btn btn-info":"btn btn-secondary filter-button-disable"}
                        handleOnClick = {()=>this.props.onSubmit(this.state.selectedLocation)}
                    />)}
                </div>
            </div>
        );
    }

}
export default FilterMenu;

