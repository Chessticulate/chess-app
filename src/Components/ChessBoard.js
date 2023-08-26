import '../Styles/ChessBoard.css';

const Chessboard = ({cords, team}) => {
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
  }
 
  const renderSquare = (row, col) => {
    const isEvenRow = rows.indexOf(row) % 2 === 0;
    const isEvenCol = cols.indexOf(col) % 2 === 0;
    const isEvenSquare = (isEvenRow && isEvenCol) || (!isEvenRow && !isEvenCol);

    const squareColor = isEvenSquare ? 'white' : 'black';

    return <div className={`square ${squareColor}`} key={`${row}${col}`}>
      <div className='coords'>{cords && `${row}${col}`} </div>
      {/* pieces go here */ <img src='img/white-pawn.png' className='pieces'/>}
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