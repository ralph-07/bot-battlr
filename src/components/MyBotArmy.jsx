import React from "react";
import BotCard from "./BotCard";

function MyBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="my-bot-army">
      <h2>My Bot Army</h2>
      <div className="bot-grid">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={() => onRelease(bot)}
            onDelete={() => onDischarge(bot)}
          />
        ))}
      </div>
    </div>
  );
}

export default MyBotArmy;
