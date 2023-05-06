import { useState } from "react";

function Square({ value, onSquareClick }) {

  return ( 
      <button className="square"
      onClick={onSquareClick}
      >
          {value}
      </button>
    )
}

export default function Board()
{
  const [square, setSquare] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

    </>
  )
}