import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchCustomers } from "../redux";
import Customer from "./Customer";
import "./CustomerList.scss";

function CustomerList(stateProps: any)  {
    const {customersData, fetchCustomers} = stateProps;
    useEffect(() => {
        fetchCustomers()
    }, [fetchCustomers]);
    const customers = customersData.customers;
    if (customersData.isLoading) {
        return <div><h2>Loading.....</h2></div>
    } else if (customersData.errorMsg !== '') {
        return <div className="error"><h5>{customersData.errorMsg}</h5></div>
    } else {
        const content = customers.length > 0 ? customers.map((customer: any, index: number) => {
            return <Customer key={customer.id} customerData={customer}></Customer>
        }) : <span>No customers available</span>;
        return (
            <div className="customerList">
                <h2>Customers List</h2>
                <div className="listHeader">
                    <span>Customer Name</span>
                    <span>Age</span>
                    <span>Sex</span>
                </div>
                {
                    content 
                }
            </div>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        customersData: state.customer
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchCustomers: () => dispatch(fetchCustomers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);