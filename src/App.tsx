import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import CustomerList from './components/CustomerList';
import './App.scss';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CustomerList></CustomerList>          
      </div>
    </Provider>
  )
}

export default App;

