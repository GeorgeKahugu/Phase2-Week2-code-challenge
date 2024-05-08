// imports
import { useState, useEffect } from "react";
import SortBar from "./SortBar";

// Call a function
function BotCollection({ addBotToArmy, renderBotCollection,sortAlgorithm }) {
  const [bots, setBots] = useState([]);
  const [selectedSortAlgorithm,setSelectedSortAlgorithm]=useState(null);
  const bot_url = "http://localhost:3000/bots";

  // fetch the URL
  const fetch_bot = () => {
    fetch(bot_url)
      .then((response) => response.json())
      .then((data) => setBots(data));
  };

  // useEffect
  useEffect(() => {
    fetch_bot();
  }, []);

  useEffect(() => {
    fetch_bot();
  }, [renderBotCollection]);


  useEffect(()=>{
    // logging the re render 
    console.log("sorted by", selectedSortAlgorithm);}, [selectedSortAlgorithm]);
  
// perform algorithm as soon as event fires of
const handleSelectChange=(algorithm)=>{
  performSortonAlgorithm(algorithm)
  setSelectedSortAlgorithm(algorithm)
}

// Sort in descending order
const sortByHealth=(bots)=>{
  const newBots=bots.sort(
    (bot1,bot2)=>(bot1.health<bot2.health)? 1: (bot1.health>bot2.health) ? -1 :0);
  
    return newBots;
}

const sortByArmor=(bots)=>{
  const newBots=bots.sort(
    (bot1,bot2) =>(bot1.armor<bot2.armor) ? 1: (bot1.armor>bot2.armor) ? -1 : 0);
  
    return newBots

}

const SortByDamage= (bots) => {
  const newBots=bots.sort(
    (bot1,bot2) => (bot1.damage<bot2.damage) ? 1: (bot1.armor>bot2.armor) ? -1 :0);
  
    return newBots;
}


// Works as the name describes
const performSortonAlgorithm=(algorithm) => {
  if(algorithm === "health"){
    setBots(sortByHealth(bots));
  }

  if (algorithm === "damage"){
    setBots(sortByDamage(bots));
  }

  if (algorithm === "armor") {
    setBots(sortByArmor(bots));
  }
}

  // return
  return (
    <div className="bot-collection">
      <SortBar handleSelectChange={handleSelectChange}/>
      {bots.map((bot, index) => {
        return (
          // onClick
          <div
            onClick={() => addBotToArmy(bot)}
            className="card-of-bot"
            key={index}
          >
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
          </div>
        );
      })}
    </div>
  );
}

// export component
export default BotCollection;
