
const initialState = {
    hotelList : [],
    hotelLocation : [],
    allHotelList: [],
    isSaved: false,
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        
        case 'FETCHED_HOTEL_SET' :
        return {...state, hotelList:action.payload, allHotelList: action.payload};

        case 'FETCHED_HOTEL_SEARCH' :
        return {...state, hotelList:action.payload};

        case 'FETCHED_HOTEL_LOCATION' :
        return {...state, hotelLocation:action.payload};

        case 'SAVED_HOTEL' :
        return {...state, isSaved:action.payload}
        default: return state;
    }
}

export default reducer;