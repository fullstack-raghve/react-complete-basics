import React from 'react'
import { CompB } from './CompB'

//export const CompA = (props) => {
    export const CompA = ({sendname}) => {

    return (
        <div>
            <h3>i am component A</h3>
            
            {/* <p>this data is from usecontext component to compA -- {props.sendname}</p> */}
            <p>this data is from usecontext component to compA -- {sendname}</p>
            <CompB name= {sendname}/>

        </div>
    )
}
