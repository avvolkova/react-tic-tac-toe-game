import React from 'react';
import styles from './Square.module.css';

export default function Square({ val, fillSquare }) {
  return (
    <div className={styles.square} onClick={() => (val ? null : fillSquare())}>{val}</div>
  );
}
