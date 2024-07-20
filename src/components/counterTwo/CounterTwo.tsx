import { Props } from "./counterTwo.types";

const CounterTwo: React.FC<Props> = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{count}</p>
      {onDecrement && <button onClick={onDecrement}>Decrement</button>}
      {onIncrement && <button onClick={onIncrement}>Increment</button>}
    </div>
  );
};

export default CounterTwo;
