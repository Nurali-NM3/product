import React from 'react';
import './style.scss'
import Buttons from "../Buttons";
import {useDispatch, useSelector} from "react-redux";
import {AddProduct} from "../../redux/action/productAction";


const List = ({products}) => {
    const cards = useSelector(state => state.cards)
    const dispatch = useDispatch()
    const handleAdd =(p)=>{
         const value = {cards}
        dispatch(AddProduct(value))
    }
    return (
        <div className={'container'}>
            <div className="productList">
                    {
                        products.map(product =>{
                            return <div key={product.id} className="productList-wrapper ">
                            <div className="productList-box" >
                                <p className={"productList-box__discount"}>Get up to {product.discount}% off Today Only!</p>
                                <img className={'productList-box__img'} src={product.imageUrl} alt=""/>
                                    <div className="productList-box__action">
                                        <Buttons handleAdd={()=>dispatch(AddProduct(product))} products={product} />
                                    </div>
                                <div className="productList-box__description">
                                    <h3>{product.productName}</h3>
                                    <h4>{product.price}</h4>
                                    <h4>{product.rate}</h4>
                                </div>
                            </div>
                            </div>
                        })
                    }

            </div>
        </div>
    );
};

export default List;