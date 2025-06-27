import { useCount } from "./useCount";

export const Counter = () => {
  const { plusCount, minusCount, count, resetCount } = useCount();

  return (
    <div>
      <div>{count}</div>
      <button onClick={plusCount} disabled={count >= 10}>
        +
      </button>
      <button onClick={minusCount} disabled={count <= 0}>
        -
      </button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};
