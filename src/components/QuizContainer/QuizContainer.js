import React from 'react';

const QuizContainer = ({quizData}) => {
    function createMarkup(c) {
        return {__html: c};
    }
      
    return (
        <div>
            <h3><div dangerouslySetInnerHTML={createMarkup(quizData.question)} /></h3>
            

        </div>
    );
};

export default QuizContainer;