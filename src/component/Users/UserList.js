import React from 'react'
import { Link } from 'react-router-dom'
import './User.css'

export const UserList = props => {

   

    return (

        <div className="card">
            <div className="container">
                <h4><b>{props.item.name}</b></h4>
                <p>Email  - {props.item.email}</p>
                <button>Details</button>
                <Link to = {`/user/${props.item.id}`}>View</Link>
            </div>
        </div>

    )
}
