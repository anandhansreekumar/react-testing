import { useState } from "react";

import { Props } from "./useCounter.types";

export const useCounter = ({ initialCount = 0 }: Props = {}) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return { count, increment, decrement };
};
