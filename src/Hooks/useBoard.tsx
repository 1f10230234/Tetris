import { useEffect, useState } from 'react';
import { isNew, isUnder } from '../utils/IsNew';
import { countNotNums } from '../utils/countNum';
import { createArray } from '../utils/createArray';
import { makeBoard } from '../utils/makeBoard';
import { statusMinoo } from '../utils/statusMino';
import { whereFill } from '../utils/wherefill';
const conversion: { [key: number]: number } = {
  90: 1,
  67: 3,
  37: 4,
  38: 5,
  39: 6,
  40: 2,
};

export const useBoard = () => {
  // console.log(1);
  const [stockedMinos, setStockedMinos] = useState(createArray(10, 20, 0));
  const [inputs, setInputs] = useState([2]);
  let newInputs = [...inputs];
  const findStockedMinos = makeBoard(stockedMinos);

  let newStockedMinos = [...stockedMinos];

  // const [next, setNext] = useState(randomArray(7));
  // if (
  //   countNotNums(0, newStockedMinos) % 28 === 0 &&
  //   Math.floor(countNotNums(0, newStockedMinos) / 4) + 7 >= next.length
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
  //       next[Math.floor(countNotNums(0, newStockedMinos) / 4)] + 1;
  //   } else {
  //     fillMino(y + 1, x);
  //   }
  // };

  useEffect(() => {
    // console.log(2);
    const handleKeyDown = (event: KeyboardEvent) => {
      Object.keys(conversion).map((key: string) => {
        if (String(event.keyCode) === key) {
          // console.log(3);
          newInputs = [...newInputs, conversion[Number(key)]];
          // console.log(1, newInputs);
          if (
            isUnder(
              findStockedMinos,
              statusMinoo(
                newInputs,
                next[Math.floor(countNotNums(0, findStockedMinos) / 4)]
              ),
              newInputs,
              2
            )
          ) {
            // console.log(4);
            statusMinoo(
              newInputs,
              next[Math.floor(countNotNums(0, newStockedMinos) / 4)]
            ).map((mino) => {
              // console.log(5);
              console.log('whereFill', whereFill(newStockedMinos, mino.top));
              newStockedMinos[whereFill(newStockedMinos, mino.top) - 1][
                mino.left
              ] = next[Math.floor(countNotNums(0, newStockedMinos) / 4)] + 1;
            });
            setStockedMinos(newStockedMinos);
            newInputs = [2];
            // console.table(newStockedMinos);
          } else if (
            !isNew(
              findStockedMinos,
              statusMinoo(
                newInputs,
                next[Math.floor(countNotNums(0, findStockedMinos) / 4)]
              )
            )
          ) {
            // console.log(6);
            newInputs = newInputs.slice(0, newInputs.length - 1);
          }
          setInputs(newInputs);
        }
      });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  // console.log(7);
  const board = makeBoard(findStockedMinos);
  for (let h = 0; h < 20 - board.length; h++) {
    // console.log(8);
    newStockedMinos = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ...newStockedMinos];
    setStockedMinos(newStockedMinos);
  }
  // console.log(9);
  // console.table(newStockedMinos);
  return {
    exBoard: board,
    exInputs: inputs,
    exNext: next,
    exStockedMinos: stockedMinos,
  };
};
