import React from 'react';
const FilterCheckBox = ({filterdata, onChange}) => {
        return (
            <div >
                <div className="custom-control custom-checkbox ">
                    <input type="checkbox" className="custom-control-input" id={filterdata} value={filterdata} onChange={()=>onChange(filterdata)} />
                    <label className="custom-control-label cursor-css" for={filterdata}>{filterdata}</label>
                </div>
            </div>
        );
}
export default FilterCheckBox;

