type mino = { type: number; shape: number[][]; color: string };

const tmino: mino = {
  type: 1,
  shape: [
    [0, 0],
    [0, -1],
    [0, 1],
    [-1, 0],
  ],
  color: '#93338f',
};
const smino: mino = {
  type: 2,
  shape: [
    [0, 0],
    [-1, -1],
    [0, 1],
    [-1, 0],
  ],
  color: '#7dba50',
};
const zmino: mino = {
  type: 3,
  shape: [
    [0, 0],
    [0, -1],
    [-1, 1],
    [-1, 0],
  ],
  color: '#cc2828',
};
const jmino: mino = {
  type: 4,
  shape: [
    [0, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
  ],
  color: '#1c76bb',
};
const lmino: mino = {
  type: 5,
  shape: [
    [0, 0],
    [0, -1],
    [0, 1],
    [-1, 1],
  ],
  color: '#e98e30',
};
const imino: mino = {
  type: 6,
  shape: [
    [0.5, -1.5],
    [0.5, -0.5],
    [0.5, 0.5],
    [0.5, 1.5],
  ],
  color: '#37bcec',
};
const omino: mino = {
  type: 7,
  shape: [
    [-0.5, -0.5],
    [0.5, -0.5],
    [-0.5, 0.5],
    [0.5, 0.5],
  ],
  color: '#fbdb43',
};

const mino: mino[] = [tmino, smino, zmino, jmino, lmino, imino, omino];

export { mino };
