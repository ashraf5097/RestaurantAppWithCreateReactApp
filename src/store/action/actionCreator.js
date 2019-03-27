import axios from "axios";


export const fetchedHotelList = (fetchedList) => {
    return {
        type: 'FETCHED_HOTEL_SET',
        payload: fetchedList
    }
}

export const fetchedHotelSearched = (fetchedList) => {
    return {
        type: 'FETCHED_HOTEL_SEARCH',
        payload: fetchedList
    }
}

export const fethcedHotelLocation = (fetchedList) => {
    return {
        type: 'FETCHED_HOTEL_LOCATION',
        payload: fetchedList
    }
}

export const fetchHotelList = () => {
    return dispatch => {
        axios.get('http://localhost:8080/displayHotelList', { mode: 'no-cors'})
        .then( response => {
            dispatch(fetchedHotelList(response.data))
        });
    }
}

export const fetchSearchHotelList = (searchText) => {
    return dispatch => {
        axios.get('http://localhost:8080/searchHotelByName?name=' + searchText, { mode: 'no-cors'})
        .then( response => {
            dispatch(fetchedHotelSearched(response.data))
        });
    }
}

export const  fetchHotelLoction = () => {
    return dispatch => {
        axios.get('http://localhost:8080/displayHotelLocation', {mode: 'no-cors'})
        .then(response => dispatch(fethcedHotelLocation(response.data)));
    }
}

// Post Data

export const addRestaurantList = (restaurantList) => {
    return dispatch =>  {
        axios.post('http://localhost:8080/addHotel', restaurantList,{mode: 'no-cors'})
        .then(() => {
            console.log("Saved Successfully");
            dispatch(savedSuccessFully(true))
        })
    }
}

export const savedSuccessFully = (isSaved) => {
    return {
        type: 'SAVED_HOTEL',
        payload: isSaved
    }
}