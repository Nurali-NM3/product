import React from 'react';
import {useSelector} from "react-redux";
import './index.css'
const ProductContainPage = () => {
    const carts =useSelector(state => state.carts)
    return (
        <div className={'container'}>
            <div className="wr-carts">
                {
                    carts.map(cart =>
                        <div className={'wrapper-cart'} key={cart.id}>
                            <img className={'cart-img'} src={cart.imageUrl} alt=""/>
                            <button>+</button>
                            <h4>amount</h4>
                            <button>-</button>
                            <h3>{cart.price}</h3>
                        </div>)
                }
            </div>
        </div>
    );
};

export default ProductContainPage;