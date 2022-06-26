import React from 'react'
import DrumPad from './DrumPad'

function DrumMachine({handleClick, keyCode, isPressed, refsArr}) {

    const [qRef, wRef ,eRef ,aRef ,sRef, dRef, zRef, xRef, cRef] = refsArr

    return (
        <div id="container" >  
            <h4 style={{textAlign: "center",color:"aliceblue",marginBottom: "55px"}}>You can use your keyboard...</h4>
            <div id ="drum-machine">
                <DrumPad
                    keyCode={keyCode}
                    drumPadKey="Q"
                    drumPadRef={qRef} 
                    audioID="Heater-1" 
                    handleClick={handleClick}
                    audioSource="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                />

                <DrumPad
                    keyCode={keyCode}
                    drumPadKey="W"
                    drumPadRef={wRef} 
                    audioID="Heater-2" 
                    handleClick={handleClick}
                    audioSource="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                />

                <DrumPad
                    keyCode={keyCode}
                    drumPadKey="E"
                    drumPadRef={eRef} 
                    audioID="Heater-3" 
                    handleClick={handleClick}
                    audioSource="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                />

                <DrumPad
                    keyCode={keyCode}
                    drumPadKey="A"
                    drumPadRef={aRef} 
                    audioID="Heater-4" 
                    handleClick={handleClick}
                    audioSource="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                />

                <DrumPad
                    keyCode={keyCode}
                    drumPadKey="S"
                    drumPadRef={sRef} 
                    audioID="Clap" 
                    handleClick={handleClick}
                    audioSource="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                />

                <DrumPad
                    keyCode={keyCode}
                    drumPadKey="D"
                    drumPadRef={dRef} 
                    audioID="Open-HH"
                    handleClick={handleClick}
                    audioSource="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                />

                <DrumPad
                    keyCode={keyCode}
                    drumPadKey="Z"
                    drumPadRef={zRef} 
                    audioID="Kick-N-Hat" 
                    handleClick={handleClick}
                    audioSource="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                />

                <DrumPad
                    keyCode={keyCode}
                    drumPadKey="X"
                    drumPadRef={xRef} 
                    audioID="Kick"
                    handleClick={handleClick}
                    audioSource="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                />

                <DrumPad
                    keyCode={keyCode}
                    drumPadKey="C"
                    drumPadRef={cRef} 
                    audioID="Closed-HH" 
                    handleClick={handleClick}
                    audioSource="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                />

                <div id="display" style={{ transform : isPressed ? "scale(1.08)" : "" }} >{keyCode}</div>
                
                </div> 
                <h4><a href='https://github.com/ceo991/drum-machine-with-hooks' style={{color:"aliceblue",textDecoration: "none"}}>You can see the source code here</a></h4>
        </div>
    )
}

export default DrumMachine