// imports
import { useState, useEffect } from "react";

// Call a function
function BotCollection({addBotToArmy,renderBotCollection}){
  const [bots, setBots] = useState([]);
  const bot_url="http://localhost:3000/bots";

// fetch the URL
  const fetch_bot= () => {
    fetch(bot_url)
      .then((response) => response.json())
      .then((data) => setBots(data));
  }
  
// useEffect
  useEffect(() => {fetch_bot() }, []);

  useEffect(()=> {fetch_bot() }, [renderBotCollection]);

    // return
  return (
    <div className="bot-collection">  
      {bots.map((bot, index) => {
        return (

// onClick
          <div onClick={()=>addBotToArmy(bot)} className="cardofbot" key={index}>
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
