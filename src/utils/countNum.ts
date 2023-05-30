export const countNum = (n: number, array: number[]) => {
  return array.filter((x: number) => x === n).length;
};

export const countNotNums = (n: number, array: number[][]): number => {
  return array.flat().filter((x: number) => x !== n).length;
};
