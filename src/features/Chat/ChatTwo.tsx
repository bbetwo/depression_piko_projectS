import { useEffect, useState } from "react";

export const ChatTwo = () => {
  const [text, setText] = useState<string>("");
  const [msgItems, setMsgItems] = useState<string[]>([]);
  const [soket, setSoket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket("sss");
    ws.onmessage = (e) => setMsgItems((prev) => [...prev, e.data]);

    setSoket(ws);
    return () => ws.close();
  }, []);

  return (
    <div>
      <div>{text}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
    </div>
  );
};
