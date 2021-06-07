import React,{forwardRef} from 'react';

const Forwardrefchild =(props,ref)=> {
    return (
        <div>
            <h1>i am from child componentss</h1>
            <h1>remember bracket issue while importing</h1>
            <input type="text" ref={ref} placeholder="child input"/>
        </div>
    )
}

export default forwardRef(Forwardrefchild);
