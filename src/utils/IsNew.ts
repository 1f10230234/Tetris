export const isNew = (
  board: number[][],
  position: {
    top: number;
    left: number;
    backgroundColor: string;
    borderColor: string;
  }[]
) => {
  return position.every((mino) => {
    return board[mino.top] !== undefined && board[mino.top][mino.left] === 0;
  });
};


export const isUnder = (
  boardd: number[][],
  positionn: {
    top: number;
    left: number;
    backgroundColor: string;
    borderColor: string;
  }[],
  inputss: number[],
  nn: number
) => {
  return !isNew(boardd, positionn) && inputss[inputss.length - 1] === nn;
};
