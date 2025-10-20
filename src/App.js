
import './App.css';

import React, { useEffect, useState } from "react";
import "./App.css";
import BotCollection from "./components/BotCollection";
import MyBotArmy from "./components/MyBotArmy";
import BotCard from "./components/BotCard";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch data
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  // Add bot to army
  const enlistBot = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Release bot from army
  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  // Delete bot permanently
  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setArmy(army.filter((b) => b.id !== bot.id));
      setBots(bots.filter((b) => b.id !== bot.id));
    });
  };

  return (
    <div className="App">
      <h1> Bot Battlr</h1>
      <MyBotArmy
        army={army}
        onRelease={releaseBot}
        onDischarge={dischargeBot}
      />
      <BotCollection bots={bots} onEnlist={enlistBot} />
    </div>
  );
}

export default App;
