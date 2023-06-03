import { useBoard } from '../../Hooks/useBoard';
import { mino } from '../../utils/mino';
import styles from './board.module.css';
export const Board = () => {
  console.log('Board');
  const board = useBoard().exBoard;
  const minos = mino.map((b, a) => {
    return mino[a].color;
  });
  return (
    <div className={styles.board}>
      {board.map((row, y) =>
        row.map((cell, x) => (
          <div className={styles.cell} key={`${x}~${y}`}>
            {cell !== 0 && (
              <div
                className={styles.mino}
                style={{
                  backgroundColor: minos[cell - 1],
                  borderColor: minos[cell - 1],
                }}
                key={`${x}_${y}`}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};
