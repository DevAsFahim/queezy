import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import './QuizContainer.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizContainer = ({quizData}) => {
    function createMarkup(c) {
        return {__html: c};
    }
    const selected = (data) => {
        data === quizData.correctAnswer ? toast.success('Wow! You are right') : toast.error('Oops! Answer is not correct')
        
        console.log(data);
    }
    const showAns = () => toast.success(`Answer is:  ${quizData.correctAnswer}`)
    
    return (
        <div className='quiz_wrapper'>
            <EyeIcon onClick={showAns} className="eye"/>
            <h5 className='mb-4'><div dangerouslySetInnerHTML={createMarkup(quizData.question)} /></h5>
            <div className="options">
                {
                    quizData.options.map(data => <p onClick={() => selected(data)}>{data}</p>)
                }
                <ToastContainer />
            </div>
        </div>
    );
};

export default QuizContainer;