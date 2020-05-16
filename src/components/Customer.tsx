import React, { Component, ElementRef } from 'react'
import CustomerType from './CustomerInterface';

interface Props {
    customerData: CustomerType
}
interface State {
    
}

class Customer extends Component<Props, State> {
    elementRef: any;
    constructor(props: Props) {
        super(props)
    
        this.state = {      
        }
        this.elementRef = React.createRef();
    }

    selectCustomer = () => {
        const elements: ElementRef<any> = document.getElementsByClassName("selected");
        if (elements.length > 0)
            elements[0].classList.remove("selected");
        this.elementRef.current.classList.add("selected");
    }

    render() {
        const customerData = this.props.customerData;
        return (
            <div className="customer" ref={this.elementRef} onClick={() => this.selectCustomer()}>
                <span>{customerData.name}</span>
                <span>{customerData.age}</span>
                <span>{customerData.gender}</span>
            </div>
        )
    }
}

export default Customer;
