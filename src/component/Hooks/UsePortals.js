import React from 'react'
import ReactDOM from 'react-dom'

export const UsePortals = () => {
    return (
        
        ReactDOM.createPortal(


            <h1>       
                 if we want something to render outside of div id = "root"
         create a new root div suppose div id = new-root
           import ReactDom and use of ReactDom.createPortal
           </h1>,

            document.getElementById('new-root')

         

        
    )
 
    )
}
