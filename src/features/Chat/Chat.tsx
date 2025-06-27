import { useEffect, useState } from "react";

export const Chat = () => {
  const [message, setMessage] = useState<string>("");
  const [msgList, setMsgList] = useState<string[]>([]);
  const [soket, setSoket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket("wss://ws.postman-echo.com/raw");

    ws.onmessage = (e) => setMsgList((prev) => [...prev, e.data]);

    setSoket(ws);

    return () => ws.close();
  }, []);

  const handleChange = (msg: string) => {
    console.log(msgList, "sss");
    setMessage(msg);
  };

  const sendMessage = () => {
    if (soket && message.trim()) {
      soket.send(message);
      setMessage("");
    }
  };

  return (
    <div>
      <div>{message}</div>
      {msgList.map((e) => {
        return <div>{e}</div>;
      })}
      <input
        type="text"
        value={message}
        onChange={(e) => handleChange(e.currentTarget.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
    </div>
  );
};
