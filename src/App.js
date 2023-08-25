import React, { useState } from 'react';
import ChessBoard from './Components/ChessBoard';
import TicTacToe from './Components/TicTacToe'; 
import Navbar from './Components/Navbar';
import './App.css';

export default function App() {
  const [chess, setChess] = useState(false);
  const [ticTac, setTicTac] = useState(false);
  const [cords, setCords] = useState(true);
 
  const toggleCords = () => {
    if (cords) setCords(false)
    else setCords(true)
  }
  const toggleChess = () => {
    if (chess) {
      setChess(false);
    }
    else {
      setTicTac(false);
      setChess(true);
    } 
  }

  const toggleTicTac = () => {
    if(ticTac) setTicTac(false);

    else {
      setChess(false);
      setTicTac(true);  
    }
  }

  return (
    <>
      <Navbar
        toggleChess={toggleChess}
        toggleTicTac={toggleTicTac}        
      />
      <div id='boardBox'>
        {chess && <ChessBoard cords={cords}/>} {/* Display ChessBoard when chess state is true */}
        {ticTac && <TicTacToe />} {/* Display TicTacToeBoard when ticTac state is true */}
        
        <div id='menu'>
          <button onClick={() => toggleCords()}>Toggle Coordinates</button>
        </div>
      </div>
    </>
  );
}

