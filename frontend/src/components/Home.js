import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Spinner from './Spinner'
import {listProducts} from '../redux/productRedux/product.actions'


function Home() {
    const dispatch = useDispatch()

    const productlist = useSelector(state => state.product_list)
    const {products, loading, errorMessage} = productlist


    useEffect(()=>{
        dispatch(listProducts())
    }, [])

    return (
        <div>
            {
                 products.map((item) =>{
                    return(
 
                        <h1 key={item._id}>{item.name}</h1>
                    )
                })
                
            }
            
        </div>
    )
}

export default Home
