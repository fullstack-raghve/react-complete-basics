import React,{useState} from 'react'

export const UserForm = () => {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');

   const submitForm = e =>{
       e.preventDefault();
       console.log(`firstname: ${firstname} and lastname: ${lastname}`);
       //console.log(e.target[0].value)


       ///alert(`firstname: ${firstname} and lastname: ${lastname}`)
   }

    return (
        <>
        <h1>form without custom hooks</h1>
           <form onSubmit={submitForm}>
               <input type="text"
                value = {firstname}
               onChange={e => setfirstname(e.target.value)}
               placeholder="firstname"/>

               <input type="text"
               value = {lastname}
                onChange={e => setlastname(e.target.value)}
                placeholder="lastname"/>
               <button className="button button3">Sumit form </button>

           </form>

        </>
    )
}
