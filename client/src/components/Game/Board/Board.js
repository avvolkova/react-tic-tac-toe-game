import React, { useState, useEffect } from 'react';
import styles from './Board.module.css';
import Square from '../Square/Square';
import { Patterns } from '../Patterns/Patterns';
import { setPlayerOneAC } from '../../../redux/actions/PlayersAction';

export default function GameLogic() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('0');
  const [result, setResult] = useState({ winner: 'none', state: 'none' });

  const chooseSquare = (square) => {
    setBoard(board.map((val, idx) => {
      if (idx === square && val === '') {
        return player;
      }
      return val;
    }));
    // if (player === 'X') {
    //   setPlayer('0');
    // } else {
    //   setPlayer('X');
    // }
  };

  const restartGame = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setPlayer('0');
    setResult({ winner: 'none', state: 'none' });
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === '') return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setResult({ winner: player, state: 'won' });
        alert(`Game is over, the winner: ${player}`);
        restartGame();
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === '') {
        filled = false;
      }
    });
    if (filled
    // && result.player === 'none'
    ) {
      setResult({ winner: 'No one', state: 'Tie' });
      alert(`Game is over, the winner: ${'none'}`);
      restartGame();
    }
  };

  useEffect(() => {
    checkWin();
    checkIfTie();

    // if (result.winner !== 'none') {
    //   checkIfTie();
    // }

    if (player === 'X') {
      setPlayer('0');
    } else {
      setPlayer('X');
    }
  }, [board]);

  // useEffect(() => {
  //   if (result.state !== 'none') {
  //     alert(`Game is over, the winner: ${result.winner}`);
  //   }
  //   // restartGame();
  // }, [result]);

  return (
    <div className={styles.board}>
      <div className={styles.row}>
        <Square
          className={styles.square}
          val={board[0]}
          chooseSquare={() => { chooseSquare(0); }}
        />
        <Square
          className={styles.square}
          val={board[1]}
          chooseSquare={() => { chooseSquare(1); }}
        />
        <Square
          className={styles.square}
          val={board[2]}
          chooseSquare={() => { chooseSquare(2); }}
        />
      </div>
      <div className={styles.row}>
        <Square
          className={styles.square}
          val={board[3]}
          chooseSquare={() => { chooseSquare(3); }}
        />
        <Square
          className={styles.square}
          val={board[4]}
          chooseSquare={() => { chooseSquare(4); }}
        />
        <Square
          className={styles.square}
          val={board[5]}
          chooseSquare={() => { chooseSquare(5); }}
        />
      </div>
      <div className={styles.row}>
        <Square
          className={styles.square}
          val={board[6]}
          chooseSquare={() => { chooseSquare(6); }}
        />
        <Square
          className={styles.square}
          val={board[7]}
          chooseSquare={() => { chooseSquare(7); }}
        />
        <Square
          className={styles.square}
          val={board[8]}
          chooseSquare={() => { chooseSquare(8); }}
        />
      </div>
    </div>
  );
}
