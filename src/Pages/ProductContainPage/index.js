import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './index.css'
import {decreaseAmount, increaseAmount} from "../../redux/action/productAction";
const ProductContainPage = () => {
    const dispatch=useDispatch()
    const carts =useSelector(state => state.carts)
    return (
        <div className={'container'}>
            <div className="wr-carts">
                {
                    carts.map(cart =>
                        <div className={'wrapper-cart'} key={cart.id}>
                            <img className={'cart-img'} src={cart.imageUrl} alt=""/>
                            <button disabled={cart.amount ===0} onClick={() =>dispatch(increaseAmount(cart.id))}>+</button>
                            <h4>{cart.amountCart}</h4>
                            <button disabled={cart.amountCart ===1} onClick={() => dispatch(decreaseAmount(cart.id))}>-</button>
                            <h3>{Number(cart.price) * Number(cart.amountCart)}</h3>
                        </div>)
                }
            </div>
        </div>
    );
};

export default ProductContainPage;