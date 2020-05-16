import React, { Component } from 'react';
import Address from './Address';
import "./AddressList.scss"

interface Props {
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
        // const {addresses} = this.props;
        // return (
        //     <div className="addressList">
        //         <h1>Address List</h1>
        //         {
        //             addresses.map(element => {
        //                 return <Address></Address>
        //             })
        //         }
        //     </div>
        // )
        return <div className="addressList"><h1>Address List</h1></div>
    }
}

export default AddressList
