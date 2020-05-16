import axios from "axios";

import { FETCH_CUSTOMERS_REQUEST, 
         FETCH_CUSTOMERS_SUCCESS, 
         FETCH_CUSTOMERS_FAILURE } from "./customer-action-types";

axios.defaults.baseURL = 'https://my-json-server.typicode.com/tramachandran/customer-list/';

export const fetchCustomerRequest = () => {
    return {
        type: FETCH_CUSTOMERS_REQUEST
    }
}

export const fetchCustomerSuccess = (customers: any[]) => {
    return {
        type: FETCH_CUSTOMERS_SUCCESS,
        payload: customers
    }
}

export const fetchCustomerFailure = (errorMsg: string) => {
    return {
        type: FETCH_CUSTOMERS_FAILURE,
        payload: errorMsg
    }
}

export const fetchCustomers = () => {
    return (dispatch: Function) => {
        dispatch(fetchCustomerRequest());
        axios.get(`customers`)
          .then(response => {
              const customers = response.data;
              dispatch(fetchCustomerSuccess(customers));
          }).catch((err) => {
            const errorMsg = err.message;
            dispatch(fetchCustomerFailure(errorMsg));
          })
    }
}