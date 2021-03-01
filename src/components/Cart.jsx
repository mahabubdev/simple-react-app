import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDollarSign} from '@fortawesome/free-solid-svg-icons';
import CartItem from './CartItem';

const Cart = ({cartItems, rmFromCart}) => {
    // local state
    const [calc, setCalc] = useState({
        totalCost: 0,
        totalPlayers: 0
    });



    //useEffect
    useEffect(() => {
        let _cost = 0;

        for (let i=0; i<cartItems.length; i++) {
            _cost = _cost + cartItems[i].bprice;
        }

        setCalc({
            ...calc,
            totalCost: _cost,
            totalPlayers: cartItems.length
        })
    }, [cartItems])


    return (
        <div className="cart_area">
            <h3>Auction Cart</h3>
            <div className="cart_container">
                {
                    cartItems.length > 0 ?
                    (
                        cartItems.map(crt => (
                            <CartItem key={crt.plid} item={crt} rmCart={rmFromCart} />
                        ))
                    ) : (
                        <p className="text-center">Your cart is empty!</p>
                    )
                }
            </div>
            <div className="cart_footer">
                <p>Total Players: {calc.totalPlayers}</p>
                <p>Total Budget: <FontAwesomeIcon icon={faDollarSign} />{calc.totalCost}</p>
            </div>
        </div>
    );
}

export default Cart;
