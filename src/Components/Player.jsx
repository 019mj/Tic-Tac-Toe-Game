import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }
  function handleInput(event) {
    setPlayerName(event.target.value)
  }
  return (
    <li className={isActive}>
      <span id="player">
        {isEditing ? (
          <input
            type="text"
            name=""
            id=""
            required
            defaultValue={playerName}
            onInput={handleInput}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
