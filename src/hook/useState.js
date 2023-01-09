import { useState } from "react";

const useStateCustom = (init = 0) => {
  const [count, setCount] = useState(init);

  return {
    count,
    increment() {
      setCount((prevCount) => prevCount + 1);
    },
    reset() {
      setCount(0);
    },
  };
};

export default useStateCustom;
