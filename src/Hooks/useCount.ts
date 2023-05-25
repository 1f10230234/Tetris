import { useEffect,useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return count
}