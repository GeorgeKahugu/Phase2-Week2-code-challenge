// import components
import React ,{useEffect,useState}from 'react'
import BotCollection from './components/BotCollection'
import "./App.css"
import YourBotArmy from './components/YourBotArmy'

// Function to call App
 function App(){
  const [renderBotCollection,setRenderBotCollection]=useState(false);

  
  
  const updateRenderBotCollection=(renderBotCollection)=>{
    // if else statement
    if (renderBotCollection === false){
      setRenderBotCollection(true);
    } else {
    
    setRenderBotCollection(false);
  }
  };

// return statement
  return (
    <div>
      <YourBotArmy updateRenderBotCollection={updateRenderBotCollection}/>   
      <BotCollection renderBotCollection={renderBotCollection}/> 
    </div>
  );
}

// export component
export default App;