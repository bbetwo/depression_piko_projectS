import { ChatTwo } from "../features/Chat/ChatTwo";
import { Counter } from "../features/Counter/Counter";

import { DnDSort } from "../features/DnDSort/DnDSort";
import { CounterTwo } from "../features/LocalStor/CounterTwo";
import { Weather } from "../features/Weather/Weather";

export const Home = () => {
  return (
    <div>
      <Counter />
      <DnDSort />
      <ChatTwo />

      <CounterTwo />
      <Weather />
    </div>
  );
};
