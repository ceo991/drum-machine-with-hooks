import React from 'react'

function DrumMachine({handleClick, keyCode, isPressed, refsArr}) {

    const [qRef, wRef ,eRef ,aRef ,sRef, dRef, zRef, xRef, cRef] = refsArr

    return (
        <div id="container" >  
            <h4 style={{textAlign: "center",color:"aliceblue",marginBottom: "55px"}}>You can use your keyboard...</h4>
            <div id ="drum-machine">
                <div className ="drum-pad" style={{backgroundColor: keyCode==="Heater-1" ? "rgb(151, 148, 148)" : "gray", transform: keyCode==="Heater-1" ? "translate(0px,6px)" : "",boxShadow: keyCode==="Heater-1" ? "rgba(0, 0, 0, 0.16) 0px 0px 0px, rgba(0, 0, 0, 0.23) 0px 0px 0px" : "" }} id="Heater-1" onClick={()=>handleClick("Heater-1","Q")}>
                    <p>Q</p>
                    <audio className="clip" id="Q" ref={qRef} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
                </div>
                
                <div className ="drum-pad"  style={{backgroundColor: keyCode==="Heater-2" ? "rgb(151, 148, 148)" : "gray", transform: keyCode==="Heater-2" ? "translate(0px,6px)" : "",boxShadow: keyCode==="Heater-2" ? "rgba(0, 0, 0, 0.16) 0px 0px 0px, rgba(0, 0, 0, 0.23) 0px 0px 0px" : "" }} id="Heater-2" onClick={()=>handleClick("Heater-2","W")}>
                    <p>W</p>
                    <audio className="clip" id="W" ref={wRef} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"/>
                </div>
                
                <div className ="drum-pad"  style={{backgroundColor: keyCode==="Heater-3" ? "rgb(151, 148, 148)" : "gray", transform: keyCode==="Heater-3" ? "translate(0px,6px)" : "",boxShadow: keyCode==="Heater-3" ? "rgba(0, 0, 0, 0.16) 0px 0px 0px, rgba(0, 0, 0, 0.23) 0px 0px 0px" : "" }} id="Heater-3"  onClick={()=>handleClick("Heater-3","E")}>
                    <p>E</p>
                    <audio className="clip" id="E" ref={eRef} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"/>
                </div>
                
                <div className ="drum-pad"  style={{backgroundColor: keyCode==="Heater-4" ? "rgb(151, 148, 148)" : "gray", transform: keyCode==="Heater-4" ? "translate(0px,6px)" : "",boxShadow: keyCode==="Heater-4" ? "rgba(0, 0, 0, 0.16) 0px 0px 0px, rgba(0, 0, 0, 0.23) 0px 0px 0px" : "" }} id="Heater-4" onClick={()=>handleClick("Heater-4","A")}>
                    <p>A</p>
                    <audio className="clip" id="A" ref={aRef} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"/>
                </div>
                
                <div className ="drum-pad"  style={{backgroundColor: keyCode==="Clap" ? "rgb(151, 148, 148)" : "gray", transform: keyCode==="Clap" ? "translate(0px,6px)" : "",boxShadow: keyCode==="Clap" ? "rgba(0, 0, 0, 0.16) 0px 0px 0px, rgba(0, 0, 0, 0.23) 0px 0px 0px" : "" }} id="Clap" onClick={()=>handleClick("Clap","S")}>
                    <p>S</p>
                    <audio className="clip" id="S" ref={sRef}  src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"/>
                </div>

                <div className ="drum-pad"  style={{backgroundColor: keyCode==="Open-HH" ? "rgb(151, 148, 148)" : "gray", transform: keyCode==="Open-HH" ? "translate(0px,6px)" : "",boxShadow: keyCode==="Open-HH" ? "rgba(0, 0, 0, 0.16) 0px 0px 0px, rgba(0, 0, 0, 0.23) 0px 0px 0px" : "" }} id="Open-HH" onClick={()=>handleClick("Open-HH","D")}>
                    <p>D</p>
                    <audio className="clip" id="D" ref={dRef} src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"/>
                </div>
                
                <div className ="drum-pad"  style={{backgroundColor: keyCode==="Kick-N-Hat" ? "rgb(151, 148, 148)" : "gray", transform: keyCode==="Kick-N-Hat" ? "translate(0px,6px)" : "",boxShadow: keyCode==="Kick-N-Hat" ? "rgba(0, 0, 0, 0.16) 0px 0px 0px, rgba(0, 0, 0, 0.23) 0px 0px 0px" : "" }} id="Kick-N-Hat" onClick={()=>handleClick("Kick-N-Hat","Z")}>
                    <p>Z</p>
                    <audio className="clip"  id="Z" ref={zRef}  src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"/>
                </div>
                
                <div className ="drum-pad"  style={{backgroundColor: keyCode==="Kick" ? "rgb(151, 148, 148)" : "gray", transform: keyCode==="Kick" ? "translate(0px,6px)" : "",boxShadow: keyCode==="Kick" ? "rgba(0, 0, 0, 0.16) 0px 0px 0px, rgba(0, 0, 0, 0.23) 0px 0px 0px" : "" }} id="Kick" onClick={()=>handleClick("Kick","X")}>
                    <p>X</p>
                    <audio className="clip" id="X" ref={xRef} src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"/>
                </div>
                
                <div className ="drum-pad"  style={{backgroundColor: keyCode==="Closed-HH" ? "rgb(151, 148, 148)" : "gray", transform: keyCode==="Closed-HH" ? "translate(0px,6px)" : "",boxShadow: keyCode==="Closed-HH" ? "rgba(0, 0, 0, 0.16) 0px 0px 0px, rgba(0, 0, 0, 0.23) 0px 0px 0px" : "" }} id="Closed-HH" onClick={()=>handleClick("Closed-HH","C")}>
                    <p>C</p>
                    <audio className="clip"  id="C" ref={cRef}  src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"/>
                </div>
                
                <div id="display" style={{ transform : isPressed ? "scale(1.08)" : "" }} >{keyCode}</div>
                
                </div> 
                <h4><a href='https://github.com/ceo991/drum-machine-with-hooks' style={{color:"aliceblue",textDecoration: "none"}}>You can see the source code here</a></h4>
        </div>
    )
}

export default DrumMachine