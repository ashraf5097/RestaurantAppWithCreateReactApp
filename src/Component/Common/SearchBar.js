import React from 'react';

const SearchBar = (props) => {
    return (
        <div id="custom-search-input">
            <div className = "row row-search-bar" >
                <div className = "col-md-7">
                    <input type="text" className="form-control input-lg" placeholder="Search by Location ,Name"
                        onChange={(event)=>props.onType(event)}
                        // onChange={props.onType(event)}
                    />
                </div>
                <div className = "col-md-5">
                    <button type="button" className="btn btn-info" onClick={props.onClick}>
                        <span className="glyphicon glyphicon-search"></span> Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
