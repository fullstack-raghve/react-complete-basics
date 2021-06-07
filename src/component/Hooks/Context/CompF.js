import React, { Component } from 'react'
import { UConsumer } from './userContext'

// export const CompF = () => {
class CompF extends Component  {
    render(){
        return(
            <UConsumer>
                {
                    username =>{
                        return <p>hello username{}</p>
                    }
                }
            </UConsumer>

        )
    }
}

export default CompF;
