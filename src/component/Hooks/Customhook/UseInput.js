import React,{useState} from 'react'

export const UseInput = () => {
   
    const [value, setvalue] = useState('');

    const reset = () => {
        setvalue('')
    }

    const bind = {
        value, //sort syntx of es5=>value:value,
         onchange: e => {
            setvalue(e.target.value)
         }
    }

    return [value, bind, reset]
}
