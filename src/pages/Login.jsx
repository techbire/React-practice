//use Reducer
//username,pass,rest
import React from 'react';
import { useReducer } from "react";

export default function Login(){
    function reducer(state,action){
        // if(action.type==='username'){
        //     return {...state, username:action.value}
        // }
        // if(action.type==='pass'){
        //     return {...state, pass:action.value}
        // }
        // if(action.type==='email'){
        //     return {...state, email:action.value}
        // }
        if(action.type==='reset'){
            return {username:'', pass:'', email:''}
        }


        //alternative
        return{...state,[action.type]:action.value}
    }
    
    const [state,dispatch]=useReducer(reducer,{username:'', pass:'', email:''})
    
    return(
        <div>
            <p>username:</p>
            <input type="text" value={state.username} onChange={(e)=>dispatch({type:'username', value:e.target.value})} />
            <p>pass:</p>
            <input type="text" value={state.pass} onChange={(e)=>dispatch({type:'pass', value:e.target.value})} />
            <p>email:</p>
            <input type="text" value={state.email} onChange={(e)=>dispatch({type:'email', value:e.target.value})} />
            <button onClick={()=>dispatch({type:'reset'})}>reset</button>

            <p>username: {state.username}</p>
            <p>pass: {state.pass}</p>
            <p>email: {state.email}</p>
        </div>
    )
}