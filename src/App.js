import React, { useState } from 'react';
import ChessBoard from './Components/ChessBoard';
import TicTacToe from './Components/TicTacToe'; 
import Navbar from './Components/Navbar';
import './Styles/App.css';

export default function App() {
  const [chess, setChess] = useState(false);
  const [ticTac, setTicTac] = useState(false);
  const [cords, setCords] = useState(false);
  const [team, setTeam] = useState(true);

  // toggles board perspective and player pieces (pieces still need to be added)
  const flipBoard = () => {
    // true = white, black = false
    if (team) setTeam(false);
    else setTeam(true);
  }
 
  // turns coordinates off and on
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
        {chess && <ChessBoard cords={cords} team={team}/>} {/* Display ChessBoard when chess state is true */}
        {ticTac && <TicTacToe />} {/* Display TicTacToeBoard when ticTac state is true */}
        
        { chess &&
          <div id='menu'>
            <button onClick={() => toggleCords()}>Toggle Coordinates</button>
            <button onClick={() => flipBoard()}>Flip board</button>
          </div>
        }
      </div>
    </>
  );
}

