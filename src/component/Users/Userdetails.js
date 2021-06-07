import React, {useEffect,useState} from 'react'
import { useParams,useHistory,useLocation } from 'react-router'
import { Loader } from '../../shared/Loader';


export const Userdetails = () => {
    const { id } = useParams();
    const [load, setload] = useState(true);
    
const history = useHistory();
const location = useLocation();

console.log('history',history)
console.log('location',location)

  const [user, setuser] = useState({
    name: "",
    username: "",
    email: "",  
    phone: "",
    website: ""
  });

    const urlJson= 'https://jsonplaceholder.typicode.com/users/';
    useEffect(()=>{
        apiCall()
        // fetch(urlJson+id)
        // .then((response) => response.json())
        // .then((data) =>{
        //     let singleuser = data;
        //     console.log('single user',singleuser);

        //     setuser(singleuser);
        //     setload(false);
            
        // });
    },[])


   const apiCall = () =>{
    fetch(urlJson+id).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((responseJson) => {
        // Do something with the response
        let singleuser = responseJson;
        console.log('single user',singleuser);

        setuser(singleuser);
        setload(false);
      })
      .catch((error) => {
        console.log(error)
      });
   }
  
    return (
        load ? <Loader/> : 
        <div>
            <h3 style={{ fontSize: "50px" }}>User Details {id}</h3>
            <ul class="list-group">
    <li class="list-group-item">{user.name}</li>
    <li class="list-group-item">{user.username}</li>
    <li class="list-group-item">{user.email}</li>
    <li class="list-group-item">{user.phone}</li>
    <li class="list-group-item">{user.website}</li>
    
  </ul>
  {
    location.pathname === '/user/1' ? 
    <div>
<h3>This is conditional heading </h3>
      </div>
      :
      <div><p>This is conditional paagraph </p></div>
  }

  <button className="button button2" onClick={()=>history.goBack()}>Back </button>
  <button className="button button3" onClick={()=>history.push('/')}>Go to home </button>

        </div>
    )
}
