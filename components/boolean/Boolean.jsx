"use client";
import { useState } from "react";  
export const Boolean = () => {
    const [state,setState] = useState("");
    const handleState=()=>{
        if (state==="ON")
        {
          setState("OFF")  
        }
        if(state==="OFF")
        {
          setState("ON")    
        }
    }
  return (
    <div>
      <p>Setting State</p>
      {state==="ON"?<p>yes,I do</p>:state==="OFF" && <p>No,I don't</p>}
      <button onClick={()=>setState("ON")}>ON</button>
      <button onClick={()=>setState("OFF")}>OFF</button>
       <button onClick={handleState}>changed state</button>
    </div>
  )
}