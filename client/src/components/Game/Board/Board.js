import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Board.module.css';
import Square from '../Square/Square';
import { Patterns } from '../Patterns/Patterns';
import { setPlayerOneAC } from '../../../redux/actions/PlayersAction';

export default function GameLogic() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('0');
  const [result, setResult] = useState({ winner: 'none', state: 'none' });
  const [modalActive, setModalActive] = useState(true);

  const dispatch = useDispatch();

  const nameFirst = useSelector((state) => state.playerfirst.playerFirst);
  const nameSecond = useSelector((state) => state.playersecond.playerSecond);
  const [choise, setChoise] = useState(nameFirst);

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

  const gameOver = (winner, state) => {
    setResult({ winner, state });
    alert(`Game is over, the winner is: ${winner}`);
    restartGame();
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === '') {
        filled = false;
      }
    });

    if (filled) {
      gameOver('No one', 'Tie');
      return true;
    }
    return false;
  };

  const fillEmptySquare = () => {
    if (player === 'X') {
      setPlayer('0');
      setChoise(nameSecond);
    } else {
      setPlayer('X');
      setChoise(nameFirst);
    }
  };

  const checkIfWin = () => {
    const winnerPattern = Patterns.find((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (!firstPlayer) {
        return null;
      }

      let foundWinningPattern = true;

      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        return currPattern;
      }
      return null;
    });

    if (winnerPattern) {
      gameOver(player, 'won');
      return true;
    }
    return false;
  };

  const checkGameStatus = () => {
    const isWin = checkIfWin();
    if (isWin) {
      return;
    }

    const isTie = checkIfTie();
    if (isTie) {
      return;
    }

    fillEmptySquare();
  };

  useEffect(() => {
    checkGameStatus();
  }, [board]);

  return (
    <div className={styles.game}>
      <div className={styles.game}>
        Твой ход:
        {' '}
        {choise}
        {' '}
      </div>
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
    </div>
  );
}
