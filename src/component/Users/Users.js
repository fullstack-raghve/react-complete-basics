import React, { useEffect,useState}  from 'react';
import { Loader } from '../../shared/Loader';
import { UserList } from './UserList';



export const Users = () => {

    const [users, setUsers] = useState([]);
    const [loading,setLoading] =  useState(true);


    const urlJson= 'https://jsonplaceholder.typicode.com/users';
    useEffect(()=>{
        fetch(urlJson)
        .then((response) => response.json())
        .then((data) =>{
            let newdata = data;
            console.log('newdata',newdata)
            setUsers(newdata);
            setLoading(false);
        });
    },[])
    
  
    return (
        <div>
            <h2>Users list</h2>
           
            { loading ? <Loader/> :
                 users.map((user,index)=>{
                  return <UserList item = {user}  key = {user.id}/>
                })
            }
        </div>
    )
}
