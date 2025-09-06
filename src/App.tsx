import { useEffect, useState } from "react";
import "./global.css";
import dayjs from "dayjs";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  const [time, setTime] = useState("");
  let timer: number | undefined;

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  useEffect(() => {
    if (timer) {
      clearInterval(timer);
    }

    timer = setInterval(() => {
      const time = dayjs().format("HH:mm:ss");
      setTime(time);
    }, 1000);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  return (
    <main className="container">
      <h1>{time}</h1>
      <div></div>
    </main>
  );
}

export default App;
