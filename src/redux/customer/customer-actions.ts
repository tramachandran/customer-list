import axios from "axios";

import { FETCH_CUSTOMERS_REQUEST, 
         FETCH_CUSTOMERS_SUCCESS, 
         FETCH_CUSTOMERS_FAILURE } from "./customer-action-types";

axios.defaults.baseURL = 'https://my-json-server.typicode.com/tramachandran/customer-list/';

export const fetchUserRequest = () => {
    return {
        type: FETCH_CUSTOMERS_REQUEST
    }
}

export const fetchUserSuccess = (customers: any[]) => {
    return {
        type: FETCH_CUSTOMERS_SUCCESS,
        payload: customers
    }
}

export const fetchUserFailure = (errorMsg: string) => {
    return {
        type: FETCH_CUSTOMERS_FAILURE,
        payload: errorMsg
    }
}

export const fetchCustomers = () => {
    return (dispatch: Function) => {
        dispatch(fetchUserRequest());
        axios.get(`customers`)
          .then(response => {
              const customers = response.data;
              dispatch(fetchUserSuccess(customers));
          }).catch((err) => {
            const errorMsg = err.message;
            dispatch(fetchUserFailure(errorMsg));
          })
    }
}