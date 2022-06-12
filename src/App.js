import { useState, useEffect } from 'react';
import './App.css';
import DrumMachine from './components/DrumMachine';

function App() {

  const [keyCode, setKeyCode] = useState("")
  const [time, setTime] = useState(300)

  useEffect(()=>{
    document.addEventListener('keydown', handleKeyDown);
},[])

  useEffect(()=>{
    setTime(300)
},[keyCode])

  const handleKeyDown = (e)=>{
    if(e.keyCode === 81){
      setKeyCode("Heater-1")
      document.getElementById("Q").currentTime = 0
      document.getElementById("Q").play()

    }else if(e.keyCode === 87){
      setKeyCode("Heater-2")
      document.getElementById("W").currentTime = 0
      document.getElementById("W").play()
   
    } else if(e.keyCode === 69){
      setKeyCode("Heater-3")
      document.getElementById("E").currentTime = 0
      document.getElementById("E").play()
     
    } else if(e.keyCode === 65){
      setKeyCode("Heater-4")
      document.getElementById("A").currentTime = 0
      document.getElementById("A").play()
   
    } else if(e.keyCode === 83){
      setKeyCode("Clap")
      document.getElementById("S").currentTime = 0
      document.getElementById("S").play()
     
    } else if(e.keyCode === 68){
      setKeyCode("Open-HH")
      document.getElementById("D").currentTime = 0
      document.getElementById("D").play()
      
    } else if(e.keyCode === 90){
      setKeyCode("Kick-N-Hat")
      document.getElementById("Z").currentTime = 0
      document.getElementById("Z").play()
      
    } else if(e.keyCode === 88){
      setKeyCode("Kick")
      document.getElementById("X").currentTime = 0
      document.getElementById("X").play()
      
    } else if(e.keyCode === 67){
      setKeyCode("Closed-HH")
      document.getElementById("C").currentTime = 0
      document.getElementById("C").play()
      
    }
    clearKeyCode()
  }

  const handleClick = (kCode,audioId)=>{
    setKeyCode(kCode)  
    document.getElementById(audioId).currentTime = 0
    document.getElementById(audioId).play()
    clearKeyCode()
  }

  const clearKeyCode = ()=>{
    setTimeout(()=>{
      setKeyCode("")
    },time)
  }

  return (
    <div className="App">
      <DrumMachine handleClick={handleClick} keyCode={keyCode}/>
    </div>
  );
}

export default App;
