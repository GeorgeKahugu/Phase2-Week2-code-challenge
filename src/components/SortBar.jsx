import React from "react";

function SortBar({ sortBots }) {
  const handleSort = (criteria) => {
    sortBots(criteria);
  };

  return (
    <div className="sort-bar">
      <button onClick={() => handleSort("health")}>Sort by Health</button>
      <button onClick={() => handleSort("damage")}>Sort by Damage</button>
      <button onClick={() => handleSort("armor")}>Sort by Armor</button>
    </div>
  );
}

export default SortBar;
