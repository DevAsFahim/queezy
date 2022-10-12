import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizContainer from '../QuizContainer/QuizContainer';
import './Quiz.css'


const Quiz = () => {
    const [wrongAnsCount, setWrongAnsCount] = useState(0)
    const [rightAnsCount, setRightAnsCount] = useState(0)
    const quiz = useLoaderData().data.questions;
    const quizName = useLoaderData().data.name;

    const ansCounter = (data, ans) => {
        data === ans ? setRightAnsCount(rightAnsCount + 1) : setWrongAnsCount(wrongAnsCount + 1)
    }
    return (
        <div className='container quiz my-5'>
            <h1>Quiz from '{quizName}'</h1>
            <div className="quiz_main_container">
                <div className="answer_counter">
                    <h5 className='mb-3'>Answer Count</h5>
                    <p className='mb-1'>right answer: {rightAnsCount} </p>
                    <p>wrong answer: {wrongAnsCount} </p>
                </div>
                <div>
                {
                    quiz.map(quizData => <QuizContainer
                        key={quizData.id}
                        quizData={quizData}
                        ansCounter={ansCounter}
                    ></QuizContainer>)
                }
                </div>
            </div>
        </div>
    );
};

export default Quiz;