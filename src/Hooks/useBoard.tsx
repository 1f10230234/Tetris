import { useEffect, useState } from 'react';
import { isNew, isUnder } from '../utils/IsNew';
import { countNotNums } from '../utils/countNum';
import { createArray } from '../utils/createArray';
import { makeBoard } from '../utils/makeBoard';
import { statusMinoo } from '../utils/statusMino';
const conversion: { [key: number]: number } = {
  90: 1,
  67: 3,
  37: 4,
  38: 5,
  39: 6,
  40: 2,
};

export const useBoard = () => {
  const [stockedMinos, setStockedMinos] = useState(createArray(10, 20, 0));
  const [inputs, setInputs] = useState([2]);
  let newInputs = [...inputs];
  const findStockedMinos = makeBoard(stockedMinos);
  let newStockedMinos = [...stockedMinos];
  // const [next, setNext] = useState(randomArray(7));
  // if (
  //   countNotNums(0, stockedMinos) % 28 === 0 &&
  //   Math.floor(countNotNums(0, stockedMinos) / 4) + 7 >= next.length
  // ) {
  //   const newNext = [...next, randomArray(7)].flat();
  //   setNext(newNext);
  // }
  // const next = createArray(10, 1, 1).flat();
  const next = [
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5, 6],
  ].flat();
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCount((c) => c + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);
  // const fillMino = (y: number, x: number) => {
  //   if (newStockedMinos[y][x] === 0) {
  //     newStockedMinos[y][x] =
  //       next[Math.floor(countNotNums(0, stockedMinos) / 4)] + 1;
  //   } else {
  //     fillMino(y + 1, x);
  //   }
  // };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      Object.keys(conversion).map((key: string) => {
        if (String(event.keyCode) === key) {
          newInputs = [...newInputs, conversion[Number(key)]];
          if (
            isUnder(
              stockedMinos,
              statusMinoo(
                newInputs,
                next[Math.floor(countNotNums(0, findStockedMinos) / 4)]
              ),
              newInputs,
              2
            )
          ) {
            console.log('aaaaaa');
            statusMinoo(
              newInputs,
              next[Math.floor(countNotNums(0, findStockedMinos) / 4)]
            ).map((mino) => {
              // fillMino(mino.top - 1, mino.left);
              newStockedMinos[mino.top - 1][mino.left] =
                next[Math.floor(countNotNums(0, stockedMinos) / 4)] + 1;
            });
            setStockedMinos(newStockedMinos);
            newInputs = [2];
            console.table(newStockedMinos);
          } else if (
            !isNew(
              stockedMinos,
              statusMinoo(
                newInputs,
                next[Math.floor(countNotNums(0, findStockedMinos) / 4)]
              )
            )
          ) {
            newInputs = inputs;
          }
          setInputs(newInputs);
        }
      });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [inputs]);
  const board = makeBoard(findStockedMinos);
  if (board.length < 20) {
    newStockedMinos = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ...newStockedMinos];
    setStockedMinos(newStockedMinos);
  }
  return {
    exBoard: board,
    exInputs: inputs,
    exNext: next,
    exStockedMinos: stockedMinos,
  };
};
