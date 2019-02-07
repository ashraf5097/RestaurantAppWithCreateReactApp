import React, {Component} from 'react';
import FilterCheckBox from './FilterCheckBox';
import Button from './Button';

class FilterMenu extends Component {

    constructor (props) {
        super(props);
        this.state = {
            articles: [
                { title: "React Redux Tut", id: 1 },
                { title: "Redux e React: ", id: 2 },
            ],
            locationFilter: false,
            selectedLocation: [],
            message: undefined,
            enableFilter: false
        };
    }

    handleCheckBoxOption (name) {

        let oldLocation = [ ...this.state.selectedLocation ];

        if (oldLocation.indexOf(name) > -1) {
            oldLocation.splice(oldLocation.indexOf(name), 1);
        } else {
            oldLocation.push(name);
        }
        this.setState({
            selectedLocation: oldLocation,
            enableFilter: true,
        });
    }

    handleSubmit (name) {
        this.props && this.props.onSubmit(this.state.selectedLocation);
    }

    render () {
        let {locationFilter , uniqueLocationArray,} = this.props;
        let {enableFilter} = this.state;
        return (
            <div>
                <div className={locationFilter ? "filter-box" : ""}>
                    {
                        locationFilter && uniqueLocationArray && uniqueLocationArray.map((location, index)  =>{
                            return (
                                <FilterCheckBox
                                    key={index}
                                    filterdata = {location}
                                    onChange = {(name)=>this.handleCheckBoxOption(name)}
                                />
                            );
                        })
                    }
                </div>
                <div className="filter-button">
                <Button
                    text="Filter"
                    id="filter"
                    type="button"
                    class={enableFilter ?"filter-button-active btn btn-info":"btn btn-secondary filter-button-disable"}
                    handleOnClick = {(name)=>this.handleSubmit(name)}
                />
                </div>
                
            </div>
        );
    }

}
export default FilterMenu;

