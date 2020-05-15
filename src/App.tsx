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

  constructor(props: Props) {
    super(props)
  
    this.state = {
      customers: [],
       done: false
    }
  }

  componentDidMount() {
    
  }
  
  render() {

    return (
      <div className="App">
        <CustomerList customers={[]}></CustomerList>
        <AddressList addresses={[]}></AddressList>
      </div>
    );
  }
 
}

export default App;
