import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onEnlist }) {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleClick={() => onEnlist(bot)} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
