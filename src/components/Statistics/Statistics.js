import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Statistic from '../Statistic/Statistic';
import './Statistics.css';

const Statistics = () => {
    const quizTopic = useLoaderData().data;
    return (
        <div className='statistics-container container'>
            <table>
                <tr>
                    <th>Image</th>
                    <th>Quiz topic</th>
                    <th>Total Quiz</th>
                </tr>
                    {
                        quizTopic.map(statistic => <Statistic
                            key={statistic.id}
                            statistic={statistic}
                        ></Statistic>)
                    }
            </table>

        </div>
    );
};

export default Statistics;