import { useBoard } from '../../Hooks/useBoard';
import { statusMinoo } from '../../utils/statusMino';
import styles from './floartMIno.module.css';

export const FloartMino = () => {
  const inputs = useBoard().exInputs;
  const statusMino = statusMinoo(inputs);
  // console.table(statusMino);
  return (
    <>
      {statusMino.map((mino, n) => (
        <div
          className={styles.block}
          style={{
            top: (mino.top - 1) * 30 + 30,
            left: mino.left * 30,
            backgroundColor: mino.backgroundColor,
            borderColor: mino.borderColor,
          }}
          key={`${n}`}
        />
      ))}
    </>
  );
};
