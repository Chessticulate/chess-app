import '../Styles/ChessBoard.css';
import Chess from 'webchess/lib/chess';
import pieceMap from '../Utils/piecetoPNG';
import Draggable from 'react-draggable';


const Chessboard = ({cords, team}) => {

  const chess = new Chess();

  let rows;
  let cols;
  
  // player = white
  if (team) {
    rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    cols = ['8', '7', '6', '5', '4', '3', '2', '1'];
  }
  // player = black
  else if(!team) {
    rows = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
    cols = ['1', '2', '3', '4', '5', '6', '7', '8'];
    chess.board.flipBoard();
  }
 
  const renderSquare = (row, col) => {
    let x = rows.indexOf(row);
    let y = cols.indexOf(col);

    const isEvenRow = x % 2 === 0;
    const isEvenCol = y % 2 === 0;

    let piece;

    if (chess.board.get(x,y)) {
      piece = chess.board.get(x,y).toFEN();
    }    

    const isEvenSquare = (isEvenRow && isEvenCol) || (!isEvenRow && !isEvenCol);

    const squareColor = isEvenSquare ? 'white' : 'black';

    return <div className={`square ${squareColor}`} key={`${row}${col}`}>
      <div className='coords'>{cords && `${row}${col}`} </div>

      {/* pieces go here */
        // <Draggable>
        //   pieceMap[piece]
        // </Draggable>
        <Draggable>
          <div className='tile'>
            {pieceMap[piece]}
          </div>
        </Draggable>
      }
    </div>
  };

  const renderRow = (row) => {
    return (
      <div className="row" key={row}>
        {cols.map((col) => renderSquare(row, col))}
      </div>
    );
  };

  return (
    <div className="chessboard">
      {rows.map((row) => renderRow(row))}
    </div>
  );
};

export default Chessboard;


// TODO
// implement dragging and dropping pieces
// 
// should board be implemented as a state variable? ex after move => setBoard()