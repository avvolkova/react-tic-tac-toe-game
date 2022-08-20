import React from 'react';
import styles from './Square.module.css';

export default function Square({ val, chooseSquare }) {
  return (
    <div className={styles.square} onClick={() => (val ? null : chooseSquare())}>{val}</div>
  );
}
