import axios from "axios";
import {ADD_PRODUCT, GET_PRODUCT} from "../Types";


export  const getProduct =()=>{
    return (dispatch)=>{
        axios('https://64363d318205915d34eec114.mockapi.io/users')
            .then(({data}) =>{
                dispatch({type: GET_PRODUCT,payload: data})
            })
    }
}
export const AddProduct =(value)=> {
    return {type: ADD_PRODUCT, payload: value}
}
