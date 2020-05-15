import React, { Component } from 'react';
import Customer from "./Customer";
import CustomerType from "./CustomerInterface";
import "./CustomerList.scss";

interface Props {
    customers : CustomerType[]
}
interface State {
    
}

class CustomerList extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
    
        this.state = {
             
        }
    }    

    render() {
        const {customers} = this.props;
        const content = customers.length > 0 ? customers.map(customer => {
            return <Customer key={customer.id} customerData={customer}></Customer>
        }) : null;
        return (
            <div className="customerList">
                <h1>Customers List</h1>
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

export default CustomerList
