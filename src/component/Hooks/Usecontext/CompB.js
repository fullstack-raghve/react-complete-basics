import React,{useContext} from 'react'
import { sendataContext } from './Usecontext'

export const CompB = ({name}) => {

    const consumerDataContext = useContext(sendataContext)

    return (
        <div>
            <h3>I AM COMP B</h3>
            <p>This data is from compA to compB{name}</p>
            <p>This data is from usecontext comp  to compB using create and use context{consumerDataContext}</p>


        </div>
    )
}
