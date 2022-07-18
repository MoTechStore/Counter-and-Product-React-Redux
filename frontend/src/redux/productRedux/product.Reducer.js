import { LOAD_PRODUCT_REQUEST,
    LOAD_PRODUCT_SUCCESS,
    LOAD_PRODUCT_FAIL,} from './product.actionTypes'



const initialState = {
    products:[],
    loading:false,
    errorMessage:''
}    

export const productListReducer = (state=initialState, action) => {
 let {type, payload} = action
 switch(type){
     case LOAD_PRODUCT_REQUEST:
         return{
             ...state,
             loading:true
         }
     case LOAD_PRODUCT_SUCCESS:
        return{
            ...state,
            loading:false,
            products:payload
        }
    case LOAD_PRODUCT_FAIL:
        return{
            ...state,
            errorMessage:payload
        }
    default: return state             
 }
}     