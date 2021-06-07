import React,{ useState, useCallback } from 'react'
import  Button  from './Button'
import  Count  from './Count'
import  Title  from './Title'

export const MainComp = () => {
 const [age, setage] = useState(25)
 const [salary, setsalary] = useState(5000)

// const incrementAge = () =>{
//     setage(age=>age+1)
// }
const incrementAge = useCallback(() =>{
    setage(age=>age+1)
},[age]) 


// const incrementSalary = () =>{
//     setsalary(salary=>salary+1000)
// }

const incrementSalary = useCallback(() =>{
    setsalary(salary=>salary+1000)
},[salary])

    return (
        <div>
            <h2>what ? -use call back is a hook that will return a memoized version of 
                the callback funcation that only chnages if one of the dependencies has changed
            </h2>
            <h2>
                why ? - it is useful when passing callbacks to optimized child component that rely on refrence equality
                to prevent unnessarry renders.
            </h2>
            <p>usecallback used in performance optimization</p>
            <p>we will use here useMemo for not re-rendring other componets ,when props or state not chnages</p>
            <p>in Button comp we are passing function as a prop so-usememo not working while in title its working</p>

            <Title mytext ="usecallback title"/>
            <Count text="Age" count = {age}/>
            <Button handleClick = {incrementAge}>
                Increment Age
                </Button>
                <Count text="Salary" count = {salary}/>
            <Button handleClick = {incrementSalary}>
                Increment Salary
                </Button>
        </div>
    )
}
