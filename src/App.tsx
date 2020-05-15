import React, { Component } from 'react';
import './App.scss';
import CustomerList from './components/CustomerList';
import AddressList from './components/AddressList';
import Customer from './components/CustomerInterface';
import axios from 'axios';

interface Props {

}
interface State {
  customers: Customer[] | any [],
  done: boolean
}


class App extends Component<Props, State> {

  private cancel: any;
  constructor(props: Props) {
    super(props)
  
    this.state = {
      customers: [],
      done: false
    }
    this.cancel = null;
  }

  componentDidMount() {
    axios.get(`https://my-json-server.typicode.com/tramachandran/customer-list/customers`, {
      cancelToken: new axios.CancelToken(c => this.cancel = c)
    })
    .then(response => this.setState({ customers: response.data, done: true }))
  }

  componentWillUnmount() {
    this.cancel();
  }
  
  render() {
    const customersData = this.state.customers;
    const addr: any = [];
    if(!this.state.done) {
        return (
            <div className="App">
                Customers list is Loading 
            </div>
        )
    } else {
        return (
            <div className="App">
                <CustomerList customers={customersData}></CustomerList>
                <AddressList addresses={addr}></AddressList>            
            </div>
        )
    }
  }  
}

export default App;
