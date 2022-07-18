import { INCREMENT,DECREMENT } from "./counter.actionTypes"

export const increments = () =>{
    return {
        type: INCREMENT
    }
}


export const decrements = () =>{
    return {
        type: DECREMENT
    }
} 