import React from 'react';

const QuizContainer = ({quizData}) => {
    return (
        <div>
            <h3>{quizData.question.slice(3, -4)}</h3>
        </div>
    );
};

export default QuizContainer;