import React,{useRef} from 'react'
import Forwardrefchild from './Forwardrefchild/Forwardrefchild'
export const Forwardrefparent = () => {
    
 const inputRef = useRef(null);

function parentbutton(){
 
   inputRef.current.value = '100';
   inputRef.current.style.color = 'red';
   inputRef.current.focus();

}

    return (
        <>
            <h1>forwardRef </h1>
            <h2>change value of text field which is
                put on child companent
                 </h2>

                 <Forwardrefchild ref={inputRef}/>
           <button className="button button3" onClick={parentbutton}>parent-btn </button>

        </>
    )
}
