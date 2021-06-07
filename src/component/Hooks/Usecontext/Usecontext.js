import React, { createContext } from 'react'
import { CompA } from './CompA'
import { CompB } from './CompB';

const name = <b>"Learnig React js"</b>;

const sendataContext = createContext();

export const Usecontext = () => {

    return (
        <>
           <h1>use of createContext() and  useContext()</h1> 

           <p>1. const sendataContext = createContext();</p>
           <p>export  sendataContext ;</p>
           <p>2. sendataContext.Provider;</p>
           <p>3.     const consumerDataContext = useContext(sendataContext)</p>

           <p>first i was sending data 
               using props from usecontext to compA to compB</p>
          {/* <CompA sendname = {name}/> */}
         
          <sendataContext.Provider value = {name}>
          <CompA />
          {/* <CompB/> */}
          </sendataContext.Provider>
        </>
    )
}

export { sendataContext };
