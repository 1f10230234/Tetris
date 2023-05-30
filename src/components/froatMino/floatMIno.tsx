import { useBoard } from '../../Hooks/useBoard';
import { countNotNums } from '../../utils/countNum';
import { statusMinoo } from '../../utils/statusMino';
import styles from './floartMIno.module.css';

export const FloartMino = () => {
  const inputs = useBoard().exInputs;
  const statusMino = statusMinoo(
    inputs,
    useBoard().exNext[
      Math.floor(countNotNums(0, useBoard().exStockedMinos) / 4)
    ]
  );
  return (
    <>
      {statusMino.map((mino, n) => (
        <div
          className={styles.mino}
          style={{
            top: (mino.top - 1) * 30 + 31,
            left: mino.left * 30 + 1,
            backgroundColor: mino.backgroundColor,
            borderColor: mino.borderColor,
          }}
          key={`${n}`}
        />
      ))}
    </>
  );
};
