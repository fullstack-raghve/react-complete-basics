
import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Loader } from '../../shared/Loader';
import { Questions } from './Questions';
import './Quiz.css'

const API_URL = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";


export const Quiz = () => {

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setloading] = useState(true);
    const [score, setScore] = useState(0);
    const [qnColor, setqnColor] = useState(false);


  useEffect(() => {
    Axios.get(API_URL)
    .then(res=>res.data)
    .then(dataqq =>{
        console.log('question before shuffle>>>',dataqq);
//let shuffle this - to random answers-start
const questions = dataqq.results.map((qus)=> ({
  ...qus,
  ans:[qus.correct_answer,...qus.incorrect_answers].sort(()=>Math.random()-0.5)
}))
//let shuffle this - to random answers-end
console.log('question after shuffle>>>',questions);

       // setQuestions(dataqq.results);
       setQuestions(questions)
        setloading(false);
    })
  }, [])

const matchAns = (anss)=>{
  if(anss === questions[currentIndex].correct_answer){
    setScore(score=>score+1);
    setqnColor(true)
  }
  setCurrentIndex(currentIndex=>currentIndex+1);
 // setqnColor(false)

}

    return (
      
        <div className="container">
            <p className="questionClass">I am from quiz comp</p>
            <p className="questionClass">https://github.com/kj6995/React-Quiz-App
</p>
<p>your score is - {score}</p>

  { 
  loading ? <Loader/> :
  currentIndex >= questions.length ? (<p>Test Completed</p>) :
              (<Questions
              matchAns = {matchAns}
              qnColor = {qnColor}
               data = {questions[currentIndex]}/>
              )
            }
            {/* <Questions data = {questions[currentIndex]}/> */}
        </div>
    )
}
