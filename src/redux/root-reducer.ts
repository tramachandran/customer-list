import {combineReducers} from "redux";
import customerReducer from "./customer/cutomer-reducer";

const rootReducer = combineReducers({
    customer: customerReducer
})
export default rootReducer;