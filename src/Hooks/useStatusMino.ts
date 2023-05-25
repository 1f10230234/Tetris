import { countNum } from '../utils/countNum';
import { mino } from '../utils/mino';
import { useCount } from './useCount';
import { usePosition } from './usePosition';

export const useStatusMino = () => {
  const newPosition: number[] = usePosition();
  const count = useCount();
  const routation: number = (countNum(1, newPosition) + countNum(3, newPosition) * 3) % 4;
  const position: number = countNum(6, newPosition) - countNum(4, newPosition);
  const froatMino: number[][] = mino[Math.floor(count / 20) % 7].shape;
  const froatMinoColor: string = mino[Math.floor(count / 20) % 7].color;
  return froatMino.map((cell) => ({
    top:
      60 +
      ((count % 20) +
        Math.floor(cell[routation % 2] * ((-1) ** Math.floor(routation / 2) * (-1) ** routation))) *
        30,

    left:
      120 +
      30 * (position + Math.ceil(cell[1 - (routation % 2)] * (-1) ** Math.floor(routation / 2))) +
      60,
    backgroundColor: froatMinoColor,
    borderColor: froatMinoColor,
  }));
};
