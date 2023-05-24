export const countNum = (n: number,array:number[]) => {
  return array.filter(function (x:number) {
    return x === n;
  }).length;
};