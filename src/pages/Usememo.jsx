import React, { useMemo, useState } from "react";

export default function Sum(){
    const [num1,setnum1]=useState(1);
    const [num2,setnum2]=useState(1);
    const add=useMemo(()=>{
        console.log('recalculate');
        return num1+num2;
    },[num1,num2])


    const [str,setstr]=useState('');
    const countchar=useMemo(()=>{
        console.log('counting character');
        return str.length;
    },[str])




    return(
        <div>
            <input type="number" value={num1} onChange={(e)=>setnum1(Number(e.target.value)) }/>
            <input type="number" value={num2} onChange={(e)=>setnum2(Number(e.target.value)) }/>
            <p>Sum: {add}</p>

         <input type="text" value={str} onChange={(e)=>setstr(e.target.value) }/>
         <p>Character Count: {countchar}</p>
        </div>





    )
}