import React from 'react'

function DrumMachine({handleClick, keyCode}) {

    return (
        <div id="container" >      
            <div id ="drum-machine">
                <div className ="drum-pad" style={{backgroundColor: keyCode==="Heater-1" ? "rgb(151, 148, 148)" : "gray"}} id="Heater-1" onClick={()=>handleClick("Heater-1","Q")}>
                    <p>Q</p>
                    <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
                </div>
                
                <div className ="drum-pad"  style={{backgroundColor: keyCode==="Heater-2" ? "rgb(151, 148, 148)" : "gray"}} id="Heater-2" onClick={()=>handleClick("Heater-2","W")}>
                    <p>W</p>
                    <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"/>
                </div>
                
                <div className ="drum-pad"  style={{backgroundColor: keyCode==="Heater-3" ? "rgb(151, 148, 148)" : "gray"}} id="Heater-3"  onClick={()=>handleClick("Heater-3","E")}>
                    <p>E</p>
                    <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"/>
                </div>
                
                <div className ="drum-pad"  style={{backgroundColor: keyCode==="Heater-4" ? "rgb(151, 148, 148)" : "gray"}} id="Heater-4" onClick={()=>handleClick("Heater-4","A")}>
                    <p>A</p>
                    <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"/>
                </div>
                
                <div className ="drum-pad"  style={{backgroundColor: keyCode==="Clap" ? "rgb(151, 148, 148)" : "gray"}} id="Clap" onClick={()=>handleClick("Clap","S")}>
                    <p>S</p>
                    <audio className="clip" id="S"  src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"/>
                </div>

                <div className ="drum-pad"  style={{backgroundColor: keyCode==="Open-HH" ? "rgb(151, 148, 148)" : "gray"}} id="Open-HH" onClick={()=>handleClick("Open-HH","D")}>
                    <p>D</p>
                    <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"/>
                </div>
                
                <div className ="drum-pad"  style={{backgroundColor: keyCode==="Kick-N-Hat" ? "rgb(151, 148, 148)" : "gray"}} id="Kick-N-Hat" onClick={()=>handleClick("Kick-N-Hat","Z")}>
                    <p>Z</p>
                    <audio className="clip"  id="Z"  src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"/>
                </div>
                
                <div className ="drum-pad"  style={{backgroundColor: keyCode==="Kick" ? "rgb(151, 148, 148)" : "gray"}} id="Kick" onClick={()=>handleClick("Kick","X")}>
                    <p>X</p>
                    <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"/>
                </div>
                
                <div className ="drum-pad"  style={{backgroundColor: keyCode==="Closed-HH" ? "rgb(151, 148, 148)" : "gray"}} id="Closed-HH" onClick={()=>handleClick("Closed-HH","C")}>
                    <p>C</p>
                    <audio className="clip"  id="C"  src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"/>
                </div>
                
                <div id="display">{keyCode}</div>
            </div> 
        </div>
    )
}

export default DrumMachine