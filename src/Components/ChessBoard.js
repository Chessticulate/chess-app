import { Chessboard } from "react-chessboard";
import '../Styles/ChessBoard.css';

export default function ChessBoard() {
  return (
    <div id='ChessBox'>
        <Chessboard id='BasicBoard'/>
    </div>
  );
}