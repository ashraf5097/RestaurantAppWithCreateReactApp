import React, { Component } from 'react';
// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ToggleSwitch extends Component {

  state = { enabled: false }

  toggleSwitch = evt => {
    evt.persist();
    evt.preventDefault();
    this.setState({
      enabled:!this.state.enabled
    })
  }

  render() {
    const { enabled } = this.state;
    return (
      // <div className='switch switch--default ' onClick={this.toggleSwitch} >
      //   <div className={this.state.enabled ? 'switch-toggle switch-toggle--on textColor':'switch-toggle switch-toggle--off textColor'}>hkgvjv</div>
      // </div>
      <label className="switch">
      <input type="checkbox"  />
      <span className="slider round"></span>
</label>
      )
  }

}


export default ToggleSwitch;
