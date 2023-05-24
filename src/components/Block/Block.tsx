import { useEffect, useState } from 'react';
import { usePosition } from '../../Hooks/usePosition';
import { countNum } from '../../utils/countNum';
import { mino } from '../../utils/mino';
import styles from './block.module.css';

export const Block = () => {
  const [count, setCount] = useState(0);
  const newPosition: number[] = usePosition();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const routation: number = (countNum(1, newPosition) + countNum(3, newPosition) * 3) % 4;
  const position: number = countNum(6, newPosition) - countNum(4, newPosition);
  const froatMino: number[][] = mino[Math.floor(count / 20) % 7].shape;
  return (
    <>
      {froatMino.map((cell) => (
        <div
          className={styles.block}
          style={{
            top:
              60 +
              (count % 20) * 30 +
              30 *
                Math.floor(
                  cell[routation % 2] * ((-1) ** Math.floor(routation / 2) * (-1) ** routation)
                ),

            left:
              120 +
              30 * position +
              30 * Math.ceil(cell[1 - (routation % 2)] * (-1) ** Math.floor(routation / 2)) +
              60,
            backgroundColor: mino[Math.floor(count / 20) % 7].color,
            borderColor: mino[Math.floor(count / 20) % 7].color,
          }}
          key={`${cell}`}
        />
      ))}
    </>
  );
};
