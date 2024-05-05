import { useState } from "react";
import BotCollection from "./BotCollection";

function YourBotArmy() {
  const [armyofBots, setArmyofBots] = useState([]);

  const addBotToArmy = (bot) => {
    if(!armyofBots.find((armyBot)=>armyBot.id===bot.id))
    setArmyofBots([...armyofBots, bot]);

const dispatchBotFromArmy=(Id)=>{
  const updateBot

}


  };

  return (
    <div className="bot-collection">
      {armyofBots.map((bot, index) => {
        return (
          <div key={index} className="card">
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
            <button onClick={()=>deleteBot(bot.id)}/>X
          </div>
        );
      })}
      <BotCollection addBotToArmy={addBotToArmy}/>
    </div>
  );
}

export default YourBotArmy;