import {
    FETCH_ADDRESSES_REQUEST,
    FETCH_ADDRESSES_FAILURE,
    FETCH_ADDRESSES_SUCCESS,
    SET_SELECTED_CUSTOMER_ID

} from "./address-action-types";
import axios from "axios";

export const fetchAddressesRequest = () => {
    return {
        type: FETCH_ADDRESSES_REQUEST
    }
};

export const fetchAddressesSuccess = (addresses: any[]) => {
    return {
        type: FETCH_ADDRESSES_SUCCESS,
        payload: addresses
    }
}

export const fetchAddressesFailure = (errorMsg: string) => {
    return {
        type: FETCH_ADDRESSES_FAILURE,
        payload: errorMsg
    }
}

export const setSelectedCustomerId = (customerId: number) => {
    return {
        type: SET_SELECTED_CUSTOMER_ID,
        payload: customerId
    }
}

export const fetchAddresses = (customerId: number) => {
    return (dispatch: Function) => {
        dispatch(fetchAddressesRequest());
        axios.get(`address/${customerId}`)
        .then((response: any) => {
            const addresses = response.data;
            dispatch(fetchAddressesSuccess(addresses));
        })
        .catch((err: any) => {
            const errorMsg = err.message;
            dispatch(fetchAddressesFailure(errorMsg));
        })     
    }
}