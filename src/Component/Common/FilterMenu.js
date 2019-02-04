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
        });
    }

    handleSubmit (name) {
        this.props && this.props.onSubmit(this.state.selectedLocation);
    }

    render () {
        let {locationFilter , uniqueLocationArray} = this.props;
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
                <Button
                    text="Filter"
                    id="filter"
                    type="button"
                    class="btn btn-secondary"
                    handleOnClick = {(name)=>this.handleSubmit(name)}
                />
            </div>
        );
    }

}
export default FilterMenu;

