import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faDollarSign} from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ item, rmCart }) => {
    return (
        <div className="cart_item">
            <img src={item.photo} alt={item.name} />
            <div className="short_info">
                <strong>{item.name}</strong>
                <span><FontAwesomeIcon icon={faDollarSign} />{item.bprice}</span>
            </div>
            <button className="btn btn_danger" onClick={() => rmCart(item)}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
}

export default CartItem;
