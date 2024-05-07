// import components
import { useEffect,useState } from "react";
import BotCollection from "./BotCollection";
import SortBar from "./SortBar";

// Call a function
function YourBotArmy({renderBotCollection}) {
  const [armyofBots, setArmyofBots] = useState([]);
  const url_bots= "http://localhost:3000/bots";

useEffect(()=>{setArmyofBots(armyofBots)},[armyofBots]);

// Sort Functionality

const sortBots = (criteria) => {
  const sortedBots = [...armyofBots].sort((a, b) => {
    return a[criteria] - b[criteria];
  });
  setArmyofBots(sortedBots);
};


  // const elements
  const addBotToArmy = (bot) => {
    if(!armyofBots.find((armyBot)=>armyBot.id===bot.id))
    setArmyofBots([...armyofBots, bot]);

  }
const dispatchBotFromArmy=(id)=>{
  console.log("Clicked")
  const updateBotArmy=armyofBots.filter((bot)=>bot.id !== id);
  setArmyofBots(updateBotArmy);
};


const deleteBot=(id) => {
  fetch(`${url_bots}/${id}`,{method:"DELETE"})
  .then(()=>{dispatchBotFromArmy(deleteId);
  renderBotCollection(true);
  }
);
};

  
// return
  return (
    <div className="bot-collection">
      <SortBar sortBots={sortBots}/>
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
            <button onClick={()=>deleteBot(url_bots,bot.id)}>X</button>
          </div>
        );
      })}
      <BotCollection addBotToArmy={addBotToArmy} />
    </div>
  );
}

// export
export default YourBotArmy;