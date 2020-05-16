import React, { Component } from 'react';
import { connect } from "react-redux";
import Address from './Address';
import "./AddressList.scss";

interface Props {
    addressData: any
}

class AddressList extends Component<Props> {
    
    addrList: string[] = [];
    content: any;

    render() {
        
        const {addressData} = this.props;
        const selectedCustomerId = addressData.selected_Customer_Id;
        const addresses = addressData.address;
        
        if (selectedCustomerId) {
            const selectedCustomerAddress = addresses.length > 0 ? addresses.filter((address: any) => {
                return (selectedCustomerId === address.customerId)
            }): [];
            this.addrList = selectedCustomerAddress.length > 0 ? selectedCustomerAddress[0].addresses : [];
        }
        
        if (!selectedCustomerId) {
            return null;
        } else if (addressData.is_address_loading) {
            return <div><h2>Loading Addresses.....</h2></div>;
        } else if (addressData.errorMsg !== '') {
			return <div className="error"><h5>{addressData.errorMsg}</h5></div>;
		} else {
			const content = this.addrList.length > 0 ? this.addrList.map((address: any, index: number) => {
				return <Address key={index}>{address}</Address>
			}) : <span>No address available for this customer</span>;
			return (
				<div className="addressList">
					<h2>All Addresses</h2>
					<div className ="addresses">
					{
						content 
					}
					</div>
				</div>
			)
		}
    }
}

const mapStateToProps = (state: any) => {
    return {
        addressData: state.address
    }
}

export default connect(mapStateToProps)(AddressList);
