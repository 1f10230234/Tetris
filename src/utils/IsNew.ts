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
    console.table(position);
    // console.log(board[mino.top][mino.left]);
    return board[mino.top] !== undefined && board[mino.top][mino.left] === 0;
  });
};
// export const isUnder = (
//   board: number[][],
//   position: {
//     top: number;
//     left: number;
//     backgroundColor: string;
//     borderColor: string;
//   }[]
// ) => {
//   const
// }