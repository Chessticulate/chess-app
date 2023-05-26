import { Chessboard } from "react-chessboard";
import './App.css';

export default function App() {
  return (
    <div id="Page">
      <div id="BoardBox">
        <Chessboard id="BasicBoard" />
      </div>
    </div>
  );
}