import React, { useState } from "react";

const HooksCounter2 = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
};

export default HooksCounter2;
