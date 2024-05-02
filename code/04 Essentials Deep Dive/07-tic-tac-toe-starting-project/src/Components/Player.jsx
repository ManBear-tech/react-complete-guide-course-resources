import { useState } from "react";

export default function Player({playerName, playerSymbol, isActive}) {
  
  const [name, setName] = useState(playerName)
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick()
  {
    setIsEditing((editing => !editing))
  }

  function changePlayerName(event)
  {
    console.log(event);
    setName(event.target.value)
  }

  let playerField = (isEditing ? <input type = "text" required className = "playerName" defaultValue={name} onChange={changePlayerName}/> : <span className="player-name">{name}</span>)
  return ( <li className = {isActive ? 'active' : undefined}>
      <span className = "player">
        {playerField}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick = {handleEditClick}>{isEditing ? "Save" : "Edit"} </button>
    </li>)
}