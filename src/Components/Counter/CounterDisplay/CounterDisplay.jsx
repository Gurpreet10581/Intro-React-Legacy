import React from 'react';

export default function CounterDisplay(props){
  
    
    return(
        <div>
            <h1>Testing</h1>
            <button onClick={props.increment}> increment</button>
            <button onClick={props.decrement}> decrement</button>

        </div>
    )
}
