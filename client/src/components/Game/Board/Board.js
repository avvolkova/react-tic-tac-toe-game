import React, { useState, useEffect } from 'react';
import styles from './Board.module.css';
import Square from '../Square/Square';
import { Patterns } from '../Patterns/Patterns';
import { setPlayerOneAC } from '../../../redux/actions/PlayersAction';

export default function GameLogic() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('0');
  const [result, setResult] = useState({ winner: 'none', state: 'none' });

  const fillSquare = (square) => {
    const newBoard = board.map((val, idx) => {
      if (idx === square && val === '') {
        return player;
      }
      return val;
    });

    setBoard(newBoard);
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
    if (filled) {
      setResult({ winner: 'No one', state: 'Tie' });
      alert(`Game is over, the winner: ${'none'}`);
      restartGame();
    }
  };

  const checkGameStatus = () => {
    checkWin();
    checkIfTie();

    if (player === 'X') {
      setPlayer('0');
    } else {
      setPlayer('X');
    }
  };

  useEffect(() => {
    checkGameStatus();
  }, [board]);

  return (
    <div className={styles.board}>
      <div className={styles.row}>
        <Square
          className={styles.square}
          val={board[0]}
          fillSquare={() => {
            fillSquare(0);
          }}
        />
        <Square
          className={styles.square}
          val={board[1]}
          fillSquare={() => {
            fillSquare(1);
          }}
        />
        <Square
          className={styles.square}
          val={board[2]}
          fillSquare={() => {
            fillSquare(2);
          }}
        />
      </div>
      <div className={styles.row}>
        <Square
          className={styles.square}
          val={board[3]}
          fillSquare={() => {
            fillSquare(3);
          }}
        />
        <Square
          className={styles.square}
          val={board[4]}
          fillSquare={() => {
            fillSquare(4);
          }}
        />
        <Square
          className={styles.square}
          val={board[5]}
          fillSquare={() => {
            fillSquare(5);
          }}
        />
      </div>
      <div className={styles.row}>
        <Square
          className={styles.square}
          val={board[6]}
          fillSquare={() => {
            fillSquare(6);
          }}
        />
        <Square
          className={styles.square}
          val={board[7]}
          fillSquare={() => {
            fillSquare(7);
          }}
        />
        <Square
          className={styles.square}
          val={board[8]}
          fillSquare={() => {
            fillSquare(8);
          }}
        />
      </div>
    </div>
  );
}
