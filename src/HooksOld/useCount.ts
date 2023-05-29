// import { useEffect, useState } from 'react';
// import { useBoard } from './useBoard';
// import { useIsUnder } from './useIsAround';

// export const useCount = () => {
//   const [count, setCount] = useState(0);
//   // if (useIsUnder(useBoard()) === false) {
//   //   setCount(0);
//   // }
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCount((c) => c + 1);
//     }, 1000);
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);
//   return count;
// };
