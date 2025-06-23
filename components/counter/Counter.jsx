"use client";
import { useState } from "react";   
export const Counter = () => {
  const [count,setCount] = useState(1)
  return (
    <div>
      <p>Counter</p>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment button</button>
    </div>
  );
};
