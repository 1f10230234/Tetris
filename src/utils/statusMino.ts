import { countNum } from '../utils/countNum';
import { mino } from '../utils/mino';

export const statusMinoo = (inputs: number[], minoType: number) => {
  const routation: number = (countNum(1, inputs) + countNum(3, inputs) * 3) % 4;
  const position: number = countNum(6, inputs) - countNum(4, inputs);
  const froatMino: number[][] = mino[minoType].shape;
  const froatMinoColor: string = mino[minoType].color;
  return froatMino.map((cell) => ({
    top:
      countNum(2, inputs) +
      Math.floor(
        cell[routation % 2] *
          ((-1) ** Math.floor(routation / 2) * (-1) ** routation)
      ),

    left:
      4 +
      (position +
        Math.ceil(
          cell[1 - (routation % 2)] * (-1) ** Math.floor(routation / 2)
        )),
    backgroundColor: froatMinoColor,
    borderColor: froatMinoColor,
  }));
};
