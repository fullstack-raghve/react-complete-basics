import React from 'react'

//destrure here -
export const Questions = ({matchAns,qnColor,data:{question, correct_answer,incorrect_answers, ans}}) => {
   // console.log('props',props);
   // console.log(props.data?.question);
console.log('qnColor',qnColor)
    return (
        <>
            <p>Innr question component </p>
            <div className="questionClass">
                <h1 dangerouslySetInnerHTML={{__html:question}} />
                {/* <h1>{question}</h1> */}

            </div>
            <div className="button-overall">
            {/* <button className="normal-button">
                {correct_answer}
                </button>  */}
{/* 
                <button className="normal-button" dangerouslySetInnerHTML={{__html:correct_answer}} />
                <button className="normal-button" dangerouslySetInnerHTML={{__html:incorrect_answers[0]}} />
                <button className="normal-button" dangerouslySetInnerHTML={{__html:incorrect_answers[1]}} />
                <button className="normal-button" dangerouslySetInnerHTML={{__html:incorrect_answers[2]}} /> */}
{
    ans.map((answers,index)=>
    <button 
    key={index}
     className="normal-button"
    
      dangerouslySetInnerHTML={{__html:answers}} 
      onClick={()=>matchAns(answers)}
      /> 

    )
}
             </div>
           {/* <p>{props.data?.question}</p> */}
        </>
    )
}
