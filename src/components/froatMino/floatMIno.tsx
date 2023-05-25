import { useStatusMino } from '../../Hooks/useStatusMino';
import styles from './floartMIno.module.css';

export const FloartMino = () => {
  const statusMino = useStatusMino();
  console.log(statusMino);
  return (
    <>
      {statusMino.map((cell, x) => (
        <div
          className={styles.block}
          style={{
            top: cell.top,
            left: cell.left,
            backgroundColor: cell.backgroundColor,
            borderColor: cell.borderColor,
          }}
          key={`${x}`}
        />
      ))}
    </>
  );
};
