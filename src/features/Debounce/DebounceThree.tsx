import { useEffect, useState } from "react";
import { useDebounceThree } from "./useDebounceThree";

type MockObj = {
  id: number;
  text: string;
};

const arrM = (): MockObj[] => {
  const arr = Array.from({ length: 5 }, (_, i) => {
    return {
      id: Date.now() + i,
      text: ["VANYA", "SERGAY", "SANYA"][i % 3],
    };
  });

  return arr;
};

export const DebounceThree = () => {
  const [inText, setInText] = useState<string>("");
  const [items, setItems] = useState<{ id: number; text: string }[]>([]);
  const { text } = useDebounceThree(inText, 500);

  useEffect(() => {
    if (!text) {
      setItems(arrM());
      return;
    }

    const search = arrM().filter((el) => {
      console.log("YA RABOTAYU& S");

      return el.text.toLowerCase().includes(text);
    });

    setItems(search);
  }, [text]);

  return (
    <div>
      {items.map((el) => (
        <div key={el.id}>{el.text} </div>
      ))}
      <span>{inText}</span>
      <input
        type="text"
        value={inText}
        onChange={(e) => setInText(e.currentTarget.value)}
      />
    </div>
  );
};
