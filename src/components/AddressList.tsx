import React, { Component } from 'react';
import Address from './Address';


interface Props {
    addresses: string[];
}
interface State {
    
}

class AddressList extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
    
        this.state = {
             
        }
    }
    render() {
        const {addresses} = this.props;
        return (
            <div className="addressList">
                <h1>Address List</h1>
                {
                    addresses.forEach(element => {
                        return <Address></Address>
                    })
                }
            </div>
        )
    }
}

export default AddressList
