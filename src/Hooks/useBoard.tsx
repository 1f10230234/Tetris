// import { useEffect, useMemo, useState } from 'react';
// import { isNew } from '../utils/IsNew';

// import { countNum } from '../utils/countNum';
// import { createArray } from '../utils/createArray';
// import { statusMinoo } from '../utils/statusMino';
// const conversion: { [key: number]: number } = {
//   90: 1,
//   67: 3,
//   37: 4,
//   38: 5,
//   39: 6,
//   40: 2,
// };

// export const useBoard = () => {
//   const [stockedBlocks, setStockedBlocks] = useState(createArray(10, 20, 0));
//   const newStockedBlocks: number[][] = useMemo(() => {
//     return [...stockedBlocks];
//   }, [stockedBlocks]);
//   const [inputs, setInputs] = useState([0]);
//   let newInputs: number[] = useMemo(() => {
//     return [...inputs];
//   }, [inputs]);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // setCount((c) => c + 1);
//     }, 1000);
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);
//   useEffect(() => {
//     // newInputs.push(2);
//   }, [count, newInputs]);
//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       Object.keys(conversion).map((key: string) => {
//         if (String(event.keyCode) === key) {
//           newInputs.push(conversion[Number(key)]);
//           if (Math.abs(countNum(4, newInputs) - countNum(6, newInputs)) > 5) {
//             newInputs.pop();
//           }
//         }
//       });
//       // const keyFn = keyFuns.find(({keyCode})=>keyCode === event.keyCode)
//       // keyFn?.useFn()
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   });
//   if (isNew(newStockedBlocks, statusMinoo(newInputs)) === false) {
//     newInputs.pop();
//     statusMinoo(newInputs).map((mino) => {
//       newStockedBlocks[mino.top][mino.left] = 1;
//     });
//     newInputs = [0];
//   }
//   useEffect(() => {
//     setStockedBlocks(newStockedBlocks);
//     setInputs(newInputs);
//   }, [newStockedBlocks, newInputs]);
//   // console.table(newStockedBlocks);
//   const board = newStockedBlocks;
//   return { exBoard: board, exInputs: inputs };
// };

// // const useRoutation = (n:number) => {
// //   const [position, setPosition] = useState([0]);
// //   const newPosition: number[] = JSON.parse(JSON.stringify(position));
// //   newPosition.push(n)
// //   if()
// // }

// // const keyFuns = [{keyCode:90,useFn:()=>{useRoutation(1)}}]

import { useEffect, useState } from 'react';
import { isNew } from '../utils/IsNew';

import { createArray } from '../utils/createArray';
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
  const [stockedBlocks, setStockedBlocks] = useState(createArray(10, 20, 0));
  const [inputs, setInputs] = useState([2]);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // setCount((c) => c + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      Object.keys(conversion).map((key: string) => {
        if (String(event.keyCode) === key) {
          const newInputs = [...inputs, conversion[Number(key)]];
          if (
            !isNew(stockedBlocks, statusMinoo(newInputs)) &&
            newInputs[newInputs.length - 1] === 2
          ) {
            console.log('aaaaaa');
            const newStockedBlocks = [...stockedBlocks];
            const newInputs = [...inputs];
            statusMinoo(newInputs).map((mino) => {
              newStockedBlocks[mino.top][mino.left] = 1;
            });
            setStockedBlocks(newStockedBlocks);
            setInputs([2]);
          } else if (isNew(stockedBlocks, statusMinoo(newInputs))) {
            console.log('iiiiii');
            setInputs(newInputs);
          }
        }
      });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [inputs]);

  const board = stockedBlocks;
  return { exBoard: board, exInputs: inputs };
};
