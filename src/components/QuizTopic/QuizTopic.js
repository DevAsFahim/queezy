import React from 'react';
import { Link } from 'react-router-dom';
import './QuizTopic.css'

const QuizTopic = ({ quiz }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0 align-items-center">
                <div className="col-md-4">
                    <img src={quiz.logo} className="img-fluid rounded-start" alt="" />
                </div>
                <div className="col-md-8 ps-3">
                    <div className="card-body">
                        <h5 className="card-title mb-4">{quiz.name}</h5>
                        <Link to={`quizTopic/${quiz.id}`} className='btn'>Let's go</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizTopic;