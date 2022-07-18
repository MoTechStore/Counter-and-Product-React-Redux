import { counterReducer } from "./counterRedux/counter.Reducer";
import {combineReducers} from "redux"
import {productListReducer} from "./productRedux/product.Reducer" 

let rootReducer = combineReducers({
    counter:counterReducer,
    product_list:productListReducer
})

export {rootReducer}