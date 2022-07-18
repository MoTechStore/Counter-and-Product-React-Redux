import React, {useEffect} from 'react'
import {increments,decrements} from '../redux/counterRedux/counter.actions'
import {useSelector, useDispatch} from 'react-redux'
import Spinner from './Spinner'
import {listProducts} from '../redux/productRedux/product.actions'

function HomeScreen() {
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(listProducts())
    }, [])
    

    const counter = useSelector(state => state.counter)
    const productlist = useSelector(state => state.product_list)
    const {products, loading, errorMessage} = productlist




    
    return (
        <div className="container-fluid mt-5">
            <h1>The value of counter is {counter}</h1>
            
            <div className="row">
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={() =>dispatch(increments())}>INCREMENT</button>
                </div>

                <div className="col-md-1">
                    <button className="btn btn-success" onClick={() =>dispatch(decrements())}>DECREMENT</button>
                </div>

            </div>

            { (loading === true)? <Spinner /> :
               
               products.map((item) =>{
                   return(

                       <h1 key={item._id}>{item.name}</h1>
                   )
               })
            
            }

            
        </div>
    )
}

export default HomeScreen
