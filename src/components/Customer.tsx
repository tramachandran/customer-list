import React, { Component, ElementRef } from 'react'
import { connect } from "react-redux";
import { fetchAddresses, setSelectedCustomerId } from "../redux";
import store from '../redux/store';
import CustomerType from './CustomerInterface';

interface Props {
    customerData: CustomerType,
    fetchAddresses: Function,
    setSelectedCustomerId: Function
}

interface State {

}

class Customer extends Component<Props, State> {
    elementRef: any;
    constructor(props: Props) {
        super(props)
        this.elementRef = React.createRef();
    }

    selectCustomer = (customerId: number) => {
        const elements: ElementRef<any> = document.getElementsByClassName("selected");
        if (elements.length > 0)
            elements[0].classList.remove("selected");
        this.elementRef.current.classList.add("selected");
        const currentState: any = store.getState();
        const selectedCustomerId = currentState.address.selected_Customer_Id;    
        if (customerId !== selectedCustomerId) {
            this.props.setSelectedCustomerId(customerId);
        }
        // Get all the available address list
        const address: any[] = currentState.address.address;
        const isAdddressAvailable = address.length> 0 ? address.filter((eachAddr: any) => {
            return (eachAddr.customerId === customerId);

        }): [];
        // Fire address request only when not available already...
        if (isAdddressAvailable.length === 0)
            this.props.fetchAddresses(customerId);
    }

    render() {
        const customerData = this.props.customerData;
        return (
            <div className="customer" ref={this.elementRef} onClick={() => this.selectCustomer(customerData.id)}>
                <span>{customerData.name}</span>
                <span>{customerData.age}</span>
                <span>{customerData.gender}</span>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        fetchAddresses: (customerId: number) => dispatch(fetchAddresses(customerId)),
        setSelectedCustomerId: (customerId: number) => dispatch(setSelectedCustomerId(customerId))
    }
}

export default connect(null, mapDispatchToProps)(Customer);
