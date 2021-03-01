import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fakeDataArr from './fakeData';
import Cart from './components/Cart';
import Player from './components/Player';

function App() {
  // all states
  const [players, setPlayers] = useState([]);
  let [cart, setCart] = useState([]);


  // add to cart
  const addToCart = (player) => {
    setCart([...cart, player])
  }

  // remove from cart
  const rmFromCart = (player) => {
    setCart(() => cart = cart.filter(itm => itm !== player))
  }



  // useEffect
  useEffect(() => setPlayers([...fakeDataArr]), []);

  return (
    <div className="app-layout">
      <div className="auction_container">
        <header className="header-area">
          <img src={logo} className="App-logo " alt="app-logo" />
          <h1>Mega Premier League Auction 2021</h1>
        </header>
        <div className="players">
          {
            players.length > 0 ? (
              players.map(plr => (
                <Player key={plr.plid} player={plr} addToCart={addToCart} />
              ))
            ) : (<p>Loading ...</p>)
          }
        </div>
      </div>
      <Cart cartItems={cart} rmFromCart={rmFromCart} />
    </div>
  );
}

export default App;
