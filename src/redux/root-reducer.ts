import {combineReducers} from "redux";
import customerReducer from "./customer/cutomer-reducer";
import addressReducer from "./address/address-reducer"

const rootReducer = combineReducers({
    customer: customerReducer,
    address: addressReducer
})
export default rootReducer;