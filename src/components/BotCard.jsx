import React from "react";

function BotCard({ bot, handleClick, onDelete }) {
  const { name, avatar_url, health, damage, armor, bot_class } = bot;

  return (
    <div className="bot-card" onClick={handleClick}>
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>Class: {bot_class}</p>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(bot);
          }}
          className="delete-btn"
        >
          ❌
        </button>
      )}
    </div>
  );
}

export default BotCard;
