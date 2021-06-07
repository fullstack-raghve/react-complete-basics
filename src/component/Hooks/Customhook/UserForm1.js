import { userInfo } from 'node:os';
import React,{useState} from 'react'
import { UseInput } from './UseInput';

export const UserForm1 = () => {
    //const [firstname, setfirstname] = useState('');
    //const [lastname, setlastname] = useState('');

   const[firstname, bindFirstname, resetfirstname] = UseInput('');
   const[lastname, bindLastname, resetlastname] = UseInput('')

   const submitForm = e =>{
       e.preventDefault();
       console.log(`firstname: ${firstname} and lastname: ${lastname}`);
       //console.log(e.target[0].value)
       resetfirstname()
       resetlastname()
       ///alert(`firstname: ${firstname} and lastname: ${lastname}`)
   }

    return (
        <>
        <h1>form with custom hooks</h1>
           <form onSubmit={submitForm}>
               <input type="text"
               {...bindFirstname}
               placeholder="firstname"/>

               <input type="text"
               {...bindLastname}
                placeholder="lastname"/>
               <button className="button button3">Sumit form </button>

           </form>

        </>
    )
}
