import React from 'react'
import { UConsumer } from './userContext'

export const CompCC = () => {
    return (
        <UConsumer>
           {
               username =>{
                   return <p>hii {username}</p>
               }
           }
        </UConsumer>
    )
}
