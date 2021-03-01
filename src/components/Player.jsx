import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle, faDollarSign} from '@fortawesome/free-solid-svg-icons';

const Player = ({ player, addToCart }) => {
    return (
        <div className="player_card">
            <img src={player.photo} alt={player.name} />
            <div className="info">
                <h5>{player.name}</h5>
                <small>Age: {player.age}</small>
                <small>Role: {player.role}</small>
                <small>Country: {player.country}</small>
                <p>Base Price: <FontAwesomeIcon icon={faDollarSign} />{player.bprice}</p>
                <button className="btn btn-primary" onClick={() => addToCart(player)}>
                    <FontAwesomeIcon icon={faPlusCircle} />
                    add
                </button>
            </div>
        </div>
    );
}

export default Player;