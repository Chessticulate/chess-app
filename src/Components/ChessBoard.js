import '../Styles/ChessBoard.css';

const Chessboard = ({cords}) => {
  

  // board from whites perspective
  const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const cols = ['8', '7', '6', '5', '4', '3', '2', '1'];

  // blacks perspective
  // const rows = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
  // const cols = ['1', '2', '3', '4', '5', '6', '7', '8'];

  const renderSquare = (row, col) => {
    const isEvenRow = rows.indexOf(row) % 2 === 0;
    const isEvenCol = cols.indexOf(col) % 2 === 0;
    const isEvenSquare = (isEvenRow && isEvenCol) || (!isEvenRow && !isEvenCol);

    const squareColor = isEvenSquare ? 'white' : 'black';

    return <div className={`square ${squareColor}`} key={`${row}${col}`}>
      {/* pieces go here */}
      {cords && `${row}${col}`}
      </div>;
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