import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizContainer from '../QuizContainer/QuizContainer';


const Quiz = () => {
    const quiz = useLoaderData().data.questions;
    console.log(quiz);
    return (
        <div>
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