import { useEffect, useState } from 'react';
import { countNum } from '../utils/countNum';

const conversion: { [key: number]: number } = {
  90: 1,
  67: 3,
  37: 4,
  38: 5,
  39: 6,
  40: 2,
};

export const usePosition = () => {
  const [position, setPosition] = useState([0]);
  const newPosition: number[] = JSON.parse(JSON.stringify(position));
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      Object.keys(conversion).map((key: string) => {
        // console.log(event.keyCode, key, conversion[key]);
        if (String(event.keyCode) === key) {
          newPosition.push(conversion[Number(key)]);
          setPosition(newPosition);
          // console.log(newPosition);
          if (Math.abs(countNum(4, newPosition) - countNum(6, newPosition)) > 5) {
            newPosition.pop();
          }
        }
      });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return position;
};
