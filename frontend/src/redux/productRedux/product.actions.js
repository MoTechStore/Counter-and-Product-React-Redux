import { LOAD_PRODUCT_REQUEST,
    LOAD_PRODUCT_SUCCESS,
    LOAD_PRODUCT_FAIL,} from './product.actionTypes'

import axios from 'axios'

export const listProducts = () => async(dispatch) => {
try{
   dispatch({type:LOAD_PRODUCT_REQUEST})
   const { data } = await axios.get('http://127.0.0.1:8000/api/products/')
   dispatch({type:LOAD_PRODUCT_SUCCESS,
             payload:data})
}
catch(error){
   dispatch({type:LOAD_PRODUCT_FAIL,
            payload:error})

}
}