import ChessBoard from './Components/ChessBoard';
import Navbar from './Components/Navbar';
import './App.css';
import { useState } from 'react';
import Board from 'webchess/lib/board';
// import Chess from 'webchess';

export default function App() {
  // const [board, setBoard] = useState(false);
  const [chess, setChess] = useState(false);
  const [ticTac, setTicTac] = useState(false);

  return (
    <>
      <Navbar
        setChess={setChess}
        setTicTac={setTicTac}        
      />
      <Board
          chess={chess}
          ticTac={ticTac}
      />
    </>
  );
}

