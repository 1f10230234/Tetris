import { useBoard } from '../../Hooks/useBoard';
import styles from './board.module.css';

export const Board = () => {
  const board = useBoard().exBoard;
  return (
    <div className={styles.board}>
      {board.map((row, y) =>
        row.map((cell, x) => (
          <div
            className={`${styles.cell} ${styles[`color-${board[y][x]}`]}`}
            key={`${x}_${y}`}
          />
        ))
      )}
    </div>
  );
};
