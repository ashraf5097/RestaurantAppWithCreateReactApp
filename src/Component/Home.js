import React, {Component} from 'react';
import mainLogo from '../ui-common/images/download.png';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {

    render () {
        return (
            <div className='container'>
            
                <div className='row'>
                    <div className='col-md-2'>
                        sdfgh112345
                    </div>
                    <div className='col-md-10'>
                        <ul className='box'>
                            <img  src={mainLogo}  alt="fireSpot"/>
                        </ul>
                        <ul className='box'>
                            <img  src={mainLogo}  alt="fireSpot"/>
                        </ul>
                        <ul className='box'>
                            <img  src={mainLogo}  alt="fireSpot"/>
                        </ul>
                        <ul className='box'>
                            <img  src={mainLogo}  alt="fireSpot"/>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home
