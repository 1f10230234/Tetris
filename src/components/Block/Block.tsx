import { useEffect, useState } from 'react';
import styles from '../block.module.css';

const tmino: number[][] = [
  [0, 0],
  [0, -1],
  [0, 1],
  [-1, 0],
];
const colors = ['#f00', '#0f0', '#00f'];
export const Block = (props: { color: string; onClick: (color: string) => void }) => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState([1, 1]);
  const newInputs: number[] = JSON.parse(JSON.stringify(input));
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return tmino.map((cell, i) => (
    <div
      className={styles.block}
      style={{
        background: props.color,
        top:
          count * 30 +
          30 *
            cell[
              newInputs.filter(function (x) {
                return x === 1;
              }).length % 2
            ] *
            (-1) **
              Math.floor(
                (newInputs.filter(function (x) {
                  return x === 1;
                }).length +
                  i) /
                  2
              ),

        left:
          30 *
            cell[
              1 -
                (newInputs.filter(function (x) {
                  return x === 1;
                }).length %
                  2)
            ] *
            (-1) **
              Math.floor(
                1 -
                  (newInputs.filter(function (x) {
                    return x === 1;
                  }).length +
                    i) /
                    2
              ) +
          60,
      }}
      key={`${cell}`}
      onClick={() => {
        props.onClick(colors[newInputs.length % 3]);
        newInputs.push(1);
        setInput(newInputs);
        console.log(newInputs);
      }}
    />
  ));
};
