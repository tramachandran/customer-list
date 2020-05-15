import React, { Component } from 'react';
import Customer from "./Customer";
import CustomerType from "./CustomerInterface";

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
        return (
            <div className="customerList">
                <h1>Customers List</h1>
                <div className="listHeader">
                    <span>Customer Name</span>
                    <span>Age</span>
                    <span>Sex</span>
                </div>
                {
                    customers.forEach(customer => {
                        return <Customer></Customer>
                    })
                }
            </div>
        )
    }
}

export default CustomerList
