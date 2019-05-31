import React, { useState, useEffect, Component } from 'react';
import mainLogo from '../ui-common/images/download.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './Common/Example';
import axios from "axios";

let b = [ "trn:tesco:uid:uuid:66c73acf-4306-4edd-8c08-7ffc84808e44",
"trn:tesco:uid:uuid:7a9c14cd-b1f0-4e3b-b384-0159a0530f7d",
"trn:tesco:uid:uuid:b541eaa3-96cd-4940-9788-661a1551b297",
"trn:tesco:uid:uuid:6e2379d1-baf8-47c8-868d-9e50d15f47a3",
"trn:tesco:uid:uuid:52284d33-5bac-43f4-a30e-5be87eff1531",
"trn:tesco:uid:uuid:a2c75906-1c43-4f5e-a91c-7901119ee2f8",
"trn:tesco:uid:uuid:19239980-82eb-4228-aa0f-030a7c56c7d6",
"trn:tesco:uid:uuid:48b5bd6b-e9c7-4fed-91a9-982a6fda9fa8",
"trn:tesco:uid:uuid:27e3a9ae-e884-4d91-b571-af20d8286ea3",
"trn:tesco:uid:uuid:c63593d8-0fe7-4824-a628-e4369c4f5630",
"trn:tesco:uid:uuid:17d7c10e-a487-425e-ae59-e7e64775368f",
"trn:tesco:uid:uuid:64dd5ce8-16b7-4c93-b3b9-c6147e659ccd",
"trn:tesco:uid:uuid:35780ebc-1e97-48df-8d88-9fd4e6899cea"];

class Home extends Component {

    state = {

    }

    callApi = () => {
        // let axios_defaults_headers = {
        //     'Access-Control-Allow-Origin': "*",
        //     crossorigin:true,
        //      'Authorization': 'Bearer 78489ac6-c737-48ae-9273-d0bf7d472dfb',
        //     // 'Accept-Language': 'en-gb'
        // }
    
    //    axios.get('https://api.tesco.com/contact/v1/addressbook/emailaddresses?userId=trn:tesco:uid:uuid:4d24c25a-f314-491c-ad69-1ff8a4a573fb', {
    //     headers: {
    //       Authorization: 'Bearer ' + '78489ac6-c737-48ae-9273-d0bf7d472dfb',
    //       'Access-Control-Allow-Origin': "*",
    //       crossorigin:true,

    //     }
    //    })
    //         .then(response => {
    //             console.log('Response', response)
    //         })
    //         .catch(e => {
    //             console.log('Er: ', e)
    //         })


    axios.get('http://localhost:3010/checkUUID', { mode: 'no-cors'})
        .then( response => {
            console.log(response);
            
        });
    }

    render () {
        return (
            <div className='container'>
            <Example />
                <button onClick={() => this.callApi()}>
                    Click me
                </button>
            </div>
        );
    }
}

export default Home
