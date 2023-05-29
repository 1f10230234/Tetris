// import { countNum } from '../utils/countNum';
// import { mino } from '../utils/mino';
// import { useCount } from './useCount';

// export const useStatusMino = (state: number[]) => {
//   const count = useCount();
//   const routation: number = (countNum(1, state) + countNum(3, state) * 3) % 4;
//   const position: number = countNum(6, state) - countNum(4, state);
//   const froatMino: number[][] = mino[1].shape;
//   const froatMinoColor: string = mino[1].color;
//   return froatMino.map((cell) => ({
//     top:
//       1 +
//       (count % 20) +
//       countNum(2, state) +
//       Math.floor(cell[routation % 2] * ((-1) ** Math.floor(routation / 2) * (-1) ** routation)),

//     left: 4 + (position + Math.ceil(cell[1 - (routation % 2)] * (-1) ** Math.floor(routation / 2))),
//     backgroundColor: froatMinoColor,
//     borderColor: froatMinoColor,
//   }));
// };
