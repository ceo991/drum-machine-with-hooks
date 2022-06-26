import React from 'react'

function DrumPad({keyCode, drumPadKey, audioID, drumPadRef, audioSource, handleClick}) {
    
  return (
    <div className ="drum-pad" style={{backgroundColor: keyCode===audioID ? "rgb(151, 148, 148)" : "gray", transform: keyCode===audioID ? "translate(0px,6px)" : "",boxShadow: keyCode===audioID ? "rgba(0, 0, 0, 0.16) 0px 0px 0px, rgba(0, 0, 0, 0.23) 0px 0px 0px" : "" }} id={audioID} onClick={()=>handleClick(drumPadKey)}>
        <p>{drumPadKey}</p>
        <audio className="clip" id={drumPadKey} ref={drumPadRef} src={audioSource}/>
    </div>
  )
}

export default DrumPad