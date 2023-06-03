import { countNum } from './countNum';
export const whereFill = (board: number[][], top: number) => {
  // console.log('whereFill');
  let h = 0;
  let fillTop = 0;
  console.table(board);
  while (h < top) {
    if (countNum(0, board[h]) !== 0) {
      h++;
    }
    fillTop++;
  }
  return fillTop;
};
