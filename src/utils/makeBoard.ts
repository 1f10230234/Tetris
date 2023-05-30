import { countNum } from '../utils/countNum';

export const makeBoard = (stockedMinos: number[][]) => {
  return stockedMinos.filter(function (row: number[]) {
    return countNum(0, row) > 0;
  });
};
