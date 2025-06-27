import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

const itemsM = () => {
  const arr = Array.from({ length: 10 }, (_, id) => {
    return {
      id,
      text: ["Василий", "Анатолий", "Аркадий"][id % 3],
    };
  });

  return arr;
};

export const DebounceTwo = () => {
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<{ id: number; text: string }[]>([]);
  //   const [isLoad, setIsLoad] = useState<boolean>(false);
  const quare = useDebounce(value, 500);

  useEffect(() => {
    if (!quare) {
      console.log("tut ");

      setItems(itemsM());
      return;
    }
    console.log("ya tut ss");

    const arr = itemsM().filter((el) => {
      return el.text.includes(quare);
    });
    setItems(arr);
  }, [quare]);

  return (
    <div>
      <div>{quare}</div>

      {items.map((el) => {
        return <div>{el.text}</div>;
      })}

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
    </div>
  );
};
