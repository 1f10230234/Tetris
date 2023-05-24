import { usePosition } from './usePosition';
export const useCountNum = (n: number) => {
  const newPosition: number[] = usePosition();
  return newPosition.filter(function (x) {
    return x === n;
  }).length;
};
