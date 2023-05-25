// import { useEffect, useMemo, useState } from 'react';
// import { mino } from '../utils/mino';
// import { usePosition } from './usePosition';
import { createArray } from '../utils/createArray';

export const useBoard = () => {
  const board = createArray(10, 24, 0);

  return board;
};
