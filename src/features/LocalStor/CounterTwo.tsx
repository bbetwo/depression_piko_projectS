import { useLocalStorage } from "./useLocalStorage";

export const CounterTwo = () => {
  const [count, setCount] = useLocalStorage("count", 0);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};
