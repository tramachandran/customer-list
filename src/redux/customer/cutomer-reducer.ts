import {FETCH_CUSTOMERS_REQUEST, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_FAILURE} from "./customer-action-types"

const initial_state = {
    isLoading: false,
    customers: [],
    errorMsg: ''
};

const customerReducer = (state = initial_state, action: any) => {
    switch (action.type) {
        case FETCH_CUSTOMERS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_CUSTOMERS_SUCCESS: 
            return {
                isLoading : false,
                customers: action.payload,
                errorMsg: ''
            }
        case FETCH_CUSTOMERS_FAILURE:
            return {
                isLoading: false,
                customers: [],
                errorMsg: action.payload
            }
        default:
            return state;    
    }
};

export default customerReducer;