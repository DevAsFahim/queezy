import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizContainer from '../QuizContainer/QuizContainer';
import './Quiz.css'


const Quiz = () => {
    const quiz = useLoaderData().data.questions;
    const quizName = useLoaderData().data.name;
    console.log(quiz);
    return (
        <div className='container quiz my-5'>
            <h1>Quiz from '{quizName}'</h1>
            {
                quiz.map(quizData => <QuizContainer
                    key={quizData.id}
                    quizData={quizData}
                ></QuizContainer>)
            }
        </div>
    );
};

export default Quiz;