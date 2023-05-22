type mino = { type: number; shape: number[][] };

const tmino: mino = {
  type: 1,
  shape: [
    [0, 0],
    [0, -1],
    [0, 1],
    [-1, 0],
  ],
};
const smino: mino = {
  type: 2,
  shape: [
    [0, 0],
    [-1, -1],
    [0, 1],
    [-1, 0],
  ],
};
const zmino: mino = {
  type: 3,
  shape: [
    [0, 0],
    [0, -1],
    [-1, 1],
    [-1, 0],
  ],
};
const jmino: mino = {
  type: 4,
  shape: [
    [0, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
  ],
};
const lmino: mino = {
  type: 5,
  shape: [
    [0, 0],
    [0, -1],
    [0, 1],
    [-1, 1],
  ],
};
const imino: mino = {
  type: 6,
  shape: [
    [0.5, -1.5],
    [0.5, -0.5],
    [0.5, 0.5],
    [0.5, 1.5],
  ],
};
const omino: mino = {
  type: 7,
  shape: [
    [-0.5, -0.5],
    [0.5, -0.5],
    [-0.5, 0.5],
    [0.5, 0.5],
  ],
};

const mino: mino[] = [tmino, smino, zmino, jmino, lmino, imino, omino];

export { mino };
