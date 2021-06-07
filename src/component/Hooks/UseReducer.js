import React,{useState,useReducer } from 'react'

const initialState = 0;
const reducer = (state,action)=>{
    //state - current state
    console.log(state);
    console.log(action)

    if(action.type==='Increment'){
        return state+1;

    }
    if(action.type==='Decrement'){
        return state-1;

    }
}

export const UseReducer = () => {

  //  const [count, setcount] = useState(initialState);

    //LETS do using useReducer >> insted useState
//const [state, dispatch] //state means current state
// const [subscribe, thapa] //anthing we can write



    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <div>
            <h3>use reducerr</h3>
            <a>
            https://adhithiravi.medium.com/what-is-the-usereducer-hook-6274af633541
            </a>
            <p>
                "
                ‘Hooks are functions that let you “hook into” React state and lifecycle features from function component. They do not work within a class. They let you use React without a class.’ — React Official Blog post."
            </p>
            <h3>
            What is a Reducer?

            </h3>
            <p>
            I like to think of a Reducer in Redux as a “Coffee Maker”. It takes in an old state and action and brews a new state (Fresh coffee).

            </p>
            <p>
            I like to think of a reducer like a “coffee maker”. The coffee maker takes in coffee powder and water. It then returns a freshly brewed cup of coffee that we can enjoy. Based on this analogy reducers are functions that take in the current state (coffee powder) and actions (water) and brew a new state (fresh coffee).

            </p>
            <h3>What is the useReducer Hook?</h3>
            <p>
The useReducer is a hook I use sometimes to manage the state of the application. It is very similar to the useState hook, just more complex. It acts as an alternate hook to the useState hook to manage complex state in your application.
The useReducer hook uses the same concept as the reducers in Redux. It is basically a pure function, with no side-effects.
A function is considered pure, if it adheres to the following rules:
The function always returns the same output if the same arguments are passed in.
The function does not produce any side-effects.
With this, it makes reducers easier to test and write.
The syntax for the useReducer hook is as follows:
</p>
            <p>useReducer(reducer, initialState) it takes two arg ,reducer funcation and intial state</p>
            <p>Reducers are pure funcations that 
                take in a state and action and returns a new state</p>
      
      {/* <p>{count}</p> */}
      <p>{state}</p>
      <button onClick={()=>dispatch({type:'Increment'})} className="button button4">Inc</button>
      <button onClick={()=>dispatch({type:'Decrement'})} className="button button5"> Dec</button>

        </div>
    )
}
