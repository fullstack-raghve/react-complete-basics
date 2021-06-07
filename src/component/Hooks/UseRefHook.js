import React,{useRef} from 'react'

export const UseRefHook = () => {
   const inputRef = useRef(null);

   function handleInput(){
      console.log('working');
      inputRef.current.value = '100';
     inputRef.current.focus();
     inputRef.current.style.color = 'red';
    // inputRef.current.style.display = 'none';

   }

    return (
        <>
           <h1>useRef hook</h1> 
           <p>focus,color,value etc handlers</p>
           <p>
           <a href="https://www.youtube.com/watch?v=86EkZzXyScQ&t=13s" target="_blank">https://www.youtube.com/watch?v=86EkZzXyScQ&t=13s</a>
           </p>
               <input type ="text" ref={inputRef} />
               <button className="button button4" onClick={handleInput}>Handle Input </button>

           
        </>
    )
}
