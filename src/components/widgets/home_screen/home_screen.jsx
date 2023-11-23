import React, { useEffect, useState } from 'react';
import '../../styles/permits_screen/Sass/main.scss';
import '../../styles/home_screen/information_screen.css';

const HomeScreenComponent = () => {

    const data = ['welcome..!', 'New destination?', 'Are permits required?'];
    const text = data[0];
    const text1 = data[1];
    const text2 = data[2];
    const [animationTriggered, setAnimationTriggered] = useState(false);
    var letters = Array.from(text).map((char, index) => (
        <span key={index} className='letter' id='home-screen'>
            {char}
        </span>
    ));

    var letters2 = Array.from(text1).map((char, index) => (
        <span key={index} className='letter' id='home-screen'>
            {char}
        </span>
    ));

    var letters3 = Array.from(text2).map((char, index) => (
        <span key={index} className='letter' id='home-screen'>
            {char}
        </span>
    ));


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setAnimationTriggered(true);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="wrapper-home-screen">
            <div class="content">
                <div class="content__container">
                    <p class="content__container__text"></p>
                    <ul class="content__container__list">
                        <li class="content__container__list__item">
                            <div className={`wrapper ${animationTriggered ? 'animate' : ''}`}
                                id='home-screen'>
                                <div className='letters'>
                                    <p>{letters}</p>
                                </div>
                            </div>
                        </li>
                        <li class="content__container__list__item">
                            <div className={`wrapper ${animationTriggered ? 'animate' : ''}`}
                                id='home-screen'>
                                <div className='letters'>
                                    <p>{letters2}</p>
                                </div>
                            </div>
                        </li>
                        <li class="content__container__list__item">
                            <div className={`wrapper ${animationTriggered ? 'animate' : ''}`}
                                id='home-screen'>
                                <div className='letters'>
                                    <p>{letters3}</p>
                                </div>
                            </div>
                        </li>
                        <li class="content__container__list__item">
                            <div className={`wrapper ${animationTriggered ? 'animate' : ''}`}
                                id='home-screen'>
                                <div className='letters'>
                                    <p>{letters}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HomeScreenComponent;
