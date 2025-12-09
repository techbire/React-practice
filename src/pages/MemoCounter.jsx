import {useReducer} from 'react'
export default function Counter(){
    function reducer(state,action){
        if(action.type==='INC'){
            return {count:state.count+1}
        }
        if(action.type==='DEC'){
            return {count:state.count-1}
        }
    }
    
    const [state,dispatch]=useReducer(reducer,{count:0})
    return(
        <div>
            <h3>
                {state.count}
            </h3>
                <button onClick={()=>dispatch({type:'INC'})}>+</button>
                <button onClick={()=>dispatch({type:'DEC'})}>-</button>
                               

        </div>
    )
}