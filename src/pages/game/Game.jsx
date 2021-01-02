import React, { useState, useEffect } from "react";
import Style from "../../styles/default.module.css";
import { ButtonOne, ButtonTicTacToe } from "../../components/buttons/Buttons";
import { Main } from "../../components/main/Main";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [namePlayer1, setNamePlayer1] = useState("");
  const [namePlayer2, setNamePlayer2] = useState("");
  const [turn, setTurn] = useState(true);
  const [xOrO, setXOrO] = useState("");
  var [pointsPlayer1, setPointsPlayer1] = useState(0);
  var [pointsPlayer2, setPointsPlayer2] = useState(0);

  useEffect(() => {
    setNamePlayer1(localStorage.getItem("namePlayer1"));
    setNamePlayer2(localStorage.getItem("namePlayer2"));
    if (localStorage.getItem("symbol") === "true") {
      setXIsNext(true);
      setXOrO("X");
    } else {
      setXIsNext(false);
      setXOrO("O");
    }
  }, []);

  const handleClick = (i) => {
    const newSquares = squares.slice();

    if (winner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = xIsNext ? "X" : "O";

    setSquares(newSquares);
    setXIsNext(!xIsNext);
    setTurn(!turn);
  };

  const winner = (squares) => {
    const conditionsWin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i in conditionsWin) {
      const [a, b, c] = conditionsWin[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        if (squares[a] === xOrO) {
          return namePlayer1;
        } else {
          return namePlayer2;
        }
      } else if (!squares.some((e) => e === null)) {
        return "Velha";
      }
    }

    return false;
  };

  const points = () => {
    if (winner(squares) === namePlayer1) {
      setPointsPlayer1(pointsPlayer1 + 1);
    } else if (winner(squares) === namePlayer2) {
      setPointsPlayer2(pointsPlayer2 + 1);
    } else {
      return;
    }
  };

  const clear = () => {
    points();
    setSquares(Array(9).fill(null));
    setXIsNext(localStorage.getItem("symbol"));
  };

  const message = (win) => {
    if (win === "Velha") {
      return "Deu velha";
    } else if (win) {
      return `${win} Ganhou`;
    } else {
      return `Vez do(a) ${turn ? namePlayer1 : namePlayer2}`;
    }
  };

  return (
    <Main>
      <div className={Style.globalBox}>
        <div className={Style.boxCenter}>
          <div>
            <span id="score" className={Style.smallText}>
              {`${namePlayer1} ${pointsPlayer1} x  ${pointsPlayer2}  ${namePlayer2}`}
            </span>
          </div>
          <div>
            <span className={Style.title}>{message(winner(squares))}</span>
          </div>
          <div className={Style.marginT40}>
            <div>
              <ButtonTicTacToe
                onClick={() => handleClick(0)}
                ariaLabel="A-1"
                text={squares[0]}
                className={Style.symbol}
              />
              <ButtonTicTacToe
                onClick={() => handleClick(1)}
                ariaLabel="B-1"
                text={squares[1]}
                className={Style.symbol}
              />
              <ButtonTicTacToe
                onClick={() => handleClick(2)}
                ariaLabel="C-1"
                text={squares[2]}
                className={Style.symbol}
              />
            </div>
            <div>
              <ButtonTicTacToe
                onClick={() => handleClick(3)}
                ariaLabel="A-2"
                text={squares[3]}
                className={Style.symbol}
              />
              <ButtonTicTacToe
                onClick={() => handleClick(4)}
                ariaLabel="B-2"
                text={squares[4]}
                className={Style.symbol}
              />
              <ButtonTicTacToe
                onClick={() => handleClick(5)}
                ariaLabel="C-2"
                text={squares[5]}
                className={Style.symbol}
              />
            </div>
            <div>
              <ButtonTicTacToe
                onClick={() => handleClick(6)}
                ariaLabel="A-3"
                text={squares[6]}
                className={Style.symbol}
              />
              <ButtonTicTacToe
                onClick={() => handleClick(7)}
                ariaLabel="A-3"
                text={squares[7]}
                className={Style.symbol}
              />
              <ButtonTicTacToe
                onClick={() => handleClick(8)}
                ariaLabel="A-3"
                text={squares[8]}
                className={Style.symbol}
              />
            </div>
          </div>
          <ButtonOne
            text="Nova partida"
            onClick={() => clear()}
            className={Style.text}
            margin="40px 0 0 0"
          />
        </div>
      </div>
    </Main>
  );
}

export default Game;
