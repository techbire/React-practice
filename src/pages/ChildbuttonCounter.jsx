import React, {useState}from 'react';

const Child=({onClick})=>{
    console.log("child render")
    return <button onClick={onClick}>click button</button>
};

export default function ChildbuttonCounter(){
    const [count,setcount]=useState(0)
    
    const handleClick=()=>{
        setcount(count+1)
    }
    
    return(
        <div>
            <h2>Count: {count}</h2>
            <Child onClick={handleClick}/>
        </div>
    )
}