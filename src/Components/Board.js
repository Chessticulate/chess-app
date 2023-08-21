import ChessBoard from "./ChessBoard";
import '../Styles/ChessBoard.css';


export default function Board(chess, tictactoe) {
    

    return (
        <div id="BoardBox">
            {chess === true && (
                <>
                    <ChessBoard/>
                </>
            )}
        </div>
    );
}