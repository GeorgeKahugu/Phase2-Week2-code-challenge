// import components
import { useState } from "react";
import BotCollection from "./BotCollection";

// Call a function
function YourBotArmy({renderBotCollection}) {
  const [armyofBots, setArmyofBots] = useState([]);
  const url_bots= "http://localhost:3000/bots";

  // const elements
  const addBotToArmy = (bot) => {
    if(!armyofBots.find((armyBot)=>armyBot.id===bot.id))
    setArmyofBots([...armyofBots, bot]);

  }
const dispatchBotFromArmy=(Id)=>{
  const updateBot=armyofBots.filter((bot)=>bot.id !== Id);
  setArmyofBots(updateBot);
};


const deleteBot=(url_bots, deleteId) => {
  fetch(`${url_bots}/${deleteId}`,{method:"DELETE"})
  .then(()=>{dispatchBotFromArmy(deleteId);
  updateRenderBotCollection(true);
  }
);
};

  
// return
  return (
    <div className="bot-collection">
      {armyofBots.map((bot, index) => {
        return (
          <div onClick={()=> dispatchBotFromArmy(bot)} key={index} className="cardofbot">
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
            <button onClick={()=>deleteBot(bot.id)}>X</button>
          </div>
        );
      })}
      <BotCollection addBotToArmy={addBotToArmy}/>
    </div>
  );
}

// export
export default YourBotArmy;