/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';
import './App.css';
import DrumMachine from './components/DrumMachine';

function App() {

  const [keyCode, setKeyCode] = useState("")
  const [time, setTime] = useState(300)
  const [isPressed, setIsPressed] = useState(false)
  const keyMatches = [
    {
      key:81, 
      keyCode:"Heater-1"
    },
    {
      key:87, 
      keyCode:"Heater-2"
    },
    {
      key:69, 
      keyCode:"Heater-3"
    },
    {
      key:65, 
      keyCode:"Heater-4"
    },
    {
      key:83, 
      keyCode:"Clap"
    },
    {
      key:68, 
      keyCode:"Open-HH"
    },
    {
      key:90, 
      keyCode:"Kick-N-Hat"
    },
    {
      key:88, 
      keyCode:"Kick"
    },
    {
      key:67, 
      keyCode:"Closed-HH"
    },
]
const qRef = useRef()
const wRef = useRef()
const eRef = useRef()
const aRef = useRef()
const sRef = useRef()
const dRef = useRef()
const zRef = useRef()
const xRef = useRef()
const cRef = useRef()

const refsArr = [qRef, wRef ,eRef ,aRef ,sRef, dRef, zRef, xRef, cRef]

  useEffect(()=>{
    document.addEventListener('keydown', handleKeyDown);
},[])

  useEffect(()=>{
    setTime(300)
},[keyCode])

  const handleKeyDown = (e)=>{
    const keysArr = keyMatches.map(obj => obj.key)
    const keyCodesArr = keyMatches.map(obj => obj.keyCode)
    const value = e.keyCode;
    if(keysArr.includes(value)){
      setIsPressed(true)
      setKeyCode(keyCodesArr[keysArr.indexOf(value)]) 
      refsArr[keysArr.indexOf(value)].current.currentTime = 0
      refsArr[keysArr.indexOf(value)].current.play()
      clearKeyCode()
    }
  }

  const handleClick = (kCode,audioId)=>{
    setIsPressed(true)
    setKeyCode(kCode)  
    document.getElementById(audioId).currentTime = 0
    document.getElementById(audioId).play()
    clearKeyCode()
  }

  const clearKeyCode = ()=>{
    setTimeout(()=>{
      setKeyCode("")
      setIsPressed(false)
    },time)
  }

  return (
    <div className="App">
      <h2 style={{textAlign: "center",color:"aliceblue",marginTop: "25px"}}>Drum Machine</h2>
      <DrumMachine 
      handleClick={handleClick} 
      keyCode={keyCode}
      isPressed={isPressed}
      refsArr={refsArr}
      />
    </div>
  );
}

export default App;
