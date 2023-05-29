// import { useState } from 'react';
// import { createArray } from '../utils/createArray';
// import { useIsUnder } from '../utils/IsAround';
// import { usePosition } from './usePosition';
// import { useStatusMino } from './useStatusMino';

// export const useBoard = () => {
//   const [stockedBlocks, setStockedBlocks] = useState(createArray(10, 20, 0));
//   const position = usePosition();
//   const newStockedBlocks: number[][] = [...stockedBlocks];
//   const statusMino = useStatusMino(position);
//   console.log(useIsUnder(newStockedBlocks));
//   if (useIsUnder(newStockedBlocks) === false) {
//     statusMino.map((mino) => {
//       newStockedBlocks[mino.top][mino.left] = 1;
//     });
//   }
//   setStockedBlocks(newStockedBlocks);
//   console.table(newStockedBlocks);
//   const board = newStockedBlocks;
//   return board;
// };
