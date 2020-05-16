import {
    FETCH_ADDRESSES_REQUEST,
    FETCH_ADDRESSES_FAILURE,
    FETCH_ADDRESSES_SUCCESS,
    SET_SELECTED_CUSTOMER_ID

} from "./address-action-types";

const initial_state = {
    selected_Customer_Id: '',
    is_address_loading: true,
    address: [],
    errorMsg: ''
}

const addressReducer = (state = initial_state, action: any) => {
    switch(action.type) {
        case FETCH_ADDRESSES_REQUEST:
            return {
                ...state,
                is_address_loading: true,
            }
        case FETCH_ADDRESSES_SUCCESS:
            return {
                ...state,
                is_address_loading: false,
                address: mapAddrWithCustomer(state.address, action.payload),
                errorMsg: ''
            }
        case FETCH_ADDRESSES_FAILURE:
            return {
                ...state,
                is_address_loading: false,
                errorMsg: action.payload
            }
        case SET_SELECTED_CUSTOMER_ID:
            return {
                ...state,
                selected_Customer_Id: action.payload
            }   
        default:
            return state;
    }
}

 const mapAddrWithCustomer = (stateAddr: any[], data: any) => {
    const address = {
        customerId : data.id,
        addresses: data.address
    };
    return [...stateAddr, address];
}; 

export default addressReducer;