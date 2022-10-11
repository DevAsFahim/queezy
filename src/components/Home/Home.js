import React from 'react';
import { useLoaderData } from 'react-router-dom';
import bannerImage from '../../banner.png'
import QuizTopic from '../QuizTopic/QuizTopic';
import './Home.css'

const Home = () => {
    const quizTopic = useLoaderData().data;
    return (
        <div className="home container">
            <section className='banner d-flex align-items-center'>
                <div className="banner_content">
                    <h1>Make Sour Brain Sharp</h1>
                    <p>Completing quiz is an effective way to sharp your brain. It's a great exercise for to increase your thinking. So get ready to have ride to tide of quiz</p>
                </div>

                <div className="banner_img">
                    <img src={bannerImage} alt="" />
                </div>
            </section>

            <section className="quiz_container d-flex flex-wrap gap-3 mb-5">
                {
                    quizTopic.map(quiz => <QuizTopic
                        key={quiz.id}
                        quiz={quiz}
                    ></QuizTopic>)
                }
            </section>
        </div>
    );
};

export default Home;