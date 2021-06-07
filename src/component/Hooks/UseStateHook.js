import React, { useState, useEffect } from 'react'

export const UseStateHook = () => {
    ///notes
    //1>syntax called array destrucring in js
    //2>only call hooks at the top level
    //3>dont call hooks inside loops,conditions,or nested funcations
    //only call hooks in ract funcational comp.


    const [val, setvalue] = useState(4);
    const [age, setAge] = useState(30);
    const [name, setName] = useState('Rahul');
    const [count, setCount] = useState(0);

    let intialval = 0;
    const [newcount, setNewCount] = useState(intialval);

    const [names, setNames] = useState({
        firstName: '',
        lastName: ''
    });

    const [items, setitems] = useState([]);

    const addItem = () => {
        setitems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }


    useEffect(() => {
        console.log('i am from use effect > virtual comp')
    }, [])


    return (
        <>
            <h1>use of react fragment to hide extra div from dom</h1>
            <p>more example of tr ,td</p>
<h1>
suppose we want to call useEffect when we set age ,so we need to pass - [age]
</h1>
            <h1>Example of virtual dom and use of useState hook</h1>

            <ul>
                <li>list item 1</li>
                <li>list item 2</li>
                <li>list item 3</li>
                <li>list item {val}</li>
            </ul>

            <button className="button"
                onClick={() => setvalue(5)}>Chnage li</button>

            <h1>Example of age </h1>
            <p>age is :{age}</p>
            <button className="button button1" onClick={() => setAge(35)}>Set age</button>

            <h1>Example of Name </h1>
            <p>Name is :{name}</p>
            <button className="button button2" onClick={() => setName('Raghve')}>Set name</button>

            <h1>Example of Counter </h1>
            <p>Counter is :{count}</p>
            <button className="button button2" onClick={() => setCount(count + 1)}>Count</button>

            <h1>Example of Counter with previous value </h1>
            <p>Counter is :{newcount}</p>
            <button className="button button2" onClick={() => setNewCount(intialval)}>Reset</button>
            <button className="button button3" onClick={() => setNewCount(newcount + 1)}>Increment</button>
            <button className="button button4" onClick={() => setNewCount(newcount - 1)}>Decrement</button>
            <button className="button button5" onClick={() => setNewCount(newcount + 5)}>Increment by 5</button>

            <h1>Example of useState with object use of spread to merge the state </h1>
            <p>chk using after removing spread operator -- ...name</p>
            <h2>firstname:{names.firstName}</h2>

            <h2>lastname:{names.lastName}</h2>
            <h2>name:{JSON.stringify(names)}</h2>

            <form>
                <div>
                    <lable>firstname:{names.firstName}</lable>
                    <input type="text"
                        placeholder="firstName"
                        value={names.firstName}
                        onChange={e => setNames({ ...names, firstName: e.target.value })}
                    />
                </div>
                <div>
                    <lable>lastname:{names.lastName}</lable>

                    <input type="text"
                        placeholder="lastName"
                        value={names.lastName}
                        onChange={e => setNames({ ...names, lastName: e.target.value })}
                    />
                </div>
            </form>

            <br />


            <h1>Example of useState with array  </h1>
            <h2>here we will also use spread operator as we know state not updating in last example</h2>
            <h2>Note - when dealing with objects or array,always make sure to spread your state variable and then call setter function</h2>
            <div style={{ margin: "50px" }}>
                <button className="button button5" onClick={addItem}>Add item in array</button>
                {
                    items.map((itm, index) => <li key={itm.id}>{itm.value}</li>)
                }
            </div>
        </>
    )
}
