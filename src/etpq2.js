import { useState } from "react";
import React from 'react';


const handleClick=()=>{
    for(var i=1;i<num;i++){
        setNum=()=>{
            data=data*i;
        }
    }
}


export default function () {
  return (
    <div>
        <input value={num} onChange={(e)=>{setNum(e.target.value)}}></input>
        <button onClick={handleClick}>Calculate Factorial</button>
    </div>
  );
}
