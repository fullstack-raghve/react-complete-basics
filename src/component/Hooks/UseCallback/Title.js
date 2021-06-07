import React from 'react'

const Title = ({mytext}) => {
    console.log('text is',mytext)
    return (
        <div>
            <p>{mytext}</p>
            {/* <p>use callback hook</p> */}
        </div>
    )
}
export default React.memo(Title);
