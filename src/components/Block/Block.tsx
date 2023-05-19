import { useEffect, useState } from 'react';
import { mino } from '../../utils/mino';
import styles from '../block.module.css';

const colors = ['#f00', '#0f0', '#00f', '#000'];
export const Block = (props: { color: string; onClick: (color: string) => void }) => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState([0]);
  const newInputs: number[] = JSON.parse(JSON.stringify(input));
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const countNum = (n: number) => {
    return newInputs.filter(function (x) {
      return x === n;
    }).length;
  };
  const froatMino: number[][] = mino[Math.floor(count / 20) % 7].shape;
  return froatMino.map((cell) => (
    <div
      className={styles.block}
      style={{
        background: props.color,
        top:
          60 +
          (count % 20) * 30 +
          30 * cell[countNum(1) % 2] * ((-1) ** Math.floor(countNum(1) / 2) * (-1) ** countNum(1)),

        left: 30 * cell[1 - (countNum(1) % 2)] * (-1) ** Math.floor(countNum(1) / 2) + 60,
      }}
      key={`${cell}`}
      onClick={() => {
        props.onClick(colors[newInputs.length % colors.length]);
        newInputs.push(1);
        setInput(newInputs);
        console.log(newInputs);
      }}
      onContextMenu={(event) => {
        event.preventDefault();
        props.onClick(colors[newInputs.length % colors.length]);
        newInputs.push(1);
        newInputs.push(1);
        newInputs.push(1);
        setInput(newInputs);
        console.log(newInputs);
      }}
    />
  ));
};
