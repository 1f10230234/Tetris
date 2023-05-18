import { useEffect, useState } from 'react';
import styles from '../block.module.css';

const tmino: number[][] = [
  [0, 0],
  [0, -1],
  [0, 1],
  [-1, 0],
];
const smino: number[][] = [
  //[0, 0],
  [-1, -1],
  [0, 1],
  [-1, 0],
];
const zmino: number[][] = [
  [0, 0],
  [0, -1],
  [-1, 1],
  [-1, 0],
];
const jmino: number[][] = [
  [0, 0],
  [0, -1],
  [0, 1],
  [-1, -1],
];
const lmino: number[][] = [
  [0, 0],
  [0, -1],
  [0, 1],
  [-1, 1],
];
const imino: number[][] = [
  [0, 0],
  [0, -1],
  [0, 1],
  [0, 2],
];
const omino: number[][] = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];

const colors = ['#f00', '#0f0', '#00f', '#000'];
export const Block = (props: { color: string; onClick: (color: string) => void }) => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState([]);
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
  return smino.map((cell) => (
    <div
      className={styles.block}
      style={{
        background: props.color,
        top:
          60 +
          //count * 30 +
          30 * cell[countNum(1) % 2] * ((-1) ** Math.floor(countNum(1) / 2) * (-1) ** countNum(1)),

        left: 30 * cell[1 - (countNum(1) % 2)] * (-1) ** Math.floor(countNum(1) / 2) + 60,
      }}
      key={`${cell}`}
      onClick={() => {
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
