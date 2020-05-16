import React, { Component } from 'react'


class Address extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Address
