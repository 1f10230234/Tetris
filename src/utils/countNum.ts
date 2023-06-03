export const countNum = (n: number, array: number[]) => {
  // console.log('countNum');
  return array.filter((x: number) => x === n).length;
};

export const countNotNums = (n: number, array: number[][]): number => {
  // console.log('countNotNums');
  return array.flat().filter((x: number) => x !== n).length;
};
