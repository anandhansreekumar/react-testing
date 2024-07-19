import { ChangeEvent, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));
  };

  const handleSetClick = () => {
    setCount(amount);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={handleNumberChange}
      />
      <button onClick={handleSetClick}>Set</button>
    </div>
  );
};

export default Counter;
