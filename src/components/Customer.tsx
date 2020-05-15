import React, { Component } from 'react'
import CustomerType from './CustomerInterface';

interface Props {
    customerData: CustomerType
}
interface State {
    
}

class Customer extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
    
        this.state = {      
        }
    }

    render() {
        const {customerData} = this.props;
        return (
            <div className="customer">
                <span>{customerData.name}</span>
                <span>{customerData.age}</span>
                <span>{customerData.gender}</span>
            </div>
        )
    }
}

export default Customer;
