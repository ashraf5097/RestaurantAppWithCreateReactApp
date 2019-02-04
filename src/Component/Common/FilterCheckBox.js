import React, {Component} from 'react';
class FilterCheckBox extends Component {

    constructor (props) {
        super(props);
        this.state = {
            articles: [
                { title: "React Redux Tut", id: 1 },
                { title: "Redux e React: ", id: 2 },
            ],
            locationFilter: false,
            message: undefined,
        };
    }

    handleChange (name) {
        this.props && this.props.onChange(name);
    }

    render () {
        let option = this.props.filterdata
        return (
            <div className="">
                <div class="custom-control custom-checkbox ">
                    <input type="checkbox" className="custom-control-input" id={option} onChange={()=>this.handleChange(option)} />
                    <label className="custom-control-label cursor-css" for={option}>{this.props.filterdata}</label>
                </div>
            </div>
        );
    }
}
export default FilterCheckBox;

