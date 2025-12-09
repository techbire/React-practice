import {useState} from "react"
function Counter(){
    const [count,setCount]=useState(0)
    const inc=()=>setCount(count+1);
    const dec=()=>setCount(count-1);
    const reset=()=>setCount(0)
    return(
        <>
        <button onClick={()=>inc()}>inc</button>
        <button onClick={()=>dec()}>dec</button>
        <button onClick={()=>reset()}>reset</button>
        <p>counter value:{counter}</p>
        </>
    )

}
export default Counter;