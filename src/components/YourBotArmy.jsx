
// import components
import { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import SortBar from "./SortBar";


// Call a Function
function YourBotArmy({ updateRenderBotCollection }) {
  const [armyofBots, setArmyofBots] = useState([]);
  const bots_url = "http://localhost:3000/bots";

  useEffect(()=>{setArmyofBots(armyofBots)}, [armyofBots]);

  // Sort Functionality
  const sortBots = (criteria) => {
  const sortedBots = [...armyofBots].sort((a, b) => {
    return a[criteria] - b[criteria];
  });
  setArmyofBots(sortedBots);
};

// Const 
  const addBotToArmy = (bot) => {
    if (!armyofBots.find((armyBot) => armyBot.id === bot.id))
      setArmyofBots([...armyofBots, bot]);
  }

  const dispatchBotFromArmy = (Id) => {
    console.log("Clicked!")
    const updateBot = armyofBots.filter((bot) => bot.id !== Id);
    setArmyofBots(updateBot);
  };

  
  const deleteBot = (bots_url, deleteId) => {
    fetch(`${bots_url}/${deleteId}`, { method: "DELETE" })
      .then(() => {
        dispatchBotFromArmy(deleteId);
        updateRenderBotCollection(true);
      }
      );
  };

  return (
    <div className="bot-collection">
       <SortBar sortBots={sortBots}/>
      {armyofBots.map((bot, index) => {
        return (
          <div onClick={() => dispatchBotFromArmy(bot)} key={index} className="card-of-bot">
            <img src={bot.avatar_url} alt={bot.name} />
            <p>Id:{bot.id}</p>
            <p>Name:{bot.name}</p>
            <p>Health:{bot.health}</p>
            <p>Damage:{bot.damage}</p>
            <p>Armour:{bot.armor}</p>
            <p>Bot Class:{bot.bot_class}</p>
            <p>Catch Phrase:{bot.catchphrase}</p>
            <p>Created At:{bot.created_at}</p>
            <p>Updated At:{bot.updated_at}</p>
            <button onClick={() => deleteBot(bots_url, bot.id)}>X</button>
          </div>
        );
      })}
      <BotCollection addBotToArmy={addBotToArmy} />
    </div>
  );
}

// export
export default YourBotArmy;