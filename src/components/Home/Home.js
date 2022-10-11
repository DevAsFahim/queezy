import React from 'react';
import bannerImage from '../../banner.png'
import './Home.css'

const Home = () => {
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
        </div>
    );
};

export default Home;