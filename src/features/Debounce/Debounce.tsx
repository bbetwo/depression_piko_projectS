import { useEffect, useState } from "react";

const itemsMoc = () => {
  const arr = Array.from({ length: 30 }, (_, id) => {
    return {
      id: Date.now(),
      name: ["Лёха", "Игорёха", "Мирослав ы"][id % 3],
    };
  });

  return arr;
};
export const Debounce = () => {
  const [quere, setQuere] = useState<string>("");
  const [items, setItems] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    if (quere === "") {
      return setItems(itemsMoc);
    }
    console.log("alo nahui");

    const timer = setTimeout(() => {
      console.log("ya tut");

      const ser = itemsMoc().filter((el) => {
        return el.name.includes(quere);
      });

      return setItems(ser);
    }, 500);
    console.log("alo nahui 2222");
    return clearTimeout(timer);
  }, [quere]);

  return (
    <div>
      <p>{quere}</p>
      {items.map((el) => {
        return <div>{el.name}</div>;
      })}
      <input
        type="text"
        value={quere}
        onChange={(e) => setQuere(e.target.value)}
      />
    </div>
  );
};
