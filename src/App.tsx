import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import CustomerList from './components/CustomerList';
import './App.scss';
import AddressList from './components/AddressList';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CustomerList></CustomerList>
        <AddressList></AddressList>          
      </div>
    </Provider>
  )
}

export default App;

