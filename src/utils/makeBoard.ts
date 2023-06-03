import { countNum } from '../utils/countNum';

export const makeBoard = (stockedMinos: number[][]) => {
  // console.log('makeBoard');
  return stockedMinos.filter(function (row: number[]) {
    return countNum(0, row) > 0;
  });
};
